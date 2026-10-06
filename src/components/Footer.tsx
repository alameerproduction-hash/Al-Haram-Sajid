import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Compass,
  Award,
  ShieldCheck,
} from 'lucide-react';
import {
  CONTACT_NUMBERS,
  SOCIAL_LINKS,
  OFFICE_LOCATION,
  PageId,
} from '../data/siteData';
import { SquircleIcon } from './SquircleIcon';
import { BrandSocialIcon } from './SocialIcons';
import { OfficialBrandLogo } from './OfficialBrandLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegalModal,
  onReplayIntro,
}) => {
  return (
    <footer className="bg-[#0F0F0F] text-[#FFFFFF] border-t-2 border-[#EEA012] bg-islamic-pattern-dark">
      {/* Top Credential Ribbon */}
      <div className="border-b border-[#FFFFFF]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-[18px] bg-[#FFFFFF] border-2 border-[#EEA012] p-1.5 shadow-lg flex items-center justify-center shrink-0">
              <OfficialBrandLogo
                className="w-full h-full"
                showWordmark={true}
              />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-wide text-[#FFFFFF]">
                AL HARAM TRAVELS &amp; TOURS
              </h2>
              <p className="text-sm font-bold text-[#EEA012] mt-0.5">
                Your Journey of Faith, Comfort &amp; Trust.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#FFFFFF]">
            <div className="flex items-center gap-3">
              <SquircleIcon variant="dark" size="sm">
                <Award className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="text-[#FFFFFF] font-extrabold">Sajid Kahloon — CEO</p>
                <p className="text-[#0B92D6] font-bold">Chairman — Travel &amp; Tour</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SquircleIcon variant="dark" size="sm">
                <ShieldCheck className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <div>
                <p className="text-[#FFFFFF] font-extrabold">Chamber Recognition</p>
                <p className="text-[#E8C377] font-bold">
                  Member of Gujranwala Chamber of Commerce &amp; Industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Social Media Column */}
          <div className="lg:col-span-4 space-y-5">
            <p className="text-xs tracking-[0.2em] text-[#0B92D6] font-extrabold uppercase">
              ESTABLISHED PILGRIMAGE &amp; TRAVEL PARTNER
            </p>
            <p className="text-sm font-semibold text-[#FFFFFF]/85 leading-relaxed max-w-sm">
              Al Haram Travels &amp; Tours helps pilgrims and travelers experience a
              comfortable, organized, and memorable journey with professional
              travel assistance and dedicated customer care from Gujranwala,
              Pakistan.
            </p>

            {/* Official Social Media Links inside Squircle Containers */}
            <div className="space-y-2.5 pt-1">
              <p className="text-xs font-extrabold tracking-wider text-[#EEA012] uppercase">
                Official Social Channels
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${soc.name} — ${soc.handle}`}
                    className="group inline-flex items-center gap-2.5 pr-3.5 rounded-2xl bg-[#181818] border border-[#FFFFFF]/15 hover:border-[#EEA012] transition-all"
                  >
                    <SquircleIcon variant="dark" size="sm">
                      <BrandSocialIcon
                        id={soc.id}
                        className="w-4 h-4 text-[#EEA012]"
                      />
                    </SquircleIcon>
                    <span className="text-xs font-extrabold text-[#FFFFFF] group-hover:text-[#EEA012] transition-colors">
                      {soc.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('book')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EEA012] text-[#0F0F0F] text-xs font-extrabold hover:bg-[#0B92D6] hover:text-[#FFFFFF] transition-colors cursor-pointer whitespace-nowrap shadow-[0_8px_20px_-4px_rgba(238,160,18,0.4)]"
              >
                <span>Plan Your Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              {onReplayIntro && (
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#181818] border border-[#EEA012]/40 text-[#FFFFFF] hover:border-[#0B92D6] hover:text-[#EEA012] text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Replay 3D Intro</span>
                </button>
              )}
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-base font-extrabold text-[#EEA012]">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm font-bold text-[#FFFFFF]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  Leadership
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('why-choose-us')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-base font-extrabold text-[#EEA012]">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm font-bold text-[#FFFFFF]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('umrah')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  Umrah
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('tours')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  Travel &amp; Tours
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  Visa Assistance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  Hotel Booking
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  Transportation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact (All 3 Call & WhatsApp Numbers + Location) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h3 className="font-display text-base font-extrabold text-[#EEA012]">
              Contact &amp; WhatsApp Lines
            </h3>
            <div className="space-y-3 text-sm text-[#FFFFFF]">
              {CONTACT_NUMBERS.map((num, idx) => (
                <div
                  key={num.raw}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-[#181818] border border-[#FFFFFF]/10 hover:border-[#EEA012]/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <SquircleIcon variant="dark" size="sm">
                      {idx % 2 === 0 ? (
                        <Phone className="w-4 h-4 text-[#EEA012]" />
                      ) : (
                        <MessageCircle className="w-4 h-4 text-[#0B92D6]" />
                      )}
                    </SquircleIcon>
                    <div>
                      <a
                        href={num.telHref}
                        className="font-mono text-sm font-extrabold text-[#FFFFFF] hover:text-[#EEA012] tabular-nums block"
                      >
                        {num.display}
                      </a>
                      <p className="text-[11px] font-bold text-[#E8C377]">
                        {num.label}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={num.telHref}
                      className="px-2.5 py-1.5 rounded-lg bg-[#0F0F0F] border border-[#FFFFFF]/20 text-[11px] font-extrabold text-[#FFFFFF] hover:border-[#0B92D6] hover:text-[#0B92D6] transition-colors"
                    >
                      Call
                    </a>
                    <a
                      href={num.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-[#EEA012] text-[#0F0F0F] hover:bg-[#0B92D6] hover:text-[#FFFFFF] text-[11px] font-extrabold transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}

              <a
                href={OFFICE_LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-[#181818] border border-[#FFFFFF]/10 hover:border-[#0B92D6] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <SquircleIcon variant="dark" size="sm">
                    <MapPin className="w-4 h-4 text-[#0B92D6]" />
                  </SquircleIcon>
                  <div>
                    <p className="text-xs font-bold text-[#E8C377]">
                      Office Location (Google Maps)
                    </p>
                    <p className="text-xs font-extrabold text-[#FFFFFF] group-hover:text-[#EEA012] transition-colors">
                      {OFFICE_LOCATION.city}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#EEA012] shrink-0 mr-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#FFFFFF]/12 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#FFFFFF]/80">
          <p>© 2026 Al Haram Travels &amp; Tours. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-[#EEA012] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-[#0B92D6]">
              |
            </span>
            <button
              type="button"
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-[#EEA012] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span aria-hidden="true" className="text-[#0B92D6]">
              |
            </span>
            <button
              type="button"
              onClick={() => onNavigate('admin')}
              className="hover:text-[#EEA012] transition-colors cursor-pointer"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
