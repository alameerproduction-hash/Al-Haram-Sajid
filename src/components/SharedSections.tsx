import React from 'react';
import {
  Compass,
  Globe,
  Building2,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Car,
  Plane,
  ShieldCheck,
  FileCheck,
  Users,
  HeartHandshake,
  Sliders,
  ArrowRight,
  Quote,
  Star,
} from 'lucide-react';
import {
  UMRAH_PACKAGES,
  UMRAH_SERVICES,
  UmrahPackage,
  IMAGES,
  PageId,
  CONTACT_NUMBERS,
  SOCIAL_LINKS,
  OFFICE_LOCATION,
} from '../data/siteData';
import { SquircleIcon } from './SquircleIcon';
import { ResilientImage } from './ResilientImage';
import { BrandSocialIcon } from './SocialIcons';

/** Section 6: TRUST / CREDENTIAL STRIP */
export const TrustStripSection: React.FC = () => {
  const credentials = [
    {
      title: 'UMRAH SERVICES',
      desc: 'Professional pilgrimage travel assistance',
      icon: Compass,
      accentColor: 'text-[#EEA012]',
    },
    {
      title: 'TRAVEL & TOURS',
      desc: 'Complete travel solutions',
      icon: Globe,
      accentColor: 'text-[#0B92D6]',
    },
    {
      title: 'CHAMBER MEMBER',
      desc: 'Member of Gujranwala Chamber of Commerce & Industry',
      icon: Building2,
      accentColor: 'text-[#EEA012]',
    },
    {
      title: 'LEADERSHIP',
      desc: 'Chairman — Travel & Tour',
      icon: Award,
      accentColor: 'text-[#0B92D6]',
    },
  ];

  return (
    <section
      aria-label="Credentials and Recognition"
      className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {credentials.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="group rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10 p-5 sm:p-6 shadow-[0_14px_34px_-8px_rgba(15,15,15,0.12)] hover:border-[#EEA012] transition-all duration-200 flex items-start gap-4"
            >
              <SquircleIcon variant="light" size="md">
                <IconComponent className={`w-5 h-5 ${item.accentColor}`} />
              </SquircleIcon>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-extrabold tracking-wide text-[#0F0F0F]">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#0F0F0F]/75 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/** Section 7: ABOUT AL HARAM (Split-Screen) */
export const AboutSplitSection: React.FC<{
  onNavigate?: (page: PageId) => void;
  showCta?: boolean;
}> = ({ onNavigate, showCta = true }) => {
  const highlights = [
    'Professional service',
    'Customer-focused assistance',
    'Organized travel planning',
    'Comfortable pilgrimage experience',
    'Transparent communication',
    'Dedicated support',
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Premium Image of Kaaba / Madinah / Pilgrims */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#0F0F0F]/12 shadow-xl aspect-[4/3]">
            <ResilientImage
              src={IMAGES.umrahSanctuary}
              alt="Masjid al-Haram architectural sanctuary and Kaaba courtyard"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/90 via-[#0F0F0F]/25 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[#FFFFFF]">
              <div>
                <p className="text-xs tracking-[0.18em] text-[#EEA012] uppercase font-extrabold">
                  Sacred Sanctuary · Makkah &amp; Madinah
                </p>
                <p className="font-display text-lg font-extrabold mt-0.5">
                  Your trusted partner for a peaceful and professionally managed Umrah journey.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border-2 border-[#0F0F0F]/10 aspect-[16/10]">
              <ResilientImage
                src={IMAGES.madinahMosque}
                alt="Al-Masjid an-Nabawi in Madinah at twilight"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href={OFFICE_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-[#0F0F0F] text-[#FFFFFF] p-5 flex flex-col justify-between border-2 border-[#EEA012] hover:border-[#0B92D6] transition-colors bg-islamic-pattern-dark"
            >
              <div className="flex items-center justify-between">
                <SquircleIcon variant="dark" size="sm">
                  <MapPin className="w-4 h-4 text-[#0B92D6]" />
                </SquircleIcon>
                <span className="text-[11px] font-extrabold text-[#EEA012] group-hover:underline">
                  View Map →
                </span>
              </div>
              <div>
                <p className="text-xs text-[#EEA012] font-extrabold">Headquarters</p>
                <p className="font-display text-base font-extrabold mt-0.5">
                  Gujranwala, Pakistan
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Corporate Introduction & CEO Profile Card */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
              Established Corporate Pilgrimage &amp; Travel Organization
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] leading-tight">
              ABOUT AL HARAM TRAVELS &amp; TOURS
            </h2>
          </div>

          <p className="text-base font-semibold text-[#0F0F0F]/85 leading-relaxed">
            Al Haram Travels &amp; Tours is a premier travel organization based in
            Gujranwala, Pakistan, dedicated to providing structured, peaceful, and
            dependable Umrah and international travel services. Every
            itinerary is thoughtfully planned so pilgrims and families can focus
            entirely on their spiritual devotion and comfort.
          </p>

          {/* 6 Core Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <SquircleIcon variant="light" size="sm">
                  <CheckCircle2 className="w-4 h-4 text-[#EEA012]" />
                </SquircleIcon>
                <span className="text-sm font-extrabold text-[#0F0F0F]">{item}</span>
              </div>
            ))}
          </div>

          {/* Authoritative Profile Card for Sajid Kahloon */}
          <div className="rounded-2xl bg-[#FFF9EB] border-2 border-[#EEA012] p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-[18px] overflow-hidden border-2 border-[#EEA012] shadow-md shrink-0 bg-[#0F0F0F]">
                  <ResilientImage
                    src={IMAGES.ceoPortrait}
                    alt="Sajid Kahloon — CEO Al Haram Travels & Tours"
                    fallbackTitle="Sajid Kahloon"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-[#0F0F0F]">
                    SAJID KAHLOON
                  </h3>
                  <p className="text-xs font-extrabold tracking-wider text-[#0B92D6] uppercase mt-0.5">
                    CEO — Al Haram Travels &amp; Tours
                  </p>
                </div>
              </div>
              <SquircleIcon variant="gold" size="md">
                <Award className="w-5 h-5 text-[#0F0F0F]" />
              </SquircleIcon>
            </div>

            <div className="pt-2 border-t border-[#0F0F0F]/15 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-[#0F0F0F] font-extrabold">
              <span>Member of Gujranwala Chamber of Commerce &amp; Industry</span>
              <span aria-hidden="true" className="hidden sm:inline text-[#0B92D6]">
                ·
              </span>
              <span className="text-[#0B92D6]">Chairman — Travel &amp; Tour</span>
            </div>
          </div>

          {showCta && onNavigate && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0F0F0F] hover:bg-[#0B92D6] text-[#EEA012] hover:text-[#FFFFFF] text-xs sm:text-sm font-extrabold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/** Section 8: UMRAH PACKAGES */
export const UmrahPackagesGrid: React.FC<{
  onSelectPackage: (pkg: UmrahPackage) => void;
  onInquirePackage: (pkg: UmrahPackage) => void;
}> = ({ onSelectPackage, onInquirePackage }) => {
  const [packages, setPackages] = React.useState<UmrahPackage[]>(UMRAH_PACKAGES);

  React.useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem('al_haram_custom_packages') || '[]'
      );
      if (Array.isArray(saved) && saved.length > 0) {
        setPackages([...saved, ...UMRAH_PACKAGES]);
      }
    } catch {
      // Ignore storage error
    }
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] border-y-2 border-[#0F0F0F]/10 bg-islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
              Tailored Sacred Pilgrimage
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
              CHOOSE YOUR UMRAH JOURNEY
            </h2>
          </div>
          <p className="text-sm font-bold text-[#0F0F0F]/80 max-w-md">
            Every pilgrim and family has unique requirements. All packages are
            custom-tailored to your preferred travel dates, hotel category, and
            duration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 shadow-[0_14px_38px_-12px_rgba(15,15,15,0.1)] hover:border-[#EEA012] hover:shadow-[0_22px_48px_-12px_rgba(238,160,18,0.22)] hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-52 overflow-hidden">
                <ResilientImage
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/92 via-[#0F0F0F]/35 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-[#FFFFFF]">
                  <p className="text-[11px] tracking-[0.16em] text-[#EEA012] uppercase font-extrabold">
                    Customized Package
                  </p>
                  <h3 className="font-display text-xl font-extrabold mt-0.5 leading-snug">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Package Specifications */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3">
                    <SquircleIcon variant="light" size="sm">
                      <Clock className="w-3.5 h-3.5 text-[#EEA012]" />
                    </SquircleIcon>
                    <div>
                      <span className="text-[#0B92D6] font-bold block">Duration</span>
                      <span className="font-extrabold text-[#0F0F0F]">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <SquircleIcon variant="light" size="sm">
                      <MapPin className="w-3.5 h-3.5 text-[#0B92D6]" />
                    </SquircleIcon>
                    <div>
                      <span className="text-[#0B92D6] font-bold block">Makkah Stay</span>
                      <span className="font-extrabold text-[#0F0F0F]">
                        {pkg.makkahStay}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <SquircleIcon variant="light" size="sm">
                      <MapPin className="w-3.5 h-3.5 text-[#EEA012]" />
                    </SquircleIcon>
                    <div>
                      <span className="text-[#0B92D6] font-bold block">Madinah Stay</span>
                      <span className="font-extrabold text-[#0F0F0F]">
                        {pkg.madinahStay}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <SquircleIcon variant="light" size="sm">
                      <Building2 className="w-3.5 h-3.5 text-[#0B92D6]" />
                    </SquircleIcon>
                    <div>
                      <span className="text-[#0B92D6] font-bold block">Hotel Category</span>
                      <span className="font-extrabold text-[#0F0F0F]">
                        {pkg.hotelCategory}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <SquircleIcon variant="light" size="sm">
                      <Car className="w-3.5 h-3.5 text-[#EEA012]" />
                    </SquircleIcon>
                    <div>
                      <span className="text-[#0B92D6] font-bold block">Transport &amp; Guidance</span>
                      <span className="font-extrabold text-[#0F0F0F]">
                        {pkg.transport}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <SquircleIcon variant="light" size="sm">
                      <Plane className="w-3.5 h-3.5 text-[#0B92D6]" />
                    </SquircleIcon>
                    <div>
                      <span className="text-[#0B92D6] font-bold block">Flight &amp; Support</span>
                      <span className="font-extrabold text-[#0F0F0F]">
                        {pkg.flightInfo} · {pkg.support}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability Note & Actions */}
                <div className="pt-4 border-t border-[#0F0F0F]/10 space-y-4">
                  <p className="text-xs font-extrabold text-[#0F0F0F] bg-[#FFF9EB] px-3.5 py-2.5 rounded-xl border border-[#EEA012]/60">
                    {pkg.availabilityNote}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectPackage(pkg)}
                      className="px-4 py-2.5 rounded-xl border-2 border-[#0F0F0F] text-xs font-extrabold text-[#0F0F0F] hover:bg-[#0B92D6] hover:border-[#0B92D6] hover:text-[#FFFFFF] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => onInquirePackage(pkg)}
                      className="px-4 py-2.5 rounded-xl bg-[#EEA012] hover:bg-[#0F0F0F] text-[#0F0F0F] hover:text-[#EEA012] text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/** Section 9: UMRAH SERVICES GRID */
export const ServicesGridSection: React.FC<{
  onInquireService?: (serviceTitle: string) => void;
}> = ({ onInquireService }) => {
  const getIcon = (name: string, index: number) => {
    const colorClass = index % 2 === 0 ? 'text-[#EEA012]' : 'text-[#0B92D6]';
    switch (name) {
      case 'FileCheck':
        return <FileCheck className={`w-5 h-5 ${colorClass}`} />;
      case 'Plane':
        return <Plane className={`w-5 h-5 ${colorClass}`} />;
      case 'Building2':
        return <Building2 className={`w-5 h-5 ${colorClass}`} />;
      case 'Car':
        return <Car className={`w-5 h-5 ${colorClass}`} />;
      case 'Compass':
        return <Compass className={`w-5 h-5 ${colorClass}`} />;
      case 'ShieldCheck':
        return <ShieldCheck className={`w-5 h-5 ${colorClass}`} />;
      case 'Users':
        return <Users className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Globe className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
          Complete Pilgrimage &amp; Travel Care
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
          COMPREHENSIVE UMRAH &amp; TRAVEL SERVICES
        </h2>
        <p className="text-sm sm:text-base font-bold text-[#0F0F0F]/80 mt-2">
          Every stage of your journey is managed with precision, from initial visa
          documentation in Gujranwala to your stay in Makkah and Madinah.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {UMRAH_SERVICES.map((service, idx) => (
          <div
            key={service.id}
            className="group rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10 p-6 shadow-[0_8px_24px_-8px_rgba(15,15,15,0.08)] hover:border-[#EEA012] transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <SquircleIcon variant="light" size="md">
                  {getIcon(service.iconName, idx)}
                </SquircleIcon>
                <span className="font-mono text-xs font-extrabold text-[#0B92D6] tabular-nums">
                  {service.number}.
                </span>
              </div>

              <h3 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                {service.title}
              </h3>
              <p className="text-sm font-extrabold text-[#EEA012] mt-1">
                {service.description}
              </p>
              <p className="text-xs font-semibold text-[#0F0F0F]/75 mt-2.5 leading-relaxed">
                {service.details}
              </p>
            </div>

            {onInquireService && (
              <div className="mt-5 pt-4 border-t border-[#0F0F0F]/10">
                <button
                  type="button"
                  onClick={() => onInquireService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0F0F0F] hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  <span>Request Assistance</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#EEA012]" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/** Section 12: WHY CHOOSE US (Rich Black #0F0F0F Section with Golden Orange & Sky Blue) */
export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      title: 'Professional Guidance',
      desc: 'Experienced assistance throughout your travel planning.',
      icon: Compass,
    },
    {
      title: 'Customer First',
      desc: 'Your comfort and satisfaction remain our priority.',
      icon: HeartHandshake,
    },
    {
      title: 'Complete Travel Support',
      desc: 'From planning to travel, receive organized assistance.',
      icon: ShieldCheck,
    },
    {
      title: 'Trusted Leadership',
      desc: 'Led by CEO Sajid Kahloon, Chairman — Travel & Tour.',
      icon: Award,
    },
    {
      title: 'Chamber Recognition',
      desc: 'Member of Gujranwala Chamber of Commerce & Industry.',
      icon: Building2,
    },
    {
      title: 'Personalized Packages',
      desc: 'Travel solutions tailored to your requirements.',
      icon: Sliders,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0F0F0F] text-[#FFFFFF] bg-islamic-pattern-dark border-y-2 border-[#EEA012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-extrabold tracking-[0.22em] text-[#EEA012] uppercase mb-2">
            Trust · Professionalism · Comfort · Spirituality
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFFFFF]">
            WHY TRAVEL WITH AL HARAM?
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#FFFFFF]/85 mt-2">
            We combine established corporate credibility in Gujranwala with
            warm, attentive hospitality for every pilgrim and traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-[#181818] border-2 border-[#EEA012]/35 p-6 sm:p-7 hover:border-[#0B92D6] transition-all duration-200 flex items-start gap-4"
              >
                <SquircleIcon variant="dark" size="md">
                  <IconComponent className="w-5 h-5 text-[#EEA012]" />
                </SquircleIcon>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-[#FFFFFF]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#FFFFFF]/85 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/** Section 13: CEO / LEADERSHIP SECTION */
export const LeadershipExecutiveSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 shadow-[0_20px_50px_-15px_rgba(15,15,15,0.12)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Executive Portrait Area */}
          <div className="lg:col-span-5 bg-[#0F0F0F] text-[#FFFFFF] p-8 sm:p-12 flex flex-col justify-between bg-islamic-pattern-dark border-b-2 lg:border-b-0 lg:border-r-2 border-[#EEA012]">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.2em] text-[#EEA012] uppercase font-extrabold">
                Executive Leadership
              </span>
              <SquircleIcon variant="dark" size="sm">
                <Award className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
            </div>

            {/* Executive Portrait of CEO Sajid Kahloon */}
            <div className="my-8 flex flex-col items-center text-center">
              <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1F1F1F] to-[#0F0F0F] border-2 border-[#EEA012] shadow-[0_20px_50px_-10px_rgba(238,160,18,0.35)] relative">
                <ResilientImage
                  src={IMAGES.ceoPortrait}
                  alt="Sajid Kahloon — CEO Al Haram Travels & Tours"
                  fallbackTitle="Sajid Kahloon — CEO"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F0F0F]/85 to-transparent pointer-events-none" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-[#FFFFFF] mt-5">
                SAJID KAHLOON
              </h3>
              <p className="text-xs font-extrabold tracking-[0.18em] text-[#EEA012] uppercase mt-1">
                CEO — Al Haram Travels &amp; Tours
              </p>
            </div>

            <div className="text-xs font-bold text-[#0B92D6] text-center border-t border-[#FFFFFF]/15 pt-4">
              Gujranwala, Pakistan
            </div>
          </div>

          {/* Right: Corporate Credentials & Executive Quote */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
                Corporate Governance &amp; Vision
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
                LEADERSHIP YOU CAN TRUST
              </h2>
            </div>

            {/* Official Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12">
                <SquircleIcon variant="gold" size="md">
                  <Building2 className="w-5 h-5 text-[#0F0F0F]" />
                </SquircleIcon>
                <div>
                  <p className="text-xs font-bold text-[#0B92D6]">Chamber Recognition</p>
                  <p className="text-sm font-extrabold text-[#0F0F0F] mt-0.5">
                    Member — Gujranwala Chamber of Commerce &amp; Industry
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12">
                <SquircleIcon variant="gold" size="md">
                  <Award className="w-5 h-5 text-[#0F0F0F]" />
                </SquircleIcon>
                <div>
                  <p className="text-xs font-bold text-[#0B92D6]">Industry Leadership</p>
                  <p className="text-sm font-extrabold text-[#0F0F0F] mt-0.5">
                    Chairman — Travel &amp; Tour
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Quote */}
            <blockquote className="rounded-2xl bg-[#FFF9EB] border-l-4 border-[#EEA012] p-6 relative">
              <div className="flex items-start gap-4">
                <SquircleIcon variant="light" size="sm">
                  <Quote className="w-4 h-4 text-[#EEA012]" />
                </SquircleIcon>
                <div>
                  <p className="font-display italic text-lg sm:text-xl font-bold text-[#0F0F0F] leading-relaxed">
                    &ldquo;Our goal is to make every journey organized, comfortable
                    and worthy of your trust.&rdquo;
                  </p>
                  <footer className="mt-3 text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                    — Sajid Kahloon, Chief Executive Officer
                  </footer>
                </div>
              </div>
            </blockquote>

            {/* Direct Socials & WhatsApp Bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#0F0F0F]/10">
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIAL_LINKS.map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 pr-3 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 hover:border-[#EEA012] transition-all"
                  >
                    <SquircleIcon variant="light" size="sm">
                      <BrandSocialIcon
                        id={soc.id}
                        className="w-4 h-4 text-[#0F0F0F]"
                      />
                    </SquircleIcon>
                    <span className="text-xs font-extrabold text-[#0F0F0F]">
                      {soc.name}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-extrabold">
                {CONTACT_NUMBERS.map((num) => (
                  <a
                    key={num.raw}
                    href={num.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-[#0F0F0F] text-[#EEA012] hover:bg-[#0B92D6] hover:text-[#FFFFFF] transition-colors tabular-nums"
                  >
                    {num.display}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/** Section 15: TESTIMONIALS (Strict No-Fabrication Compliance) */
export const TestimonialsSection: React.FC<{
  onNavigate?: (page: PageId) => void;
}> = ({ onNavigate }) => {
  const placeholders = [
    {
      slot: 'Verified Umrah Pilgrim Feedback Slot 01',
      context: 'Makkah & Madinah Pilgrimage Experience',
    },
    {
      slot: 'Verified Family Travel Feedback Slot 02',
      context: 'Family Umrah & Accommodation Planning',
    },
    {
      slot: 'Verified Group Tour Feedback Slot 03',
      context: 'Group Travel & Visa Coordination',
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
            Transparent Pilgrim &amp; Client Reflections
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
            CLIENT REVIEWS &amp; TESTIMONIALS
          </h2>
        </div>
        <p className="text-sm font-bold text-[#0F0F0F]/80 max-w-md">
          In commitment to complete honesty and transparency, only verified
          submissions from our travelers are published in these spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {placeholders.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-7 shadow-[0_10px_30px_-10px_rgba(15,15,15,0.08)] hover:border-[#EEA012] transition-colors flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              {/* Subtle Star Icons inside Squircle Containers */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <SquircleIcon key={star} variant="gold" size="sm">
                    <Star className="w-3.5 h-3.5 text-[#0F0F0F] fill-[#EEA012]" />
                  </SquircleIcon>
                ))}
              </div>

              <p className="font-display italic text-lg font-bold text-[#0F0F0F] leading-relaxed">
                &ldquo;Your customer review will appear here.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#0F0F0F]/10">
              <p className="text-xs font-extrabold text-[#0F0F0F]">{item.slot}</p>
              <p className="text-xs font-bold text-[#0B92D6] mt-0.5">{item.context}</p>
            </div>
          </div>
        ))}
      </div>

      {onNavigate && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => onNavigate('reviews')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#0F0F0F] text-xs font-extrabold text-[#0F0F0F] hover:bg-[#EEA012] hover:border-[#EEA012] transition-colors cursor-pointer"
          >
            <span>Share Your Travel Experience With Us</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0B92D6]" />
          </button>
        </div>
      )}
    </section>
  );
};
