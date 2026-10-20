import React from 'react';
import {
  Compass,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import { BrandSocialIcon } from '../components/SocialIcons';
import {
  InquiryFormSection,
  InquiryPreset,
} from '../components/InquiryFormSection';
import { useLanguage } from '../context/LanguageContext';

interface BookPageProps {
  preset?: InquiryPreset | null;
}

export const BookPage: React.FC<BookPageProps> = ({ preset }) => {
  const { t, getContactNumbers } = useLanguage();
  const contactNumbers = getContactNumbers();

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <Compass className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                {t(
                  'Seamless Journey Reservation & Consultation',
                  'آسان سفری بکنگ اور مشاورت'
                )}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              {t('BOOK YOUR JOURNEY', 'اپنا سفر بک کریں')}
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              {t(
                'Submit your travel details below or connect immediately via our 3 official WhatsApp and phone lines for a customized Umrah or international tour proposal.',
                'نیچے اپنی سفری تفصیلات جمع کروائیں یا کسٹمائزڈ عمرہ اور بین الاقوامی ٹور کے لیے ہمارے 3 آفیشل واٹس ایپ اور فون نمبرز پر فوری رابطہ کریں۔'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking / Inquiry Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <InquiryFormSection
              preset={preset}
              heading={t('PLAN YOUR JOURNEY', 'اپنے سفر کی منصوبہ بندی کریں')}
              subheading={t(
                'Provide your preferred travel dates, number of travelers, and any specific accommodation or transport requests.',
                'اپنی پسندیدہ تاریخِ سفر، مسافروں کی تعداد اور رہائش یا ٹرانسپورٹ کی خصوصی ترجیحات درج کریں۔'
              )}
            />
          </div>

          {/* Right Sidebar: Direct WhatsApp Lines & Promise */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Direct WhatsApp & Phone Box */}
            <div className="rounded-3xl bg-[#FFF9EB] border-2 border-[#EEA012] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <SquircleIcon variant="gold" size="md">
                  <MessageCircle className="w-5 h-5 text-[#0F0F0F]" />
                </SquircleIcon>
                <div>
                  <h2 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                    {t('Instant WhatsApp & Call', 'فوری واٹس ایپ اور کال')}
                  </h2>
                  <p className="text-xs font-bold text-[#0B92D6]">
                    {t('All Numbers Active on WhatsApp', 'تمام نمبرز واٹس ایپ پر فعال ہیں')}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {contactNumbers.map((num) => (
                  <div
                    key={num.raw}
                    className="rounded-2xl bg-[#FFFFFF] border border-[#0F0F0F]/12 p-3.5 flex items-center justify-between gap-2"
                  >
                    <div>
                      <a
                        href={num.telHref}
                        className="font-mono text-sm font-extrabold text-[#0F0F0F] hover:text-[#0B92D6] tabular-nums block"
                      >
                        {num.display}
                      </a>
                      <p className="text-[11px] font-bold text-[#0F0F0F]/70">
                        {num.label}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={num.telHref}
                        className="px-2.5 py-1.5 rounded-lg bg-[#0F0F0F] text-[#FFFFFF] hover:bg-[#0B92D6] text-[11px] font-extrabold inline-flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-[#EEA012]" />
                        <span>{t('Call', 'کال')}</span>
                      </a>
                      <a
                        href={num.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-[#EEA012] text-[#0F0F0F] hover:bg-[#0B92D6] hover:text-[#FFFFFF] text-[11px] font-extrabold inline-flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>{t('WhatsApp', 'واٹس ایپ')}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Promise */}
            <div className="rounded-3xl bg-[#0F0F0F] text-[#FFFFFF] p-7 border-2 border-[#EEA012] bg-islamic-pattern-dark space-y-5">
              <div className="flex items-center gap-3">
                <SquircleIcon variant="dark" size="md">
                  <ShieldCheck className="w-5 h-5 text-[#EEA012]" />
                </SquircleIcon>
                <div>
                  <h2 className="font-display text-lg font-extrabold">
                    {t('Our Consultation Promise', 'ہمارا مشاورتی عہد')}
                  </h2>
                  <p className="text-xs font-extrabold text-[#0B92D6]">
                    {t('Al Harm Travels & Tours', 'الحرم ٹریولز اینڈ ٹورز')}
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs font-semibold text-[#FFFFFF]/90 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EEA012] shrink-0 mt-0.5" />
                  <span>
                    <strong>{t('Personalized Review:', 'ذاتی جائزہ:')}</strong>{' '}
                    {t(
                      'Our Gujranwala team reviews your preferred travel dates and group size.',
                      'ہماری گوجرانوالہ ٹیم آپ کی پسندیدہ تاریخوں اور مسافروں کی تعداد کا تفصیلی جائزہ لیتی ہے۔'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B92D6] shrink-0 mt-0.5" />
                  <span>
                    <strong>
                      {t('Current Availability & Pricing:', 'موجودہ دستیابی اور قیمتیں:')}
                    </strong>{' '}
                    {t(
                      'We prepare tailored Makkah & Madinah accommodation and flight options based on live availability.',
                      'ہم موجودہ دستیابی کے مطابق مکہ مکرمہ اور مدینہ منورہ میں رہائش اور فلائٹ کے بہترین آپشنز تیار کرتے ہیں۔'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EEA012] shrink-0 mt-0.5" />
                  <span>
                    <strong>
                      {t('Direct WhatsApp & Phone Support:', 'براہِ راست واٹس ایپ اور فون سپورٹ:')}
                    </strong>{' '}
                    {t(
                      'Clear, transparent guidance through visa processing and pre-departure preparation.',
                      'ویزا پروسیسنگ اور روانگی سے قبل تیاری کے ہر مرحلے میں واضح اور شفاف رہنمائی۔'
                    )}
                  </span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#FFFFFF]/15 space-y-3">
                <p className="text-xs font-extrabold text-[#EEA012]">
                  {t('Follow Us on Social Media', 'سوشل میڈیا پر ہمیں فالو کریں')}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.id}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181818] border border-[#FFFFFF]/15 hover:border-[#EEA012] text-xs font-extrabold text-[#FFFFFF]"
                    >
                      <BrandSocialIcon
                        id={soc.id}
                        className="w-3.5 h-3.5 text-[#EEA012]"
                      />
                      <span>{soc.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#0B92D6]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
