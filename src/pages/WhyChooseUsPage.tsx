import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { PageId } from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import {
  WhyChooseUsSection,
  LeadershipExecutiveSection,
  TrustStripSection,
} from '../components/SharedSections';

interface WhyChooseUsPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-24 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <Award className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                The Al Haram Standard · Gujranwala
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              Why Travel With Al Haram?
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              When embarking on a sacred pilgrimage or family tour, trust and
              organization matter above all else. Discover what sets Al Haram
              Travels &amp; Tours apart.
            </p>
          </div>
        </div>
      </section>

      <TrustStripSection />

      <div className="mt-16">
        <WhyChooseUsSection />
      </div>

      <LeadershipExecutiveSection />

      {/* Action Banner */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FFF9EB] border-2 border-[#EEA012] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F]">
              Begin Planning Your Journey With Us Today
            </h2>
            <p className="text-sm font-bold text-[#0F0F0F]/80">
              Speak directly with our travel advisors for customized Umrah, family,
              and international tour arrangements.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('book')}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#0F0F0F] hover:bg-[#0B92D6] text-[#EEA012] hover:text-[#FFFFFF] text-sm font-extrabold transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
