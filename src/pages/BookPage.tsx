import React from 'react';
import {
  Compass,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT_NUMBERS, SOCIAL_LINKS } from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import { BrandSocialIcon } from '../components/SocialIcons';
import {
  InquiryFormSection,
  InquiryPreset,
} from '../components/InquiryFormSection';

interface BookPageProps {
  preset?: InquiryPreset | null;
}

export const BookPage: React.FC<BookPageProps> = ({ preset }) => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <Compass className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                Seamless Journey Reservation &amp; Consultation
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              BOOK YOUR JOURNEY
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              Submit your travel details below or connect immediately via our 3
              official WhatsApp and phone lines for a customized Umrah or
              international tour proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking / Inquiry Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <InquiryFormSection
              preset={preset}
              heading="PLAN YOUR JOURNEY"
              subheading="Provide your preferred travel dates, number of travelers, and any specific accommodation or transport requests."
            />
          </div>

          {/* Right Sidebar: Direct WhatsApp Lines & Promise */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Direct WhatsApp & Phone Box */}
            <div className="rounded-3xl bg-[#FFF9EB] border-2 border-[#EEA012] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <SquircleIcon variant="gold" size="md">
                  <MessageCircle className="w-5 h-5 text-[#0F0F0F]" />
                </SquircleIcon>
                <div>
                  <h2 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                    Instant WhatsApp &amp; Call
                  </h2>
                  <p className="text-xs font-bold text-[#0B92D6]">
                    All Numbers Active on WhatsApp
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {CONTACT_NUMBERS.map((num) => (
                  <div
                    key={num.raw}
                    className="rounded-2xl bg-[#FFFFFF] border border-[#0F0F0F]/12 p-3.5 flex items-center justify-between gap-2"
                  >
                    <div>
                      <a
                        href={num.telHref}
                        className="font-mono text-sm font-extrabold text-[#0F0F0F] hover:text-[#0B92D6] tabular-nums block"
                      >
                        {num.display}
                      </a>
                      <p className="text-[11px] font-bold text-[#0F0F0F]/70">
                        {num.label}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={num.telHref}
                        className="px-2.5 py-1.5 rounded-lg bg-[#0F0F0F] text-[#FFFFFF] hover:bg-[#0B92D6] text-[11px] font-extrabold inline-flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-[#EEA012]" />
                        <span>Call</span>
                      </a>
                      <a
                        href={num.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-[#EEA012] text-[#0F0F0F] hover:bg-[#0B92D6] hover:text-[#FFFFFF] text-[11px] font-extrabold inline-flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Promise */}
            <div className="rounded-3xl bg-[#0F0F0F] text-[#FFFFFF] p-7 border-2 border-[#EEA012] bg-islamic-pattern-dark space-y-5">
              <div className="flex items-center gap-3">
                <SquircleIcon variant="dark" size="md">
                  <ShieldCheck className="w-5 h-5 text-[#EEA012]" />
                </SquircleIcon>
                <div>
                  <h2 className="font-display text-lg font-extrabold">
                    Our Consultation Promise
                  </h2>
                  <p className="text-xs font-extrabold text-[#0B92D6]">
                    Al Haram Travels &amp; Tours
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs font-semibold text-[#FFFFFF]/90 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EEA012] shrink-0 mt-0.5" />
                  <span>
                    <strong>Personalized Review:</strong> Our Gujranwala team
                    reviews your preferred travel dates and group size.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B92D6] shrink-0 mt-0.5" />
                  <span>
                    <strong>Current Availability &amp; Pricing:</strong> We
                    prepare tailored Makkah &amp; Madinah accommodation and flight
                    options based on live availability.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EEA012] shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct WhatsApp &amp; Phone Support:</strong> Clear,
                    transparent guidance through visa processing and pre-departure
                    preparation.
                  </span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#FFFFFF]/15 space-y-3">
                <p className="text-xs font-extrabold text-[#EEA012]">
                  Follow Us on Social Media
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.id}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181818] border border-[#FFFFFF]/15 hover:border-[#EEA012] text-xs font-extrabold text-[#FFFFFF]"
                    >
                      <BrandSocialIcon
                        id={soc.id}
                        className="w-3.5 h-3.5 text-[#EEA012]"
                      />
                      <span>{soc.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#0B92D6]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
