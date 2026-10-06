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

interface UmrahPageProps {
  onSelectPackage: (pkg: UmrahPackage) => void;
  onInquireWithPreset: (preset: InquiryPreset) => void;
}

export const UmrahPage: React.FC<UmrahPageProps> = ({
  onSelectPackage,
  onInquireWithPreset,
}) => {
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
                Makkah &amp; Madinah Pilgrimage · Al Haram Travels &amp; Tours
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              Choose Your Umrah Journey
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              We design customized Umrah packages around your preferred dates,
              hotel proximity in Makkah and Madinah, ground transport, and family
              comfort. Contact us for current availability and pricing.
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
                <span>Interactive Umrah Planner</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F]">
                CONFIGURE YOUR CUSTOMIZED UMRAH PACKAGE
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-bold text-[#0F0F0F]/75 max-w-md">
              Select your preferred parameters below to pre-fill a customized
              availability and pricing request for our travel desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1: Duration */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F]">
                <SquircleIcon variant="light" size="sm">
                  <Calendar className="w-3.5 h-3.5 text-[#EEA012]" />
                </SquircleIcon>
                <span>1. Preferred Duration</span>
              </label>
              <div className="space-y-1.5">
                {['7 Days', '10 Days', '14 Days', '21 Days', 'Custom Dates'].map(
                  (opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDuration(opt)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors cursor-pointer ${
                        duration === opt
                          ? 'bg-[#0F0F0F] text-[#EEA012] border-[#EEA012]'
                          : 'bg-[#FFFFFF] text-[#0F0F0F] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Step 2: Traveler Profile */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-extrabold text-[#0F0F0F]">
                <SquircleIcon variant="light" size="sm">
                  <Users className="w-3.5 h-3.5 text-[#0B92D6]" />
                </SquircleIcon>
                <span>2. Traveler Group</span>
              </label>
              <div className="space-y-1.5">
                {[
                  'Individual / Couple',
                  'Family',
                  'Family with Seniors',
                  'Organized Group',
                ].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setGroupType(opt)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors cursor-pointer ${
                      groupType === opt
                        ? 'bg-[#0F0F0F] text-[#EEA012] border-[#EEA012]'
                        : 'bg-[#FFFFFF] text-[#0F0F0F] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                    }`}
                  >
                    {opt}
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
                <span>3. Hotel Preference</span>
              </label>
              <div className="space-y-1.5">
                {[
                  'Walking Distance / Near Haram',
                  '5-Star Luxury Hospitality',
                  '4-Star Comfort Selection',
                  'Economy Plus with Shuttle',
                ].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setHotelPreference(opt)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors cursor-pointer ${
                      hotelPreference === opt
                        ? 'bg-[#0F0F0F] text-[#EEA012] border-[#EEA012]'
                        : 'bg-[#FFFFFF] text-[#0F0F0F] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                    }`}
                  >
                    {opt}
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
                <span>4. Ground Transport</span>
              </label>
              <div className="space-y-1.5">
                {[
                  'Private Air-Conditioned Vehicle',
                  'Executive Family SUV / Van',
                  'Haramain High-Speed Train + Transfers',
                  'Luxury Group Coach',
                ].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setTransportType(opt)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors cursor-pointer ${
                      transportType === opt
                        ? 'bg-[#0F0F0F] text-[#EEA012] border-[#EEA012]'
                        : 'bg-[#FFFFFF] text-[#0F0F0F] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#0F0F0F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-bold text-[#0F0F0F]">
              <CheckCircle2 className="w-4 h-4 text-[#0B92D6] shrink-0" />
              <span>
                Selected Configuration: <strong>{duration}</strong> ·{' '}
                <strong>{groupType}</strong> · <strong>{hotelPreference}</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={handleCustomBuild}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#EEA012] hover:bg-[#0F0F0F] text-[#0F0F0F] hover:text-[#EEA012] text-xs sm:text-sm font-extrabold transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Request Availability &amp; Pricing</span>
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
