import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Award,
  Building2,
  ArrowUpRight,
  Navigation,
} from 'lucide-react';
import {
  CONTACT_NUMBERS,
  SOCIAL_LINKS,
  IMAGES,
  OFFICE_LOCATION,
} from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import { BrandSocialIcon } from '../components/SocialIcons';
import { ResilientImage } from '../components/ResilientImage';
import { InquiryFormSection } from '../components/InquiryFormSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <MapPin className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                Connect With Our Gujranwala Office
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              AL HARAM TRAVELS &amp; TOURS
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              We are here to assist you with Umrah packages, visa
              documentation, and customized international travel. All 3 official
              numbers are active on Phone &amp; WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Corporate Credentials, Official Numbers & Social Media */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Executive Credentials Banner */}
        <div className="rounded-3xl bg-[#FFF9EB] border-2 border-[#EEA012] p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-[18px] overflow-hidden border-2 border-[#EEA012] shadow-md shrink-0 bg-[#0F0F0F]">
              <ResilientImage
                src={IMAGES.ceoPortrait}
                alt="Sajid Kahloon — CEO Al Haram Travels & Tours"
                fallbackTitle="SK"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                Chief Executive Officer
              </p>
              <h2 className="font-display text-xl font-extrabold text-[#0F0F0F] mt-0.5">
                Sajid Kahloon
              </h2>
              <p className="text-xs font-bold text-[#0F0F0F]/80 mt-0.5">
                CEO — Al Haram Travels &amp; Tours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <SquircleIcon variant="light" size="md">
              <Building2 className="w-5 h-5 text-[#0B92D6]" />
            </SquircleIcon>
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                Professional Recognition
              </p>
              <h2 className="font-display text-base font-extrabold text-[#0F0F0F] mt-0.5">
                Member of Gujranwala Chamber of Commerce &amp; Industry
              </h2>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <SquircleIcon variant="light" size="md">
              <Award className="w-5 h-5 text-[#EEA012]" />
            </SquircleIcon>
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                Industry Leadership
              </p>
              <h2 className="font-display text-lg font-extrabold text-[#0F0F0F] mt-0.5">
                Chairman — Travel &amp; Tour
              </h2>
            </div>
          </div>
        </div>

        {/* All 3 Official Call & WhatsApp Numbers */}
        <div>
          <div className="mb-6">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase">
              Direct Phone &amp; WhatsApp Lines
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F] mt-1">
              CALL OR WHATSAPP US DIRECTLY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_NUMBERS.map((num, idx) => (
              <div
                key={num.raw}
                className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 sm:p-7 shadow-sm hover:border-[#EEA012] transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                      {num.label}
                    </p>
                    <a
                      href={num.telHref}
                      className="font-mono text-2xl sm:text-3xl font-extrabold text-[#0F0F0F] hover:text-[#EEA012] transition-colors tabular-nums block"
                    >
                      {num.display}
                    </a>
                    <p className="text-xs font-bold text-[#0F0F0F]/75">
                      Available for Voice Call &amp; WhatsApp Chat
                    </p>
                  </div>
                  <SquircleIcon variant={idx === 0 ? 'gold' : 'light'} size="md">
                    <MessageCircle
                      className={`w-5 h-5 ${
                        idx === 0 ? 'text-[#0F0F0F]' : 'text-[#EEA012]'
                      }`}
                    />
                  </SquircleIcon>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#0F0F0F]/10">
                  <a
                    href={num.telHref}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0F0F0F] text-[#FFFFFF] hover:bg-[#0B92D6] text-xs font-extrabold transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#EEA012]" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={num.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#EEA012] text-[#0F0F0F] hover:bg-[#0B92D6] hover:text-[#FFFFFF] text-xs font-extrabold transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Location, Business Hours & Official Social Media Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Office & Hours */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a
              href={OFFICE_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 hover:border-[#EEA012] p-6 shadow-sm space-y-3 flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <SquircleIcon variant="light" size="md">
                    <MapPin className="w-5 h-5 text-[#0B92D6]" />
                  </SquircleIcon>
                  <ArrowUpRight className="w-4 h-4 text-[#EEA012] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                  Office Location
                </h3>
                <p className="text-xs font-extrabold text-[#0B92D6]">
                  {OFFICE_LOCATION.shortCity}
                </p>
                <p className="text-xs font-semibold text-[#0F0F0F]/80 leading-relaxed">
                  Click to open our official office pin on Google Maps for
                  turn-by-turn directions.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0F0F0F] group-hover:text-[#0B92D6] pt-2">
                <Navigation className="w-3.5 h-3.5 text-[#EEA012]" />
                <span>Open in Google Maps</span>
              </span>
            </a>

            <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 shadow-sm space-y-3">
              <SquircleIcon variant="light" size="md">
                <Clock className="w-5 h-5 text-[#EEA012]" />
              </SquircleIcon>
              <h3 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                Business Hours
              </h3>
              <p className="text-xs font-extrabold text-[#EEA012]">
                Monday — Saturday
              </p>
              <p className="text-xs font-semibold text-[#0F0F0F]/80 leading-relaxed">
                Dedicated consultation hours for pilgrims, families &amp; group
                organizers.
              </p>
            </div>
          </div>

          {/* Official Social Media Channels */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0F0F0F] text-[#FFFFFF] border-2 border-[#EEA012] p-6 sm:p-8 bg-islamic-pattern-dark flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#EEA012] uppercase">
                Follow CEO Sajid Kahloon &amp; Al Haram Travels
              </p>
              <h3 className="font-display text-2xl font-extrabold text-[#FFFFFF] mt-1">
                OFFICIAL SOCIAL MEDIA CHANNELS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SOCIAL_LINKS.map((soc) => (
                <a
                  key={soc.id}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-[#181818] border border-[#FFFFFF]/15 hover:border-[#EEA012] p-4 transition-all flex flex-col justify-between gap-4"
                >
                  <div className="flex items-center justify-between">
                    <SquircleIcon variant="dark" size="sm">
                      <BrandSocialIcon
                        id={soc.id}
                        className="w-4 h-4 text-[#EEA012]"
                      />
                    </SquircleIcon>
                    <ArrowUpRight className="w-4 h-4 text-[#0B92D6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <p className="font-display text-base font-extrabold text-[#FFFFFF] group-hover:text-[#EEA012]">
                      {soc.name}
                    </p>
                    <p className="text-[11px] font-bold text-[#E8C377] truncate mt-0.5">
                      {soc.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Google Maps & Directions Section */}
        <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 bg-[#0F0F0F] text-[#FFFFFF] border-b-2 border-[#EEA012] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <SquircleIcon variant="dark" size="md">
                <MapPin className="w-5 h-5 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-extrabold tracking-[0.18em] text-[#0B92D6] uppercase">
                  Visit Our Office · Gujranwala
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#FFFFFF] mt-0.5">
                  OFFICIAL GOOGLE MAPS LOCATION
                </h2>
              </div>
            </div>

            <a
              href={OFFICE_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EEA012] hover:bg-[#0B92D6] text-[#0F0F0F] hover:text-[#FFFFFF] text-xs font-extrabold transition-colors whitespace-nowrap shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative h-80 sm:h-96 w-full bg-[#F4F8FB]">
            <iframe
              title="Al Haram Travels & Tours Gujranwala Office Map"
              src={OFFICE_LOCATION.embedMapUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Full Inquiry Form: SEND US AN INQUIRY */}
        <div className="pt-4">
          <InquiryFormSection
            heading="SEND US AN INQUIRY"
            subheading="Complete the form below and our travel specialists in Gujranwala will contact you directly."
          />
        </div>
      </section>
    </div>
  );
};
