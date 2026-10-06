import React, { useState } from 'react';
import {
  Globe,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { TOUR_CATEGORIES } from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import { ResilientImage } from '../components/ResilientImage';
import { InquiryPreset } from '../components/InquiryFormSection';

interface ToursPageProps {
  onInquireWithPreset: (preset: InquiryPreset) => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({ onInquireWithPreset }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Tours', 'Bookings & Logistics'];

  const filteredCategories = TOUR_CATEGORIES.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Tours') {
      return ['international-tours', 'family-tours', 'group-tours', 'customized-plans'].includes(
        item.id
      );
    }
    return ['hotel-booking', 'flight-booking', 'visa-assistance', 'transportation'].includes(
      item.id
    );
  });

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <Globe className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                Beyond Umrah · Complete Travel Solutions
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              TRAVEL &amp; TOURS
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              From international family holidays and group delegations to global
              hotel reservations, flight ticketing, and visa assistance—managed
              with corporate reliability in Gujranwala.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tours & Travel Categories */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase">
              8 Specialized Travel Divisions
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F] mt-1">
              Explore Our Travel &amp; Tour Solutions
            </h2>
          </div>

          {/* Functional Segmented Filter Control */}
          <div className="inline-flex items-center gap-1 p-1.5 rounded-xl bg-[#FFF9EB] border-2 border-[#EEA012]/50 self-start">
            {filters.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedFilter(tab)}
                className={`px-3.5 py-2 rounded-lg text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedFilter === tab
                    ? 'bg-[#0F0F0F] text-[#EEA012] shadow-sm'
                    : 'text-[#0F0F0F]/80 hover:text-[#0B92D6]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 overflow-hidden shadow-[0_12px_32px_-12px_rgba(15,15,15,0.1)] hover:border-[#EEA012] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <ResilientImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/90 via-[#0F0F0F]/25 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-[#FFFFFF]">
                    <p className="text-[11px] tracking-[0.15em] text-[#EEA012] uppercase font-extrabold">
                      {item.category}
                    </p>
                    <h3 className="font-display text-lg font-extrabold mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <p className="text-xs font-semibold text-[#0F0F0F]/80 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-[#0F0F0F]/10">
                    {item.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs font-bold text-[#0F0F0F]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B92D6] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    onInquireWithPreset({
                      travelType:
                        item.id === 'family-tours'
                          ? 'Family Tour'
                          : item.id === 'group-tours'
                          ? 'Group Tour'
                          : 'Other',
                      packageName: `Travel & Tours: ${item.title}`,
                    })
                  }
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F0F0F] hover:bg-[#EEA012] text-[#EEA012] hover:text-[#0F0F0F] text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Plan {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
