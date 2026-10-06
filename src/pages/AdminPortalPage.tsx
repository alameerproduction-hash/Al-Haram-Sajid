import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  User,
  KeyRound,
  LogOut,
  Inbox,
  Compass,
  Star,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Users,
  Calendar,
  ArrowLeft,
  AlertCircle,
  Search,
  Building2,
  Eye,
  EyeOff,
} from 'lucide-react';
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import {
  db,
  auth,
  handleFirestoreError,
  OperationType,
} from '../lib/firebase';
import {
  IMAGES,
  UMRAH_PACKAGES,
  UmrahPackage,
  PageId,
} from '../data/siteData';
import { StoredInquiry } from '../components/InquiryFormSection';
import { SquircleIcon } from '../components/SquircleIcon';
import { OfficialBrandLogo } from '../components/OfficialBrandLogo';

interface AdminPortalPageProps {
  onNavigate: (page: PageId) => void;
}

interface AdminReviewItem {
  id: string;
  name: string;
  journeyType: string;
  rating: number;
  comment: string;
  date: string;
  status?: 'approved' | 'pending' | 'rejected';
}

// Obfuscated credential verification so raw credentials never appear on screen
const EXPECTED_USER_CODE = [
  115, 97, 106, 105, 100, 107, 97, 104, 108, 111, 111, 110, 57, 50,
];
const EXPECTED_PASS_CODE = [
  97, 108, 104, 97, 114, 109, 57, 57, 115, 97, 106, 105, 100,
];

function verifyExecutiveCredentials(u: string, p: string): boolean {
  const cleanUser = u.trim();
  const cleanPass = p;
  if (
    cleanUser.length !== EXPECTED_USER_CODE.length ||
    cleanPass.length !== EXPECTED_PASS_CODE.length
  ) {
    return false;
  }
  const userMatch = EXPECTED_USER_CODE.every(
    (code, i) => cleanUser.charCodeAt(i) === code
  );
  const passMatch = EXPECTED_PASS_CODE.every(
    (code, i) => cleanPass.charCodeAt(i) === code
  );
  return userMatch && passMatch;
}

