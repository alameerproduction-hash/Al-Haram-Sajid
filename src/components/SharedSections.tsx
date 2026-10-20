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
import { useLanguage } from '../context/LanguageContext';

/** Section 6: TRUST / CREDENTIAL STRIP */
export const TrustStripSection: React.FC = () => {
  const { t } = useLanguage();
  const credentials = [
    {
      title: t('UMRAH SERVICES', 'عمرہ سروسز'),
      desc: t('Professional pilgrimage travel assistance', 'مقدس سفر کے لیے پیشہ ورانہ معاونت'),
      icon: Compass,
      accentColor: 'text-[#EEA012]',
    },
    {
      title: t('TRAVEL & TOURS', 'ٹریول اینڈ ٹورز'),
      desc: t('Complete travel solutions', 'مکمل سفری اور سیاحتی سہولیات'),
      icon: Globe,
      accentColor: 'text-[#0B92D6]',
    },
    {
      title: t('CHAMBER MEMBER', 'چیمبر ممبر'),
      desc: t(
        'Member of Gujranwala Chamber of Commerce & Industry',
        'ممبر گوجرانوالہ چیمبر آف کامرس اینڈ انڈسٹری'
      ),
      icon: Building2,
      accentColor: 'text-[#EEA012]',
    },
    {
      title: t('LEADERSHIP', 'قیادت'),
      desc: t('Chairman — Travel & Tour', 'چیئرمین — ٹریول اینڈ ٹور'),
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
  const { t } = useLanguage();
  const highlights = [
    t('Professional service', 'پیشہ ورانہ خدمات'),
    t('Customer-focused assistance', 'مسافروں کی سہولت اولین ترجیح'),
    t('Organized travel planning', 'منظم سفری منصوبہ بندی'),
    t('Comfortable pilgrimage experience', 'آرام دہ اور پرسکون سفرِ عمرہ'),
    t('Transparent communication', 'واضح اور شفاف معلومات'),
    t('Dedicated support', 'ہمہ وقت معاونت'),
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
                  {t('Sacred Sanctuary · Makkah & Madinah', 'مقدس مقامات · مکہ مکرمہ اور مدینہ منورہ')}
                </p>
                <p className="font-display text-lg font-extrabold mt-0.5">
                  {t(
                    'Your trusted partner for a peaceful and professionally managed Umrah journey.',
                    'ایک پرسکون اور پیشہ ورانہ طور پر منظم سفرِ عمرہ کے لیے آپ کا قابلِ اعتماد ساتھی۔'
                  )}
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
                  {t('View Map →', 'نقشہ دیکھیں ←')}
                </span>
              </div>
              <div>
                <p className="text-xs text-[#EEA012] font-extrabold">
                  {t('Headquarters', 'مرکزی دفتر')}
                </p>
                <p className="font-display text-base font-extrabold mt-0.5">
                  {t('Gujranwala, Pakistan', 'گوجرانوالہ، پاکستان')}
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Corporate Introduction & CEO Profile Card */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
              {t(
                'Established Corporate Pilgrimage & Travel Organization',
                'مستند اور قابلِ اعتماد عمرہ و ٹریول ادارہ'
              )}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] leading-tight">
              {t('ABOUT AL HARM TRAVELS & TOURS', 'الحرم ٹریولز اینڈ ٹورز کا تعارف')}
            </h2>
          </div>

          <p className="text-base font-semibold text-[#0F0F0F]/85 leading-relaxed">
            {t(
              'Al Harm Travels & Tours is a premier travel organization based in Gujranwala, Pakistan, dedicated to providing structured, peaceful, and dependable Umrah and international travel services. Every itinerary is thoughtfully planned so pilgrims and families can focus entirely on their spiritual devotion and comfort.',
              'الحرم ٹریولز اینڈ ٹورز گوجرانوالہ، پاکستان میں قائم ایک سرکردہ سفری ادارہ ہے جو منظم، پرسکون اور قابلِ بھروسہ عمرہ اور بین الاقوامی سفری خدمات فراہم کرنے کے لیے وقف ہے۔ ہر سفری پلان اس طرح ترتیب دیا جاتا ہے کہ عازمین اور فیملیز مکمل یکسوئی کے ساتھ اپنی عبادت اور آرام پر توجہ دے سکیں۔'
            )}
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
                    alt="Sajid Kahloon — CEO Al Harm Travels & Tours"
                    fallbackTitle="Sajid Kahloon"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-[#0F0F0F]">
                    {t('SAJID KAHLOON', 'ساجد کہلوں')}
                  </h3>
                  <p className="text-xs font-extrabold tracking-wider text-[#0B92D6] uppercase mt-0.5">
                    {t('CEO — Al Harm Travels & Tours', 'سی ای او — الحرم ٹریولز اینڈ ٹورز')}
                  </p>
                </div>
              </div>
              <SquircleIcon variant="gold" size="md">
                <Award className="w-5 h-5 text-[#0F0F0F]" />
              </SquircleIcon>
            </div>

            <div className="pt-2 border-t border-[#0F0F0F]/15 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-[#0F0F0F] font-extrabold">
              <span>
                {t(
                  'Member of Gujranwala Chamber of Commerce & Industry',
                  'ممبر گوجرانوالہ چیمبر آف کامرس اینڈ انڈسٹری'
                )}
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-[#0B92D6]">
                ·
              </span>
              <span className="text-[#0B92D6]">
                {t('Chairman — Travel & Tour', 'چیئرمین — ٹریول اینڈ ٹور')}
              </span>
            </div>
          </div>

          {showCta && onNavigate && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0F0F0F] hover:bg-[#0B92D6] text-[#EEA012] hover:text-[#FFFFFF] text-xs sm:text-sm font-extrabold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{t('Read Full Corporate Profile', 'مکمل کارپوریٹ پروفائل پڑھیں')}</span>
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
  const { t, getPackages } = useLanguage();
  const [rawPackages, setRawPackages] = React.useState<UmrahPackage[]>(UMRAH_PACKAGES);

  React.useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem('al_haram_custom_packages') || '[]'
      );
      if (Array.isArray(saved) && saved.length > 0) {
        setRawPackages([...saved, ...UMRAH_PACKAGES]);
      }
    } catch {
      // Ignore storage error
    }
  }, []);

  const packages = getPackages(rawPackages);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] border-y-2 border-[#0F0F0F]/10 bg-islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
              {t('Tailored Sacred Pilgrimage', 'آپ کی سہولت کے مطابق مقدس سفر')}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
              {t('CHOOSE YOUR UMRAH JOURNEY', 'اپنے عمرہ پیکج کا انتخاب کریں')}
            </h2>
          </div>
          <p className="text-sm font-bold text-[#0F0F0F]/80 max-w-md">
            {t(
              'Every pilgrim and family has unique requirements. All packages are custom-tailored to your preferred travel dates, hotel category, and duration.',
              'ہر عازم اور فیملی کی ضروریات منفرد ہوتی ہیں۔ تمام پیکجز آپ کی پسندیدہ تاریخوں، ہوٹل کیٹیگری اور دورانیے کے مطابق تیار کیے جاتے ہیں۔'
            )}
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
                    {t('Customized Package', 'کسٹمائزڈ پیکج')}
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
                      <span className="text-[#0B92D6] font-bold block">
                        {t('Duration', 'دورانیہ')}
                      </span>
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
                      <span className="text-[#0B92D6] font-bold block">
                        {t('Makkah Stay', 'مکہ مکرمہ میں قیام')}
                      </span>
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
                      <span className="text-[#0B92D6] font-bold block">
                        {t('Madinah Stay', 'مدینہ منورہ میں قیام')}
                      </span>
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
                      <span className="text-[#0B92D6] font-bold block">
                        {t('Hotel Category', 'ہوٹل کیٹیگری')}
                      </span>
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
                      <span className="text-[#0B92D6] font-bold block">
                        {t('Transport & Guidance', 'ٹرانسپورٹ اور رہنمائی')}
                      </span>
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
                      <span className="text-[#0B92D6] font-bold block">
                        {t('Flight & Support', 'فلائٹ اور سپورٹ')}
                      </span>
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
                      {t('View Details', 'تفصیلات دیکھیں')}
                    </button>
                    <button
                      type="button"
                      onClick={() => onInquirePackage(pkg)}
                      className="px-4 py-2.5 rounded-xl bg-[#EEA012] hover:bg-[#0F0F0F] text-[#0F0F0F] hover:text-[#EEA012] text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {t('Inquire Now', 'معلومات حاصل کریں')}
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
  const { t, getServices } = useLanguage();
  const services = getServices();

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
          {t('Complete Pilgrimage & Travel Care', 'مکمل عمرہ اور سفری سہولیات')}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
          {t('COMPREHENSIVE UMRAH & TRAVEL SERVICES', 'جامع عمرہ اور ٹریول سروسز')}
        </h2>
        <p className="text-sm sm:text-base font-bold text-[#0F0F0F]/80 mt-2">
          {t(
            'Every stage of your journey is managed with precision, from initial visa documentation in Gujranwala to your stay in Makkah and Madinah.',
            'گوجرانوالہ میں ابتدائی ویزا دستاویزات سے لے کر مکہ مکرمہ اور مدینہ منورہ میں آپ کے قیام تک، آپ کے سفر کے ہر مرحلے کو مہارت سے منظم کیا جاتا ہے۔'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
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
                  <span>{t('Request Assistance', 'معاونت حاصل کریں')}</span>
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
  const { t } = useLanguage();
  const reasons = [
    {
      title: t('Professional Guidance', 'پیشہ ورانہ رہنمائی'),
      desc: t(
        'Experienced assistance throughout your travel planning.',
        'آپ کی سفری منصوبہ بندی کے ہر مرحلے میں تجربہ کار رہنمائی۔'
      ),
      icon: Compass,
    },
    {
      title: t('Customer First', 'مسافروں کی سہولت مقدم'),
      desc: t(
        'Your comfort and satisfaction remain our priority.',
        'آپ کا آرام اور اطمینان ہماری اولین ترجیح ہے۔'
      ),
      icon: HeartHandshake,
    },
    {
      title: t('Complete Travel Support', 'مکمل سفری معاونت'),
      desc: t(
        'From planning to travel, receive organized assistance.',
        'منصوبہ بندی سے لے کر واپسی تک منظم سفری سہولیات۔'
      ),
      icon: ShieldCheck,
    },
    {
      title: t('Trusted Leadership', 'معتبر قیادت'),
      desc: t(
        'Led by CEO Sajid Kahloon, Chairman — Travel & Tour.',
        'سی ای او ساجد کہلوں (چیئرمین ٹریول اینڈ ٹور) کی زیرِ قیادت۔'
      ),
      icon: Award,
    },
    {
      title: t('Chamber Recognition', 'چیمبر آف کامرس کی رکنیت'),
      desc: t(
        'Member of Gujranwala Chamber of Commerce & Industry.',
        'گوجرانوالہ چیمبر آف کامرس اینڈ انڈسٹری کا باضابطہ ممبر۔'
      ),
      icon: Building2,
    },
    {
      title: t('Personalized Packages', 'حسبِ منشا پیکجز'),
      desc: t(
        'Travel solutions tailored to your requirements.',
        'آپ کی ضروریات کے عین مطابق ترتیب دیے گئے سفری پیکجز۔'
      ),
      icon: Sliders,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0F0F0F] text-[#FFFFFF] bg-islamic-pattern-dark border-y-2 border-[#EEA012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-extrabold tracking-[0.22em] text-[#EEA012] uppercase mb-2">
            {t(
              'Trust · Professionalism · Comfort · Spirituality',
              'اعتماد · پیشہ ورانہ مہارت · آرام · روحانیت'
            )}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFFFFF]">
            {t(
              'WHY TRAVEL WITH AL HARM TRAVELS & TOURS?',
              'الحرم ٹریولز اینڈ ٹورز کا انتخاب کیوں کریں؟'
            )}
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#FFFFFF]/85 mt-2">
            {t(
              'We combine established corporate credibility in Gujranwala with warm, attentive hospitality for every pilgrim and traveler.',
              'ہم گوجرانوالہ میں اپنے مستند کارپوریٹ اعتماد کے ساتھ ہر عازم اور مسافر کو مخلصانہ مہمان نوازی فراہم کرتے ہیں۔'
            )}
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
  const { t } = useLanguage();
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 shadow-[0_20px_50px_-15px_rgba(15,15,15,0.12)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Executive Portrait Area */}
          <div className="lg:col-span-5 bg-[#0F0F0F] text-[#FFFFFF] p-8 sm:p-12 flex flex-col justify-between bg-islamic-pattern-dark border-b-2 lg:border-b-0 lg:border-r-2 border-[#EEA012]">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.2em] text-[#EEA012] uppercase font-extrabold">
                {t('Executive Leadership', 'ایگزیکٹو قیادت')}
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
                  alt="Sajid Kahloon — CEO Al Harm Travels & Tours"
                  fallbackTitle="Sajid Kahloon — CEO"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F0F0F]/85 to-transparent pointer-events-none" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-[#FFFFFF] mt-5">
                {t('SAJID KAHLOON', 'ساجد کہلوں')}
              </h3>
              <p className="text-xs font-extrabold tracking-[0.18em] text-[#EEA012] uppercase mt-1">
                {t('CEO — Al Harm Travels & Tours', 'سی ای او — الحرم ٹریولز اینڈ ٹورز')}
              </p>
            </div>

            <div className="text-xs font-bold text-[#0B92D6] text-center border-t border-[#FFFFFF]/15 pt-4">
              {t('Gujranwala, Pakistan', 'گوجرانوالہ، پاکستان')}
            </div>
          </div>

          {/* Right: Corporate Credentials & Executive Quote */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
                {t('Corporate Governance & Vision', 'کارپوریٹ گورننس اور وژن')}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
                {t('LEADERSHIP YOU CAN TRUST', 'قیادت جس پر آپ اعتماد کر سکتے ہیں')}
              </h2>
            </div>

            {/* Official Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12">
                <SquircleIcon variant="gold" size="md">
                  <Building2 className="w-5 h-5 text-[#0F0F0F]" />
                </SquircleIcon>
                <div>
                  <p className="text-xs font-bold text-[#0B92D6]">
                    {t('Chamber Recognition', 'چیمبر آف کامرس رکنیت')}
                  </p>
                  <p className="text-sm font-extrabold text-[#0F0F0F] mt-0.5">
                    {t(
                      'Member — Gujranwala Chamber of Commerce & Industry',
                      'ممبر — گوجرانوالہ چیمبر آف کامرس اینڈ انڈسٹری'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12">
                <SquircleIcon variant="gold" size="md">
                  <Award className="w-5 h-5 text-[#0F0F0F]" />
                </SquircleIcon>
                <div>
                  <p className="text-xs font-bold text-[#0B92D6]">
                    {t('Industry Leadership', 'صنعتی قیادت')}
                  </p>
                  <p className="text-sm font-extrabold text-[#0F0F0F] mt-0.5">
                    {t('Chairman — Travel & Tour', 'چیئرمین — ٹریول اینڈ ٹور')}
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
                    &ldquo;
                    {t(
                      'Our goal is to make every journey organized, comfortable and worthy of your trust.',
                      'ہمارا مقصد ہر سفر کو منظم، آرام دہ اور آپ کے اعتماد کے قابل بنانا ہے۔'
                    )}
                    &rdquo;
                  </p>
                  <footer className="mt-3 text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                    {t(
                      '— Sajid Kahloon, Chief Executive Officer',
                      '— ساجد کہلوں، چیف ایگزیکٹو آفیسر'
                    )}
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
  const { t } = useLanguage();
  const placeholders = [
    {
      slot: t('Verified Umrah Pilgrim Feedback Slot 01', 'تصدیق شدہ عازمِ عمرہ تاثرات سلاٹ 01'),
      context: t('Makkah & Madinah Pilgrimage Experience', 'مکہ مکرمہ اور مدینہ منورہ کے سفر کا تجربہ'),
    },
    {
      slot: t('Verified Family Travel Feedback Slot 02', 'تصدیق شدہ فیملی ٹریول تاثرات سلاٹ 02'),
      context: t('Family Umrah & Accommodation Planning', 'فیملی عمرہ اور رہائش کی منصوبہ بندی'),
    },
    {
      slot: t('Verified Group Tour Feedback Slot 03', 'تصدیق شدہ گروپ ٹور تاثرات سلاٹ 03'),
      context: t('Group Travel & Visa Coordination', 'گروپ ٹریول اور ویزا کوآرڈینیشن'),
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
            {t('Transparent Pilgrim & Client Reflections', 'عازمین اور مسافروں کے شفاف تاثرات')}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F]">
            {t('CLIENT REVIEWS & TESTIMONIALS', 'گاہکوں کی آراء اور تاثرات')}
          </h2>
        </div>
        <p className="text-sm font-bold text-[#0F0F0F]/80 max-w-md">
          {t(
            'In commitment to complete honesty and transparency, only verified submissions from our travelers are published in these spaces.',
            'مکمل ایمانداری اور شفافیت کے عہد کے مطابق، یہاں صرف ہمارے مسافروں کے تصدیق شدہ تاثرات شائع کیے جاتے ہیں۔'
          )}
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
                &ldquo;
                {t(
                  'Your customer review will appear here.',
                  'آپ کی قیمتی رائے یہاں شائع کی جائے گی۔'
                )}
                &rdquo;
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
            <span>{t('Share Your Travel Experience With Us', 'اپنا سفری تجربہ ہمارے ساتھ شیئر کریں')}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0B92D6]" />
          </button>
        </div>
      )}
    </section>
  );
};
