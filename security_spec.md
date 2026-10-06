# Security Specification (`security_spec.md`)

## 1. Data Invariants
1. **Default Deny**: All paths not explicitly matched (`/{document=**}`) deny all read and write access (`allow read, write: if false;`).
2. **Admin Verification**: Admin privileges (`isAdmin()`) require an authenticated user (`request.auth != null`), a verified email (`request.auth.token.email_verified == true`), and either a matching document in `/admins/$(request.auth.uid)` or the bootstrapped owner email (`alameerproduction@gmail.com`).
3. **PII Isolation (`inquiries`)**: `inquiries` documents contain client PII (`fullName`, `whatsapp`, `email`). Public visitors can only `create` a valid inquiry with `status == 'new'`, `adminNotes == ''`, and `createdAt == request.time`. Only `isAdmin()` can `get`, `list`, `update`, or `delete` inquiries.
4. **Packages Integrity (`packages`)**: Any visitor can `get` or `list` published Umrah packages (`resource.data.name is string`), while only `isAdmin()` can `create`, `update`, or `delete` packages, enforcing strict key validation, string length limits, bounded highlights list (`size() <= 8`), immutable `createdAt` and `createdBy`, and `updatedAt == request.time`.
5. **Reviews Moderation (`reviews`)**: Public visitors can `create` a valid review and `get`/`list` reviews where `resource.data.status == 'approved'`. Only `isAdmin()` can `update` (moderate status) or `delete` reviews.

## 2. The "Dirty Dozen" Payloads
1. **Shadow Field Injection on Inquiry Creation**: Adding `"isVerified": true` to `/inquiries/AH-100001`. Rejected by `.keys().hasOnly(...)`.
2. **Timestamp Spoofing on Inquiry Creation**: Passing a forged past/future timestamp for `createdAt` instead of `request.time`. Rejected by `incoming().createdAt == request.time`.
3. **Pre-Approved Inquiry Status Injection**: Creating an inquiry with `status: 'booked'` or non-empty `adminNotes`. Rejected by `incoming().status == 'new' && incoming().adminNotes == ''`.
4. **Unauthenticated PII Read/List**: Attempting `get` or `list` on `/inquiries` without admin credentials. Rejected by `isAdmin()`.
5. **Non-Admin Authenticated PII Read**: Signed-in non-admin user attempting to `get` `/inquiries/AH-100001`. Rejected by `isAdmin()`.
6. **Email Spoofing Attack**: User with `email == 'alameerproduction@gmail.com'` but `email_verified == false` attempting admin write. Rejected by `request.auth.token.email_verified == true`.
7. **ID Poisoning Attack**: Creating a document with a 500-character or special-character ID. Rejected by `isValidId(id)`.
8. **Denial-of-Wallet String Overflow**: Submitting a 50KB `message` in `/inquiries`. Rejected by `data.message.size() <= 1500`.
9. **Unbounded Array Attack on Packages**: Admin or attacker submitting 50 items in `highlights` array on `/packages`. Rejected by `data.highlights.size() <= 8`.
10. **Immutable Field Mutation on Update**: Updating `createdAt` or `referenceCode` on an existing inquiry. Rejected by `incoming().createdAt == existing().createdAt` and `affectedKeys().hasOnly(...)`.
11. **Self-Assigned Admin Escalation**: Regular user attempting to create `/admins/{theirUid}` with `role: 'admin'`. Rejected by `isBootstrappedAdmin()`.
12. **Value Poisoning on Update**: Admin updating `status` on `/inquiries` to an invalid enum value `"hacked"`. Rejected because `isValidInquiry(incoming())` wraps the entire `allow update` block.
