import React, { useState, useEffect } from 'react';
import {
  Star,
  MessageSquare,
  CheckCircle2,
  User,
  Send,
} from 'lucide-react';
import { SquircleIcon } from '../components/SquircleIcon';
import { TestimonialsSection } from '../components/SharedSections';

interface UserReview {
  id: string;
  name: string;
  journeyType: string;
  rating: number;
  comment: string;
  date: string;
}

export const ReviewsPage: React.FC = () => {
  const [userReviews, setUserReviews] = useState<UserReview[]>([]);
  const [name, setName] = useState('');
  const [journeyType, setJourneyType] = useState('Umrah Journey');
  const [rating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem('al_haram_client_reviews') || '[]'
      );
      if (Array.isArray(saved)) {
        setUserReviews(saved);
      }
    } catch {
      // Ignore storage error
    }
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newEntry: UserReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      journeyType,
      rating,
      comment: comment.trim(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      }),
    };

    const updated = [newEntry, ...userReviews];
    setUserReviews(updated);
    try {
      localStorage.setItem('al_haram_client_reviews', JSON.stringify(updated));
    } catch {
      // Ignore storage error
    }

    setName('');
    setComment('');
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <Star className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                Verified Pilgrim &amp; Traveler Reflections
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              REVIEWS &amp; TESTIMONIALS
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              We value honest, authentic feedback from the pilgrims and families
              we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Official Placeholder / Verified Slots Section */}
      <TestimonialsSection />

      {/* Any User-Submitted Reviews in this Session */}
      {userReviews.length > 0 && (
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold text-[#0F0F0F] mb-6">
            Recently Submitted Reflections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userReviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl bg-[#FFFFFF] border-2 border-[#EEA012] p-7 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-2">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <SquircleIcon key={idx} variant="gold" size="sm">
                      <Star className="w-3.5 h-3.5 text-[#0F0F0F] fill-[#EEA012]" />
                    </SquircleIcon>
                  ))}
                </div>
                <p className="font-display italic text-lg font-bold text-[#0F0F0F]">
                  &ldquo;{rev.comment}&rdquo;
                </p>
                <div className="pt-3 border-t border-[#0F0F0F]/10 flex items-center justify-between text-xs font-bold text-[#0F0F0F]/75">
                  <span className="font-extrabold text-[#0F0F0F]">{rev.name}</span>
                  <span className="text-[#0B92D6]">
                    {rev.journeyType} · {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Submit Your Experience Form */}
      <section className="py-16 bg-[#FFF9EB]/60 border-t-2 border-[#0F0F0F]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 sm:p-10 shadow-sm">
            <div className="mb-6">
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-1">
                Traveled With Al Haram?
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F]">
                SHARE YOUR JOURNEY FEEDBACK
              </h2>
            </div>

            {submitted ? (
              <div className="rounded-2xl bg-[#FFF9EB] border-2 border-[#EEA012] p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <SquircleIcon variant="dark" size="md">
                    <CheckCircle2 className="w-5 h-5 text-[#EEA012]" />
                  </SquircleIcon>
                  <div>
                    <p className="font-display text-base font-extrabold text-[#0F0F0F]">
                      Thank you for sharing your review.
                    </p>
                    <p className="text-xs font-bold text-[#0F0F0F]/75">
                      Your reflection has been recorded above.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-[#0F0F0F] text-[#EEA012] text-xs font-extrabold cursor-pointer"
                >
                  Write Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="rev-name"
                      className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F] mb-2"
                    >
                      <SquircleIcon variant="light" size="sm">
                        <User className="w-3.5 h-3.5 text-[#0F0F0F]" />
                      </SquircleIcon>
                      <span>Your Name *</span>
                    </label>
                    <input
                      id="rev-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-4 py-3 text-sm font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="rev-type"
                      className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F] mb-2"
                    >
                      <SquircleIcon variant="light" size="sm">
                        <Star className="w-3.5 h-3.5 text-[#EEA012]" />
                      </SquircleIcon>
                      <span>Journey Type</span>
                    </label>
                    <select
                      id="rev-type"
                      value={journeyType}
                      onChange={(e) => setJourneyType(e.target.value)}
                      className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-4 py-3 text-sm font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                    >
                      <option value="Umrah Journey">Umrah Journey</option>
                      <option value="Family Umrah">Family Umrah</option>
                      <option value="Group Umrah">Group Umrah</option>
                      <option value="International Tour">International Tour</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="rev-comment"
                    className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F] mb-2"
                  >
                    <SquircleIcon variant="light" size="sm">
                      <MessageSquare className="w-3.5 h-3.5 text-[#0B92D6]" />
                    </SquircleIcon>
                    <span>Your Review *</span>
                  </label>
                  <textarea
                    id="rev-comment"
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience with Al Haram Travels & Tours..."
                    className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 p-4 text-sm font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012]"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EEA012] hover:bg-[#0F0F0F] text-[#0F0F0F] hover:text-[#EEA012] text-xs font-extrabold transition-colors cursor-pointer"
                  >
                    <span>Submit Review</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
