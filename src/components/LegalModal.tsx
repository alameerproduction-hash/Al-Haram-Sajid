import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SquircleIcon } from './SquircleIcon';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0F]/80 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl rounded-3xl bg-[#FFFFFF] border-2 border-[#EEA012] shadow-2xl overflow-hidden">
        <div className="bg-[#0F0F0F] text-[#FFFFFF] px-6 py-5 flex items-center justify-between border-b-2 border-[#EEA012]">
          <div className="flex items-center gap-3">
            <SquircleIcon variant="dark" size="sm">
              {isPrivacy ? (
                <ShieldCheck className="w-4 h-4 text-[#EEA012]" />
              ) : (
                <FileText className="w-4 h-4 text-[#0B92D6]" />
              )}
            </SquircleIcon>
            <div>
              <h2 className="font-display text-lg font-extrabold">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h2>
              <p className="text-xs font-bold text-[#EEA012]">
                Al Haram Travels &amp; Tours · Gujranwala
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="cursor-pointer"
          >
            <SquircleIcon variant="glass" size="sm">
              <X className="w-4 h-4 text-[#FFFFFF]" />
            </SquircleIcon>
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-sm font-semibold text-[#0F0F0F]/85 leading-relaxed max-h-[65vh] overflow-y-auto">
          {isPrivacy ? (
            <>
              <p>
                <strong>Al Haram Travels &amp; Tours</strong> respects your privacy and is committed to protecting the personal and travel documentation details you share with us when planning your Umrah or international travel journey.
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                1. Information We Collect
              </h3>
              <p>
                When you submit an inquiry or request travel assistance, we collect your name, contact information (WhatsApp/Phone, Email), travel preferences, and passport/visa documentation strictly as required to process your travel arrangements.
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                2. How We Use Your Information
              </h3>
              <p>
                Your details are used solely to coordinate visa processing, airline reservations, hotel accommodations in Makkah, Madinah, or international destinations, and ground transportation on your behalf.
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                3. Confidentiality &amp; Security
              </h3>
              <p>
                We never sell or distribute client data to unauthorized third parties. Information is shared only with official visa authorities, airlines, and hospitality partners necessary to fulfill your travel itinerary.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Al Haram Travels &amp; Tours</strong>, Gujranwala, Pakistan. All travel inquiries, Umrah packages, and tour bookings are subject to the following service principles:
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                1. Customized Package Availability &amp; Pricing
              </h3>
              <p>
                All Umrah packages, flight schedules, and hotel accommodations are subject to real-time availability and seasonal pricing at the time of confirmation. Written itineraries are provided prior to booking confirmation.
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                2. Visa &amp; Travel Documentation
              </h3>
              <p>
                Al Haram Travels &amp; Tours provides comprehensive guidance and application assistance. Final visa issuance timelines and entry regulations remain governed by the relevant embassy and Kingdom of Saudi Arabia authorities.
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                3. Transparent Communication
              </h3>
              <p>
                We are committed to clear, honest, and timely communication regarding all inclusions, hotel categories, and transport arrangements before your journey begins.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-[#FFF9EB] border-t border-[#EEA012]/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0F0F0F] text-[#EEA012] text-xs font-extrabold hover:bg-[#0B92D6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
