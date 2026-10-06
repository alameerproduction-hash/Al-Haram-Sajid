import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SquircleIcon } from '../components/SquircleIcon';
import { ServicesGridSection } from '../components/SharedSections';
import { InquiryPreset } from '../components/InquiryFormSection';

interface ServicesPageProps {
  onInquireWithPreset: (preset: InquiryPreset) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onInquireWithPreset,
}) => {
  const workflowSteps = [
    {
      step: '01. Initial Consultation',
      title: 'Understanding Your Travel Goals',
      desc: 'Discuss your preferred dates, number of family members, hotel proximity preferences, and budget with our Gujranwala team.',
    },
    {
      step: '02. Documentation & Visa',
      title: 'Seamless Visa & Flight Processing',
      desc: 'We guide you through passport verification, Umrah or travel visa processing, and coordinated airline reservations.',
    },
    {
      step: '03. Accommodation & Ziyarat',
      title: 'Confirmed Stays & Ground Transport',
      desc: 'Receive clear confirmation of your Makkah and Madinah accommodations, airport transfers, and guided Ziyarat arrangements.',
    },
    {
      step: '04. Continuous Support',
      title: 'Pre-Departure Briefing & On-Trip Care',
      desc: 'Depart with confidence knowing our support team remains reachable throughout your sacred or international journey.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <ShieldCheck className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                End-to-End Pilgrimage &amp; Travel Management
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              OUR SERVICES
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              Professional assistance across every element of your Umrah
              and international travel—crafted for peace of mind and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Core Services Grid */}
      <ServicesGridSection
        onInquireService={(title) =>
          onInquireWithPreset({
            travelType: 'Umrah',
            packageName: `Service Inquiry: ${title}`,
          })
        }
      />

      {/* How Our Process Works */}
      <section className="py-16 sm:py-20 bg-[#FFF9EB]/60 border-t-2 border-[#0F0F0F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
              Structured Journey Planning
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#0F0F0F]">
              HOW WE ORGANIZE YOUR JOURNEY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 shadow-sm space-y-3 hover:border-[#EEA012] transition-colors"
              >
                <p className="font-mono text-xs font-extrabold text-[#0B92D6] tabular-nums">
                  {item.step}
                </p>
                <h3 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#0F0F0F]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
