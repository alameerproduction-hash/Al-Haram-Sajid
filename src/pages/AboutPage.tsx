import React from 'react';
import {
  ShieldCheck,
  Building2,
  Compass,
  HeartHandshake,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { PageId } from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import {
  AboutSplitSection,
  LeadershipExecutiveSection,
} from '../components/SharedSections';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const pillars = [
    {
      title: 'Spiritual Peace of Mind',
      description:
        'We handle visa formalities, flight transitions, and hotel check-ins so pilgrims can devote their heart and time to worship in Makkah and Madinah.',
      icon: Compass,
      color: 'text-[#EEA012]',
    },
    {
      title: 'Transparent Communication',
      description:
        'Clear explanations of hotel distances, transport schedules, and itinerary details before your journey begins—with no hidden surprises.',
      icon: ShieldCheck,
      color: 'text-[#0B92D6]',
    },
    {
      title: 'Chamber-Recognized Credibility',
      description:
        'As an active Member of the Gujranwala Chamber of Commerce & Industry and led by Chairman — Travel & Tour, we uphold high corporate standards.',
      icon: Building2,
      color: 'text-[#EEA012]',
    },
    {
      title: 'Dedicated Family & Elder Care',
      description:
        'Special attention to families, senior citizens, and first-time pilgrims requiring patient guidance and comfortable ground arrangements.',
      icon: HeartHandshake,
      color: 'text-[#0B92D6]',
    },
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <MapPin className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                About Al Haram Travels &amp; Tours · Gujranwala
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              Your Trusted Partner for a Peaceful &amp; Professionally Managed Journey
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              Combining Islamic hospitality values with disciplined corporate
              travel management under the leadership of CEO Sajid Kahloon.
            </p>
          </div>
        </div>
      </section>

      {/* Split-Screen About Section */}
      <AboutSplitSection showCta={false} />

      {/* Core Corporate Pillars */}
      <section className="py-16 sm:py-20 bg-[#FFF9EB]/60 border-y-2 border-[#0F0F0F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
              Our Commitment
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#0F0F0F]">
              HOW WE SERVE PILGRIMS &amp; TRAVELERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-7 shadow-sm hover:border-[#EEA012] transition-colors flex items-start gap-4"
                >
                  <SquircleIcon variant="light" size="md">
                    <IconComponent className={`w-5 h-5 ${pillar.color}`} />
                  </SquircleIcon>
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-[#0F0F0F]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#0F0F0F]/80 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Leadership Profile */}
      <LeadershipExecutiveSection />

      {/* Bottom Consultation CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0F0F0F] text-[#FFFFFF] p-8 sm:p-12 border-2 border-[#EEA012] bg-islamic-pattern-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs tracking-[0.2em] text-[#0B92D6] uppercase font-extrabold">
              Plan With Confidence
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
              Ready to Discuss Your Upcoming Umrah or Travel Plans?
            </h2>
            <p className="text-sm font-bold text-[#FFFFFF]/80">
              Connect with our Gujranwala office for personalized guidance tailored
              to your family or group schedule.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('book')}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#EEA012] hover:bg-[#0B92D6] text-[#0F0F0F] hover:text-[#FFFFFF] text-sm font-extrabold transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Book Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