export const AdminPortalPage: React.FC<AdminPortalPageProps> = ({
  onNavigate,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('al_haram_admin_auth') === 'verified';
    } catch {
      return false;
    }
  });

  // Strict manual login inputs — never pre-filled, no hints or credentials shown on screen
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [activeTab, setActiveTab] = useState<
    'inquiries' | 'packages' | 'reviews'
  >('inquiries');

  // Inquiries State
  const [inquiries, setInquiries] = useState<StoredInquiry[]>([]);
  const [inquiryFilter, setInquiryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Packages State
  const [customPackages, setCustomPackages] = useState<UmrahPackage[]>([]);
  const [newPkgName, setNewPkgName] = useState('');
  const [newPkgSubtitle, setNewPkgSubtitle] = useState('');
  const [newPkgDuration, setNewPkgDuration] = useState(
    '14 Days (Customizable)'
  );
  const [newPkgMakkah, setNewPkgMakkah] = useState(
    'Stay near Masjid al-Haram Courtyard'
  );
  const [newPkgMadinah, setNewPkgMadinah] = useState(
    'Stay near Al-Masjid an-Nabawi'
  );
  const [newPkgHotelCat, setNewPkgHotelCat] = useState(
    '5-Star / Executive Selection'
  );
  const [newPkgTransport, setNewPkgTransport] = useState(
    'Private Air-Conditioned Transfers'
  );
  const [pkgSuccessMsg, setPkgSuccessMsg] = useState('');

  // Reviews State
  const [reviews, setReviews] = useState<AdminReviewItem[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setFirebaseUser(u);
    });
    return () => unsub();
  }, []);

  // Load & sync data when authenticated in the Admin Portal
  useEffect(() => {
    if (!isAuthenticated) return;

    // Load local inquiries
    let localInq: StoredInquiry[] = [];
    try {
      const savedInq = JSON.parse(
        localStorage.getItem('al_haram_inquiries') || '[]'
      );
      if (Array.isArray(savedInq)) {
        localInq = savedInq;
        setInquiries(savedInq);
      }
    } catch {
      // Ignore storage error
    }

    // Load local custom packages
    try {
      const savedPkgs = JSON.parse(
        localStorage.getItem('al_haram_custom_packages') || '[]'
      );
      if (Array.isArray(savedPkgs)) {
        setCustomPackages(savedPkgs);
      }
    } catch {
      // Ignore storage error
    }

    // Load local client reviews
    try {
      const savedRevs = JSON.parse(
        localStorage.getItem('al_haram_client_reviews') || '[]'
      );
      if (Array.isArray(savedRevs)) {
        setReviews(savedRevs);
      }
    } catch {
      // Ignore storage error
    }

    // If Firebase user is also authenticated as verified admin, attach real-time Firestore listener
    if (firebaseUser && firebaseUser.emailVerified) {
      const unsubInquiries = onSnapshot(
        collection(db, 'inquiries'),
        (snap) => {
          const remoteList: StoredInquiry[] = snap.docs.map((d) => {
            const data = d.data();
            return {
              id: data.referenceCode || d.id,
              fullName: data.fullName || '',
              whatsapp: data.whatsapp || '',
              email: data.email || '',
              travelers: data.travelers || '1',
              travelType: data.travelType || 'Umrah',
              preferredDate: data.preferredDate || 'Flexible Dates',
              message: data.message || '',
              status: data.status || 'new',
              adminNotes: data.adminNotes || '',
              submittedAt: 'Synced Record',
            };
          });
          if (remoteList.length > 0) {
            const mergedMap = new Map<string, StoredInquiry>();
            [...remoteList, ...localInq].forEach((item) => {
              mergedMap.set(item.id, item);
            });
            setInquiries(Array.from(mergedMap.values()));
          }
        },
        (error) => {
          try {
            handleFirestoreError(error, OperationType.LIST, 'inquiries');
          } catch {
            // Keep local inquiries state
          }
        }
      );

      return () => {
        unsubInquiries();
      };
    }
  }, [isAuthenticated, firebaseUser]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (!usernameInput.trim() || !passwordInput) {
      setLoginError('Please enter both your administrator username and password.');
      return;
    }

    if (verifyExecutiveCredentials(usernameInput, passwordInput)) {
      try {
        sessionStorage.setItem('al_haram_admin_auth', 'verified');
      } catch {
        // Ignore storage error
      }
      setIsAuthenticated(true);
      setUsernameInput('');
      setPasswordInput('');
    } else {
      setLoginError('Invalid administrator username or password. Access denied.');
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('al_haram_admin_auth');
    } catch {
      // Ignore storage error
    }
    setIsAuthenticated(false);
    setUsernameInput('');
    setPasswordInput('');
  };

  const handleUpdateInquiryStatus = async (
    id: string,
    nextStatus: 'new' | 'contacted' | 'booked' | 'archived'
  ) => {
    const updated = inquiries.map((item) =>
      item.id === id ? { ...item, status: nextStatus } : item
    );
    setInquiries(updated);
    try {
      localStorage.setItem('al_haram_inquiries', JSON.stringify(updated));
    } catch {
      // Ignore storage error
    }

    if (firebaseUser && firebaseUser.emailVerified) {
      const target = updated.find((i) => i.id === id);
      try {
        await updateDoc(doc(db, 'inquiries', id), {
          status: nextStatus,
          adminNotes: (target?.adminNotes || '').slice(0, 1000),
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        try {
          handleFirestoreError(
            error,
            OperationType.UPDATE,
            `inquiries/${id}`
          );
        } catch {
          // Local update already saved
        }
      }
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    const updated = inquiries.filter((item) => item.id !== id);
    setInquiries(updated);
    try {
      localStorage.setItem('al_haram_inquiries', JSON.stringify(updated));
    } catch {
      // Ignore storage error
    }

    if (firebaseUser && firebaseUser.emailVerified) {
      try {
        await deleteDoc(doc(db, 'inquiries', id));
      } catch (error) {
        try {
          handleFirestoreError(
            error,
            OperationType.DELETE,
            `inquiries/${id}`
          );
        } catch {
          // Local delete already completed
        }
      }
    }
  };

  const handleAddPackage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPkgName.trim() || !newPkgSubtitle.trim()) return;

    const pkgId = `pkg-${Date.now()}`;
    const createdPkg: UmrahPackage = {
      id: pkgId,
      name: newPkgName.trim().slice(0, 140),
      subtitle: newPkgSubtitle.trim().slice(0, 160),
      duration: newPkgDuration.trim().slice(0, 100),
      makkahStay: newPkgMakkah.trim().slice(0, 160),
      madinahStay: newPkgMadinah.trim().slice(0, 160),
      hotelCategory: newPkgHotelCat.trim().slice(0, 160),
      transport: newPkgTransport.trim().slice(0, 160),
      guidance: 'Dedicated Step-by-Step Umrah & Ziyarat Guidance',
      support: '24/7 Personal Travel Coordinator & On-Ground Assistance',
      flightInfo: 'Direct or Preferred Airline Routing from Pakistan',
      availabilityNote: 'Contact us for current availability and pricing.',
      image: IMAGES.heroHaram,
      highlights: [
        'Complete Umrah visa processing & documentation',
        'Personalized itinerary built around your preferred dates',
        'Private or group air-conditioned Ziyarat transport',
        'Full travel assistance from Gujranwala departure to return',
      ],
    };

    const nextPackages = [createdPkg, ...customPackages];
    setCustomPackages(nextPackages);
    try {
      localStorage.setItem(
        'al_haram_custom_packages',
        JSON.stringify(nextPackages)
      );
    } catch {
      // Ignore storage error
    }

    if (firebaseUser && firebaseUser.emailVerified) {
      try {
        await setDoc(doc(db, 'packages', pkgId), {
          name: createdPkg.name,
          subtitle: createdPkg.subtitle,
          duration: createdPkg.duration,
          makkahStay: createdPkg.makkahStay,
          madinahStay: createdPkg.madinahStay,
          hotelCategory: createdPkg.hotelCategory,
          transport: createdPkg.transport,
          guidance: createdPkg.guidance,
          support: createdPkg.support,
          flightInfo: createdPkg.flightInfo,
          availabilityNote: createdPkg.availabilityNote,
          image: createdPkg.image,
          highlights: createdPkg.highlights,
          createdBy: firebaseUser.uid,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        try {
          handleFirestoreError(
            error,
            OperationType.CREATE,
            `packages/${pkgId}`
          );
        } catch {
          // Local package saved
        }
      }
    }

    setNewPkgName('');
    setNewPkgSubtitle('');
    setPkgSuccessMsg('New Umrah package published to the website.');
    setTimeout(() => setPkgSuccessMsg(''), 4000);
  };

  const handleDeleteCustomPackage = (id: string) => {
    const nextPackages = customPackages.filter((p) => p.id !== id);
    setCustomPackages(nextPackages);
    try {
      localStorage.setItem(
        'al_haram_custom_packages',
        JSON.stringify(nextPackages)
      );
    } catch {
      // Ignore storage error
    }
  };

  const handleDeleteReview = (id: string) => {
    const nextReviews = reviews.filter((r) => r.id !== id);
    setReviews(nextReviews);
    try {
      localStorage.setItem(
        'al_haram_client_reviews',
        JSON.stringify(nextReviews)
      );
    } catch {
      // Ignore storage error
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const status = inq.status || 'new';
    const matchesStatus =
      inquiryFilter === 'all' || status === inquiryFilter;
    const matchesSearch =
      !searchQuery.trim() ||
      inq.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.whatsapp.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.travelType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // 1. STRICT MANUAL LOGIN SCREEN (No 1-click login, no credentials shown on screen)
  if (!isAuthenticated) {
    return (
      <div className="min-h-[88vh] pt-28 pb-20 flex items-center justify-center bg-[#0F0F0F] bg-islamic-pattern-dark px-4">
        <div className="w-full max-w-md rounded-3xl bg-[#FFFFFF] border-2 border-[#EEA012] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.75)] overflow-hidden">
          {/* Top Brand Bar */}
          <div className="bg-[#0F0F0F] px-7 py-6 border-b-2 border-[#EEA012] flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-[14px] bg-[#FFFFFF] border-2 border-[#EEA012] p-1 flex items-center justify-center shrink-0">
                <OfficialBrandLogo
                  className="w-full h-full"
                  showWordmark={false}
                />
              </div>
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.18em] text-[#EEA012] uppercase">
                  Executive Access Only
                </p>
                <h1 className="font-display text-lg font-extrabold text-[#FFFFFF]">
                  ADMIN PORTAL
                </h1>
              </div>
            </div>
            <SquircleIcon variant="dark" size="sm">
              <Lock className="w-4 h-4 text-[#EEA012]" />
            </SquircleIcon>
          </div>

          {/* Credentials Form */}
          <form
            onSubmit={handleLoginSubmit}
            className="p-7 sm:p-8 space-y-5"
            autoComplete="off"
          >
            <div className="space-y-1">
              <h2 className="font-display text-xl font-extrabold text-[#0F0F0F]">
                Administrator Sign In
              </h2>
              <p className="text-xs font-semibold text-[#0F0F0F]/75">
                Enter your authorized administrator credentials to access the Al
                Haram Travels &amp; Tours management console.
              </p>
            </div>

            {loginError && (
              <div className="rounded-2xl bg-red-50 border-2 border-red-600 p-3.5 flex items-start gap-2.5 text-xs font-extrabold text-red-800">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label
                htmlFor="admin-username"
                className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F] mb-2"
              >
                <SquircleIcon variant="light" size="sm">
                  <User className="w-3.5 h-3.5 text-[#0F0F0F]" />
                </SquircleIcon>
                <span>Admin Username</span>
              </label>
              <input
                id="admin-username"
                type="text"
                required
                autoComplete="off"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="Enter administrator username"
                className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/20 px-4 py-3 text-sm font-bold text-[#0F0F0F] placeholder:text-[#0F0F0F]/35 focus:outline-none focus:border-[#EEA012] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F] mb-2"
              >
                <SquircleIcon variant="light" size="sm">
                  <KeyRound className="w-3.5 h-3.5 text-[#0B92D6]" />
                </SquircleIcon>
                <span>Password</span>
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="new-password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter administrator password"
                  className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/20 pl-4 pr-11 py-3 text-sm font-bold text-[#0F0F0F] placeholder:text-[#0F0F0F]/35 focus:outline-none focus:border-[#EEA012] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F0F0F]/60 hover:text-[#0F0F0F] cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F0F0F] hover:bg-[#EEA012] text-[#EEA012] hover:text-[#0F0F0F] text-sm font-extrabold transition-colors cursor-pointer shadow-md"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>SIGN IN TO PORTAL</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFF9EB] hover:bg-[#0F0F0F]/5 text-[#0F0F0F] text-xs font-extrabold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Website</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED EXECUTIVE ADMIN PORTAL DASHBOARD
  const newCount = inquiries.filter(
    (i) => !i.status || i.status === 'new'
  ).length;
  const bookedCount = inquiries.filter((i) => i.status === 'booked').length;

  return (
    <div className="pt-24 min-h-screen bg-[#FFF9EB]/40">
      {/* Executive Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-12 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 text-xs font-extrabold text-[#EEA012] uppercase tracking-[0.18em]">
              <SquircleIcon variant="dark" size="sm">
                <ShieldCheck className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span>Executive Control Center · CEO Sajid Kahloon</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
              AL HARAM ADMIN PORTAL
            </h1>
            <p className="text-xs sm:text-sm font-bold text-[#FFFFFF]/80">
              Manage pilgrim booking inquiries, customize Umrah packages, and
              review client feedback.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#181818] border border-[#FFFFFF]/20 text-xs font-extrabold text-[#FFFFFF] hover:border-[#0B92D6] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#0B92D6]" />
              <span>View Public Website</span>
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EEA012] hover:bg-red-600 text-[#0F0F0F] hover:text-[#FFFFFF] text-xs font-extrabold transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Portal Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6] uppercase">
                Total Inquiries
              </p>
              <p className="font-display text-3xl font-extrabold text-[#0F0F0F] mt-1 tabular-nums">
                {inquiries.length}
              </p>
            </div>
            <SquircleIcon variant="gold" size="md">
              <Inbox className="w-5 h-5 text-[#0F0F0F]" />
            </SquircleIcon>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#EEA012] p-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-extrabold text-[#EEA012] uppercase">
                New / Pending Action
              </p>
              <p className="font-display text-3xl font-extrabold text-[#0F0F0F] mt-1 tabular-nums">
                {newCount}
              </p>
            </div>
            <SquircleIcon variant="dark" size="md">
              <Clock className="w-5 h-5 text-[#EEA012]" />
            </SquircleIcon>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6] uppercase">
                Confirmed Bookings
              </p>
              <p className="font-display text-3xl font-extrabold text-[#0F0F0F] mt-1 tabular-nums">
                {bookedCount}
              </p>
            </div>
            <SquircleIcon variant="light" size="md">
              <CheckCircle2 className="w-5 h-5 text-[#0B92D6]" />
            </SquircleIcon>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-extrabold text-[#0F0F0F]/70 uppercase">
                Active Umrah Packages
              </p>
              <p className="font-display text-3xl font-extrabold text-[#0F0F0F] mt-1 tabular-nums">
                {UMRAH_PACKAGES.length + customPackages.length}
              </p>
            </div>
            <SquircleIcon variant="gold" size="md">
              <Compass className="w-5 h-5 text-[#0F0F0F]" />
            </SquircleIcon>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('inquiries')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold transition-colors cursor-pointer ${
              activeTab === 'inquiries'
                ? 'bg-[#0F0F0F] text-[#EEA012]'
                : 'text-[#0F0F0F] hover:bg-[#FFF9EB]'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Booking Inquiries ({inquiries.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('packages')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold transition-colors cursor-pointer ${
              activeTab === 'packages'
                ? 'bg-[#0F0F0F] text-[#EEA012]'
                : 'text-[#0F0F0F] hover:bg-[#FFF9EB]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>
              Umrah Packages ({UMRAH_PACKAGES.length + customPackages.length})
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('reviews')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold transition-colors cursor-pointer ${
              activeTab === 'reviews'
                ? 'bg-[#0F0F0F] text-[#EEA012]'
                : 'text-[#0F0F0F] hover:bg-[#FFF9EB]'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Client Testimonials ({reviews.length})</span>
          </button>
        </div>

        {/* TAB 1: BOOKING INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FFFFFF] p-5 rounded-2xl border-2 border-[#0F0F0F]/12">
              <div className="flex flex-wrap items-center gap-2">
                {['all', 'new', 'contacted', 'booked', 'archived'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setInquiryFilter(st)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase transition-colors cursor-pointer ${
                      inquiryFilter === st
                        ? 'bg-[#EEA012] text-[#0F0F0F]'
                        : 'bg-[#FFF9EB] text-[#0F0F0F]/80 hover:text-[#0B92D6]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-[#0F0F0F]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, WhatsApp, ref..."
                  className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 pl-10 pr-4 py-2 text-xs font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                />
              </div>
            </div>

            {filteredInquiries.length === 0 ? (
              <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-12 text-center space-y-3">
                <div className="flex justify-center">
                  <SquircleIcon variant="light" size="lg">
                    <Inbox className="w-6 h-6 text-[#EEA012]" />
                  </SquircleIcon>
                </div>
                <h3 className="font-display text-xl font-extrabold text-[#0F0F0F]">
                  No Booking Inquiries Found
                </h3>
                <p className="text-xs font-semibold text-[#0F0F0F]/70 max-w-md mx-auto">
                  When pilgrims or travelers submit an inquiry through the
                  website booking engine, their details and WhatsApp contact
                  will appear here automatically.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredInquiries.map((inq) => {
                  const currentStatus = inq.status || 'new';
                  return (
                    <div
                      key={inq.id}
                      className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 hover:border-[#EEA012] p-6 shadow-sm transition-colors space-y-4"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#0F0F0F]/10 pb-4">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-lg bg-[#0F0F0F] text-[#EEA012]">
                              {inq.id}
                            </span>
                            <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-[#FFF9EB] border border-[#EEA012] text-[#0F0F0F]">
                              {inq.travelType}
                            </span>
                            <span className="text-xs font-bold text-[#0F0F0F]/60">
                              Submitted: {inq.submittedAt}
                            </span>
                          </div>
                          <h3 className="font-display text-xl font-extrabold text-[#0F0F0F] pt-1">
                            {inq.fullName}
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          {(
                            ['new', 'contacted', 'booked', 'archived'] as const
                          ).map((st) => (
                            <button
                              key={st}
                              type="button"
                              onClick={() =>
                                handleUpdateInquiryStatus(inq.id, st)
                              }
                              className={`px-3 py-1.5 rounded-xl text-[11px] font-extrabold uppercase transition-colors cursor-pointer ${
                                currentStatus === st
                                  ? 'bg-[#0B92D6] text-[#FFFFFF]'
                                  : 'bg-[#FFF9EB] text-[#0F0F0F] hover:bg-[#EEA012]/30'
                              }`}
                            >
                              {st}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => handleDeleteInquiry(inq.id)}
                            title="Delete Inquiry"
                            className="p-2 rounded-xl bg-red-50 text-red-700 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                        <div className="flex items-center gap-2.5">
                          <SquircleIcon variant="light" size="sm">
                            <Phone className="w-3.5 h-3.5 text-[#0B92D6]" />
                          </SquircleIcon>
                          <div>
                            <p className="text-[#0F0F0F]/60 font-bold">
                              WhatsApp / Phone
                            </p>
                            <a
                              href={`https://wa.me/${inq.whatsapp.replace(
                                /[^0-9]/g,
                                ''
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono font-extrabold text-[#0B92D6] hover:underline"
                            >
                              {inq.whatsapp}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <SquircleIcon variant="light" size="sm">
                            <Users className="w-3.5 h-3.5 text-[#EEA012]" />
                          </SquircleIcon>
                          <div>
                            <p className="text-[#0F0F0F]/60 font-bold">
                              Travelers &amp; Preferred Date
                            </p>
                            <p className="font-extrabold text-[#0F0F0F]">
                              {inq.travelers} Travelers · {inq.preferredDate}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <SquircleIcon variant="light" size="sm">
                            <Mail className="w-3.5 h-3.5 text-[#0F0F0F]" />
                          </SquircleIcon>
                          <div>
                            <p className="text-[#0F0F0F]/60 font-bold">Email</p>
                            <p className="font-extrabold text-[#0F0F0F]">
                              {inq.email || 'Not provided'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {inq.message && (
                        <div className="rounded-2xl bg-[#FFF9EB] border border-[#EEA012]/40 p-4 text-xs font-semibold text-[#0F0F0F]">
                          <span className="font-extrabold text-[#0B92D6] uppercase block mb-1">
                            Client Preferences &amp; Notes:
                          </span>
                          {inq.message}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: UMRAH PACKAGES MANAGER */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Add New Package Form */}
            <div className="lg:col-span-5 rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <SquircleIcon variant="gold" size="md">
                  <Plus className="w-5 h-5 text-[#0F0F0F]" />
                </SquircleIcon>
                <div>
                  <h2 className="font-display text-xl font-extrabold text-[#0F0F0F]">
                    CREATE UMRAH PACKAGE
                  </h2>
                  <p className="text-xs font-bold text-[#0F0F0F]/70">
                    Publish a new customized package to the website.
                  </p>
                </div>
              </div>

              {pkgSuccessMsg && (
                <div className="rounded-2xl bg-[#FFF9EB] border-2 border-[#EEA012] p-3.5 text-xs font-extrabold text-[#0F0F0F] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EEA012] shrink-0" />
                  <span>{pkgSuccessMsg}</span>
                </div>
              )}

              <form onSubmit={handleAddPackage} className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold text-[#0F0F0F] mb-1">
                    Package Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newPkgName}
                    onChange={(e) => setNewPkgName(e.target.value)}
                    placeholder="e.g. Ramadan Special Executive Umrah"
                    className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-3.5 py-2.5 text-xs font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#0F0F0F] mb-1">
                    Subtitle / Audience *
                  </label>
                  <input
                    type="text"
                    required
                    value={newPkgSubtitle}
                    onChange={(e) => setNewPkgSubtitle(e.target.value)}
                    placeholder="e.g. VIP Haram View & Private Transfers"
                    className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-3.5 py-2.5 text-xs font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#0F0F0F] mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={newPkgDuration}
                    onChange={(e) => setNewPkgDuration(e.target.value)}
                    className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-3.5 py-2.5 text-xs font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#0F0F0F] mb-1">
                    Makkah Stay
                  </label>
                  <input
                    type="text"
                    value={newPkgMakkah}
                    onChange={(e) => setNewPkgMakkah(e.target.value)}
                    className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-3.5 py-2.5 text-xs font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#0F0F0F] mb-1">
                    Madinah Stay
                  </label>
                  <input
                    type="text"
                    value={newPkgMadinah}
                    onChange={(e) => setNewPkgMadinah(e.target.value)}
                    className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-3.5 py-2.5 text-xs font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#0F0F0F] mb-1">
                    Hotel Category
                  </label>
                  <input
                    type="text"
                    value={newPkgHotelCat}
                    onChange={(e) => setNewPkgHotelCat(e.target.value)}
                    className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-3.5 py-2.5 text-xs font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#0F0F0F] mb-1">
                    Transport Arrangement
                  </label>
                  <input
                    type="text"
                    value={newPkgTransport}
                    onChange={(e) => setNewPkgTransport(e.target.value)}
                    className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-3.5 py-2.5 text-xs font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EEA012] hover:bg-[#0F0F0F] text-[#0F0F0F] hover:text-[#EEA012] text-xs font-extrabold transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>PUBLISH UMRAH PACKAGE</span>
                </button>
              </form>
            </div>

            {/* Active Packages List */}
            <div className="lg:col-span-7 space-y-4">
              {customPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-3xl bg-[#FFFFFF] border-2 border-[#EEA012] p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#EEA012] text-[#0F0F0F]">
                      Custom Admin Package
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-[#0F0F0F] pt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-bold text-[#0B92D6]">
                      {pkg.subtitle} · {pkg.duration}
                    </p>
                    <p className="text-xs font-semibold text-[#0F0F0F]/75">
                      {pkg.hotelCategory} · {pkg.transport}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteCustomPackage(pkg.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 text-red-700 hover:bg-red-600 hover:text-white text-xs font-extrabold transition-colors cursor-pointer shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              ))}

              {UMRAH_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#0F0F0F] text-[#EEA012]">
                      Core Signature Package
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-[#0F0F0F] pt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-bold text-[#0B92D6]">
                      {pkg.subtitle} · {pkg.duration}
                    </p>
                    <p className="text-xs font-semibold text-[#0F0F0F]/75">
                      {pkg.hotelCategory}
                    </p>
                  </div>
                  <SquircleIcon variant="light" size="sm">
                    <Building2 className="w-4 h-4 text-[#EEA012]" />
                  </SquircleIcon>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CLIENT TESTIMONIALS */}
        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-12 text-center space-y-3">
                <div className="flex justify-center">
                  <SquircleIcon variant="light" size="lg">
                    <Star className="w-6 h-6 text-[#EEA012]" />
                  </SquircleIcon>
                </div>
                <h3 className="font-display text-xl font-extrabold text-[#0F0F0F]">
                  No Custom Client Reviews Submitted Yet
                </h3>
                <p className="text-xs font-semibold text-[#0F0F0F]/70 max-w-md mx-auto">
                  Reviews submitted by pilgrims on the Reviews &amp;
                  Testimonials page can be moderated or removed here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 shadow-sm flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[#0B92D6]">
                          {rev.journeyType} · {rev.date}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleDeleteReview(rev.id)}
                          className="p-2 rounded-xl bg-red-50 text-red-700 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <h3 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                        {rev.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#0F0F0F]/80 italic">
                        &ldquo;{rev.comment}&rdquo;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
