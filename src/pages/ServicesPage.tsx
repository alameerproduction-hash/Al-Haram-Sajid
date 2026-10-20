import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SquircleIcon } from '../components/SquircleIcon';
import { ServicesGridSection } from '../components/SharedSections';
import { InquiryPreset } from '../components/InquiryFormSection';
import { useLanguage } from '../context/LanguageContext';

interface ServicesPageProps {
  onInquireWithPreset: (preset: InquiryPreset) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onInquireWithPreset,
}) => {
  const { t } = useLanguage();
  const workflowSteps = [
    {
      step: t('01. Initial Consultation', '01. ابتدائی مشاورت'),
      title: t('Understanding Your Travel Goals', 'آپ کی سفری ضروریات کو سمجھنا'),
      desc: t(
        'Discuss your preferred dates, number of family members, hotel proximity preferences, and budget with our Gujranwala team.',
        'ہماری گوجرانوالہ ٹیم کے ساتھ اپنی پسندیدہ تاریخوں، فیملی ممبران کی تعداد، ہوٹل کی قربت اور بجٹ پر تفصیلی مشاورت کریں۔'
      ),
    },
    {
      step: t('02. Documentation & Visa', '02. دستاویزات اور ویزا'),
      title: t('Seamless Visa & Flight Processing', 'آسان ویزا اور فلائٹ پروسیسنگ'),
      desc: t(
        'We guide you through passport verification, Umrah or travel visa processing, and coordinated airline reservations.',
        'پاسپورٹ کی تصدیق، عمرہ یا ٹریول ویزا پروسیسنگ اور مربوط ایئر لائن بکنگ میں ہم آپ کی مکمل رہنمائی کرتے ہیں۔'
      ),
    },
    {
      step: t('03. Accommodation & Ziyarat', '03. رہائش اور زیارات'),
      title: t('Confirmed Stays & Ground Transport', 'کنفرم رہائش اور گراؤنڈ ٹرانسپورٹ'),
      desc: t(
        'Receive clear confirmation of your Makkah and Madinah accommodations, airport transfers, and guided Ziyarat arrangements.',
        'مکہ مکرمہ اور مدینہ منورہ میں رہائش، ایئرپورٹ ٹرانسفرز اور زیارات کے انتظامات کی واضح تصدیق حاصل کریں۔'
      ),
    },
    {
      step: t('04. Continuous Support', '04. مسلسل معاونت'),
      title: t('Pre-Departure Briefing & On-Trip Care', 'روانگی سے قبل بریفنگ اور دورانِ سفر مدد'),
      desc: t(
        'Depart with confidence knowing our support team remains reachable throughout your sacred or international journey.',
        'اس اعتماد کے ساتھ روانہ ہوں کہ ہماری سپورٹ ٹیم آپ کے مقدس یا بین الاقوامی سفر کے دوران ہر وقت رابطے میں رہے گی۔'
      ),
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
                {t(
                  'End-to-End Pilgrimage & Travel Management',
                  'مکمل عمرہ اور ٹریول مینجمنٹ'
                )}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              {t('OUR SERVICES', 'ہماری خدمات')}
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              {t(
                'Professional assistance across every element of your Umrah and international travel—crafted for peace of mind and comfort.',
                'آپ کے عمرہ اور بین الاقوامی سفر کے ہر مرحلے میں پیشہ ورانہ معاونت—جو آپ کے ذہنی سکون اور آرام کے لیے ترتیب دی گئی ہے۔'
              )}
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
              {t('Structured Journey Planning', 'منظم سفری منصوبہ بندی')}
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#0F0F0F]">
              {t('HOW WE ORGANIZE YOUR JOURNEY', 'ہم آپ کے سفر کو کیسے منظم کرتے ہیں')}
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
