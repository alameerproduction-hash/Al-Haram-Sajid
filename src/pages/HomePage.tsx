import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { IMAGES, PageId, UmrahPackage } from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import { ResilientImage } from '../components/ResilientImage';
import {
  TrustStripSection,
  AboutSplitSection,
  UmrahPackagesGrid,
  ServicesGridSection,
  WhyChooseUsSection,
  LeadershipExecutiveSection,
  TestimonialsSection,
} from '../components/SharedSections';
import { InquiryFormSection, InquiryPreset } from '../components/InquiryFormSection';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectPackage: (pkg: UmrahPackage) => void;
  onInquireWithPreset: (preset: InquiryPreset) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectPackage,
  onInquireWithPreset,
}) => {
  const { t } = useLanguage();

  return (
    <div>
      {/* 5. HERO SECTION */}
      <section
        className="relative min-h-[88vh] flex items-center pt-28 pb-24 lg:py-32 overflow-hidden bg-[#0F0F0F] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://noorumrahtravels.co.uk/uploads/media/2026/04/places-to-visit-in-makkah-69d50a5aa940f.jpg')",
        }}
      >
        {/* Background Cinematic Visual of Masjid al-Haram & Kaaba */}
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src="https://noorumrahtravels.co.uk/uploads/media/2026/04/places-to-visit-in-makkah-69d50a5aa940f.jpg"
            alt="Masjid al-Haram and the Holy Kaaba in Makkah at golden evening light"
            className="w-full h-full object-cover object-center"
          />
          {/* Balanced Contrast Overlay so the Makkah image is clearly visible behind the text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/85 via-[#0F0F0F]/60 to-[#0F0F0F]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/90 via-transparent to-[#0F0F0F]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-6">
            {/* Small Trust Marker */}
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="glass" size="sm">
                <ShieldCheck className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span className="tracking-[0.16em] uppercase">
                {t(
                  'Trusted Travel & Umrah Services · Gujranwala, Pakistan',
                  'معتبر عمرہ اور ٹریول سروسز · گوجرانوالہ، پاکستان'
                )}
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.24em] text-[#0B92D6] uppercase">
                {t(
                  'YOUR JOURNEY OF FAITH STARTS HERE',
                  'آپ کے روحانی اور بابرکت سفر کا آغاز یہاں سے ہوتا ہے'
                )}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] leading-[1.16] tracking-tight">
                {t(
                  'Premium Umrah & Travel Services You Can Trust',
                  'معتبر اور بہترین عمرہ و ٹریول سروسز جن پر آپ بھروسہ کر سکتے ہیں'
                )}
              </h1>
            </div>

            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/90 leading-relaxed max-w-xl">
              {t(
                'Al Harm Travels & Tours helps pilgrims experience a comfortable, organized and memorable journey with professional travel assistance and dedicated customer care.',
                'الحرم ٹریولز اینڈ ٹورز پیشہ ورانہ سفری رہنمائی اور خصوصی کسٹمر کیئر کے ساتھ عازمینِ عمرہ کو ایک آرام دہ، منظم اور یادگار روحانی سفر فراہم کرتا ہے۔'
              )}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('umrah')}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#EEA012] hover:bg-[#E8C377] text-[#0F0F0F] text-sm font-extrabold shadow-[0_12px_30px_-6px_rgba(238,160,18,0.5)] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>{t('Explore Umrah Packages', 'عمرہ پیکجز دیکھیں')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('book')}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#0B92D6] hover:bg-[#0B92D6]/90 text-[#FFFFFF] text-sm font-extrabold shadow-[0_12px_30px_-6px_rgba(11,146,214,0.45)] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>{t('Start Your Journey', 'اپنے سفر کا آغاز کریں')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST / CREDENTIAL STRIP */}
      <TrustStripSection />

      {/* 7. ABOUT AL HARAM */}
      <AboutSplitSection onNavigate={onNavigate} showCta={true} />

      {/* 8. UMRAH PACKAGES */}
      <UmrahPackagesGrid
        onSelectPackage={onSelectPackage}
        onInquirePackage={(pkg) =>
          onInquireWithPreset({ travelType: 'Umrah', packageName: pkg.name })
        }
      />

      {/* 9. UMRAH SERVICES */}
      <ServicesGridSection
        onInquireService={(title) =>
          onInquireWithPreset({
            travelType: 'Umrah',
            packageName: `Service Inquiry: ${title}`,
          })
        }
      />

      {/* 10 & 11. CUSTOMIZED UMRAH PLANNING & TRAVEL TOURS SPOTLIGHT */}
      <section className="py-16 sm:py-20 bg-[#FFF9EB]/70 border-t-2 border-[#0F0F0F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Family & Group Umrah Planning Card */}
            <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <SquircleIcon variant="gold" size="md">
                    <Compass className="w-5 h-5 text-[#0F0F0F]" />
                  </SquircleIcon>
                  <span className="text-xs font-extrabold tracking-widest text-[#EEA012] uppercase">
                    {t('Sacred Pilgrimage Planning', 'مقدس سفر کی منصوبہ بندی')}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F]">
                  {t('FAMILY & GROUP UMRAH', 'فیملی اور گروپ عمرہ')}
                </h2>
                <p className="text-sm font-semibold text-[#0F0F0F]/80 leading-relaxed">
                  {t(
                    'Al Harm Travels & Tours provides tailored Umrah travel assistance for families, seniors, and organized groups—covering visa processing, Makkah and Madinah accommodations, Ziyarat, and private ground transport.',
                    'الحرم ٹریولز اینڈ ٹورز فیملیز، بزرگوں اور منظم گروپس کے لیے خصوصی عمرہ سفری سہولیات فراہم کرتا ہے—جس میں ویزا پروسیسنگ، مکہ مکرمہ اور مدینہ منورہ میں رہائش، زیارات اور پرائیویٹ ٹرانسپورٹ شامل ہیں۔'
                  )}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-extrabold text-[#0F0F0F]">
                  {[
                    t('Umrah visa assistance', 'عمرہ ویزا اسسٹنس'),
                    t('Direct & flexible flights', 'ڈائریکٹ اور لچکدار پروازیں'),
                    t('Makkah & Madinah hotels', 'مکہ اور مدینہ کے ہوٹل'),
                    t('Private & group transport', 'پرائیویٹ اور گروپ ٹرانسپورٹ'),
                    t('Guided Ziyarat tours', 'مقدس مقامات کی زیارات'),
                    t('Dedicated travel support', 'مکمل سفری معاونت'),
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#EEA012] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#0F0F0F]/10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('umrah')}
                  className="text-xs font-extrabold text-[#0B92D6] hover:underline cursor-pointer"
                >
                  {t('Configure Custom Umrah Package', 'اپنا کسٹم عمرہ پیکج بنائیں')}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onInquireWithPreset({
                      travelType: 'Umrah',
                      packageName: 'Customized Family & Group Umrah Inquiry',
                    })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F0F0F] hover:bg-[#EEA012] text-[#EEA012] hover:text-[#0F0F0F] text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{t('Inquire About Umrah', 'عمرہ معلومات حاصل کریں')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Travel & Tours Card */}
            <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <SquircleIcon variant="light" size="md">
                    <MapPin className="w-5 h-5 text-[#0B92D6]" />
                  </SquircleIcon>
                  <span className="text-xs font-extrabold tracking-widest text-[#0B92D6] uppercase">
                    {t('Beyond Pilgrimage', 'سیاحت اور عالمی سفر')}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F]">
                  {t('TRAVEL & TOURS', 'ٹریول اینڈ ٹورز')}
                </h2>
                <p className="text-sm font-semibold text-[#0F0F0F]/80 leading-relaxed">
                  {t(
                    'Complete international and domestic travel solutions for individuals, families, and corporate delegations—including visa support, global flight ticketing, and curated hotel stays.',
                    'افراد، فیملیز اور کارپوریٹ وفود کے لیے مکمل بین الاقوامی اور ملکی سفری سہولیات—بشمول ویزا سپورٹ، ایئر لائن ٹکٹنگ اور بہترین ہوٹل بکنگ۔'
                  )}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-extrabold text-[#0F0F0F]">
                  {[
                    t('International Tours', 'بین الاقوامی ٹورز'),
                    t('Family Tours', 'فیملی ٹورز'),
                    t('Group Tours', 'گروپ ٹورز'),
                    t('Hotel Booking', 'ہوٹل بکنگ'),
                    t('Flight Booking', 'فلائٹ بکنگ'),
                    t('Customized Travel Plans', 'کسٹمائزڈ ٹریول پلانز'),
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0B92D6] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#0F0F0F]/10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('tours')}
                  className="text-xs font-extrabold text-[#0B92D6] hover:underline cursor-pointer"
                >
                  {t('View All Tour Categories', 'تمام ٹور کیٹیگریز دیکھیں')}
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('tours')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B92D6] hover:bg-[#0F0F0F] text-[#FFFFFF] text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{t('Explore Travel & Tours', 'ٹریول اینڈ ٹورز دیکھیں')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* 13. CEO / LEADERSHIP SECTION */}
      <LeadershipExecutiveSection />

      {/* 15. TESTIMONIALS */}
      <TestimonialsSection onNavigate={onNavigate} />

      {/* 16. BOOK / INQUIRY SECTION */}
      <section className="py-16 sm:py-24 bg-[#FFF9EB]/60 border-t-2 border-[#EEA012]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryFormSection />
        </div>
      </section>
    </div>
  );
};

