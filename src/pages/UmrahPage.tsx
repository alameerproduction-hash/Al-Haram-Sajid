import React, { useState } from 'react';
import {
  Compass,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Users,
  Building2,
  Car,
} from 'lucide-react';
import { UmrahPackage } from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import { UmrahPackagesGrid, ServicesGridSection } from '../components/SharedSections';
import { InquiryPreset } from '../components/InquiryFormSection';
import { useLanguage } from '../context/LanguageContext';

interface UmrahPageProps {
  onSelectPackage: (pkg: UmrahPackage) => void;
  onInquireWithPreset: (preset: InquiryPreset) => void;
}

export const UmrahPage: React.FC<UmrahPageProps> = ({
  onSelectPackage,
  onInquireWithPreset,
}) => {
  const { t } = useLanguage();
  const [duration, setDuration] = useState('14 Days');
  const [groupType, setGroupType] = useState('Family');
  const [hotelPreference, setHotelPreference] = useState('Walking Distance / Near Haram');
  const [transportType, setTransportType] = useState('Private Air-Conditioned Vehicle');

  const handleCustomBuild = () => {
    onInquireWithPreset({
      travelType: 'Umrah',
      packageName: `Customized Umrah (${duration} · ${groupType} · ${hotelPreference} · ${transportType})`,
    });
  };

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <Compass className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                {t(
                  'Makkah & Madinah Pilgrimage · Al Harm Travels & Tours',
                  'مکہ مکرمہ اور مدینہ منورہ کا مقدس سفر · الحرم ٹریولز اینڈ ٹورز'
                )}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              {t('Choose Your Umrah Journey', 'اپنے سفرِ عمرہ کا انتخاب کریں')}
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              {t(
                'We design customized Umrah packages around your preferred dates, hotel proximity in Makkah and Madinah, ground transport, and family comfort. Contact us for current availability and pricing.',
                'ہم آپ کی پسندیدہ تاریخوں، مکہ مکرمہ اور مدینہ منورہ میں ہوٹل کی قربت، ٹرانسپورٹ اور فیملی کے آرام کے مطابق کسٹمائزڈ عمرہ پیکجز تیار کرتے ہیں۔ موجودہ دستیابی اور قیمتوں کے لیے ہم سے رابطہ کریں۔'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Main Umrah Packages Grid */}
      <UmrahPackagesGrid
        onSelectPackage={onSelectPackage}
        onInquirePackage={(pkg) =>
          onInquireWithPreset({ travelType: 'Umrah', packageName: pkg.name })
        }
      />

      {/* Interactive Custom Umrah Configurator */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 p-6 sm:p-10 lg:p-12 shadow-[0_18px_45px_-15px_rgba(15,15,15,0.1)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-extrabold tracking-[0.18em] text-[#0B92D6] uppercase mb-2">
                <SquircleIcon variant="gold" size="sm">
                  <Sliders className="w-4 h-4 text-[#0F0F0F]" />
                </SquircleIcon>
                <span>{t('Interactive Umrah Planner', 'انٹرایکٹو عمرہ پلانر')}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F]">
                {t(
                  'CONFIGURE YOUR CUSTOMIZED UMRAH PACKAGE',
                  'اپنا کسٹمائزڈ عمرہ پیکج ترتیب دیں'
                )}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-bold text-[#0F0F0F]/75 max-w-md">
              {t(
                'Select your preferred parameters below to pre-fill a customized availability and pricing request for our travel desk.',
                'ہمارے ٹریول ڈیسک سے دستیابی اور قیمت معلوم کرنے کے لیے نیچے اپنی ترجیحات منتخب کریں۔'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1: Duration */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F]">
                <SquircleIcon variant="light" size="sm">
                  <Calendar className="w-3.5 h-3.5 text-[#EEA012]" />
                </SquircleIcon>
                <span>{t('1. Preferred Duration', '1. پسندیدہ دورانیہ')}</span>
              </label>
              <div className="space-y-1.5">
                {[
                  { val: '7 Days', label: t('7 Days', '7 دن') },
                  { val: '10 Days', label: t('10 Days', '10 دن') },
                  { val: '14 Days', label: t('14 Days', '14 دن') },
                  { val: '21 Days', label: t('21 Days', '21 دن') },
                  { val: 'Custom Dates', label: t('Custom Dates', 'کسٹم تاریخیں') },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setDuration(opt.val)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors cursor-pointer ${
                      duration === opt.val
                        ? 'bg-[#0F0F0F] text-[#EEA012] border-[#EEA012]'
                        : 'bg-[#FFFFFF] text-[#0F0F0F] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Traveler Profile */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F]">
                <SquircleIcon variant="light" size="sm">
                  <Users className="w-3.5 h-3.5 text-[#0B92D6]" />
                </SquircleIcon>
                <span>{t('2. Traveler Group', '2. مسافروں کی قسم')}</span>
              </label>
              <div className="space-y-1.5">
                {[
                  { val: 'Individual / Couple', label: t('Individual / Couple', 'انفرادی / جوڑا') },
                  { val: 'Family', label: t('Family', 'فیملی') },
                  { val: 'Family with Seniors', label: t('Family with Seniors', 'بزرگوں کے ساتھ فیملی') },
                  { val: 'Organized Group', label: t('Organized Group', 'منظم گروپ') },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setGroupType(opt.val)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors cursor-pointer ${
                      groupType === opt.val
                        ? 'bg-[#0F0F0F] text-[#EEA012] border-[#EEA012]'
                        : 'bg-[#FFFFFF] text-[#0F0F0F] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Hotel Category */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F]">
                <SquircleIcon variant="light" size="sm">
                  <Building2 className="w-3.5 h-3.5 text-[#EEA012]" />
                </SquircleIcon>
                <span>{t('3. Hotel Preference', '3. ہوٹل کی ترجیح')}</span>
              </label>
              <div className="space-y-1.5">
                {[
                  {
                    val: 'Walking Distance / Near Haram',
                    label: t('Walking Distance / Near Haram', 'واکنگ ڈسٹنس / حرم کے قریب'),
                  },
                  {
                    val: '5-Star Luxury Hospitality',
                    label: t('5-Star Luxury Hospitality', '5 اسٹار لگژری ہوٹل'),
                  },
                  {
                    val: '4-Star Comfort Selection',
                    label: t('4-Star Comfort Selection', '4 اسٹار کمفرٹ ہوٹل'),
                  },
                  {
                    val: 'Economy Plus with Shuttle',
                    label: t('Economy Plus with Shuttle', 'ایکانومی پلس (شٹل سروس)'),
                  },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setHotelPreference(opt.val)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors cursor-pointer ${
                      hotelPreference === opt.val
                        ? 'bg-[#0F0F0F] text-[#EEA012] border-[#EEA012]'
                        : 'bg-[#FFFFFF] text-[#0F0F0F] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Ground Transport */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F]">
                <SquircleIcon variant="light" size="sm">
                  <Car className="w-3.5 h-3.5 text-[#0B92D6]" />
                </SquircleIcon>
                <span>{t('4. Ground Transport', '4. گراؤنڈ ٹرانسپورٹ')}</span>
              </label>
              <div className="space-y-1.5">
                {[
                  {
                    val: 'Private Air-Conditioned Vehicle',
                    label: t('Private Air-Conditioned Vehicle', 'پرائیویٹ ایئر کنڈیشنڈ گاڑی'),
                  },
                  {
                    val: 'Executive Family SUV / Van',
                    label: t('Executive Family SUV / Van', 'ایگزیکٹو فیملی ایس یو وی / وین'),
                  },
                  {
                    val: 'Haramain High-Speed Train + Transfers',
                    label: t('Haramain High-Speed Train + Transfers', 'حرمین ہائی اسپیڈ ٹرین + ٹرانسفر'),
                  },
                  {
                    val: 'Luxury Group Coach',
                    label: t('Luxury Group Coach', 'لگژری گروپ کوچ'),
                  },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setTransportType(opt.val)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors cursor-pointer ${
                      transportType === opt.val
                        ? 'bg-[#0F0F0F] text-[#EEA012] border-[#EEA012]'
                        : 'bg-[#FFFFFF] text-[#0F0F0F] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#0F0F0F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-bold text-[#0F0F0F]">
              <CheckCircle2 className="w-4 h-4 text-[#0B92D6] shrink-0" />
              <span>
                {t('Selected Configuration:', 'منتخب کردہ ترتیب:')}{' '}
                <strong>{duration}</strong> · <strong>{groupType}</strong> ·{' '}
                <strong>{hotelPreference}</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={handleCustomBuild}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#EEA012] hover:bg-[#0F0F0F] text-[#0F0F0F] hover:text-[#EEA012] text-xs sm:text-sm font-extrabold transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>{t('Request Availability & Pricing', 'دستیابی اور قیمت معلوم کریں')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Complete Umrah Services Included */}
      <ServicesGridSection
        onInquireService={(title) =>
          onInquireWithPreset({
            travelType: 'Umrah',
            packageName: `Umrah Service: ${title}`,
          })
        }
      />
    </div>
  );
};
