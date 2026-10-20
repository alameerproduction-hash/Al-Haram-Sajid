import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Award,
  Building2,
  ArrowUpRight,
  Navigation,
} from 'lucide-react';
import {
  SOCIAL_LINKS,
  IMAGES,
  OFFICE_LOCATION,
} from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import { BrandSocialIcon } from '../components/SocialIcons';
import { ResilientImage } from '../components/ResilientImage';
import { InquiryFormSection } from '../components/InquiryFormSection';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
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
                <MapPin className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                {t('Connect With Our Gujranwala Office', 'ہمارے گوجرانوالہ آفس سے رابطہ کریں')}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              {t('AL HARM TRAVELS & TOURS', 'الحرم ٹریولز اینڈ ٹورز')}
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              {t(
                'We are here to assist you with Umrah packages, visa documentation, and customized international travel. All 3 official numbers are active on Phone & WhatsApp.',
                'ہم عمرہ پیکجز، ویزا دستاویزات اور کسٹمائزڈ بین الاقوامی سفر میں آپ کی مدد کے لیے حاضر ہیں۔ ہمارے تینوں آفیشل نمبرز فون اور واٹس ایپ پر فعال ہیں۔'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Executive Corporate Credentials, Official Numbers & Social Media */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Executive Credentials Banner */}
        <div className="rounded-3xl bg-[#FFF9EB] border-2 border-[#EEA012] p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-[18px] overflow-hidden border-2 border-[#EEA012] shadow-md shrink-0 bg-[#0F0F0F]">
              <ResilientImage
                src={IMAGES.ceoPortrait}
                alt="Sajid Kahloon — CEO Al Harm Travels & Tours"
                fallbackTitle="SK"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                {t('Chief Executive Officer', 'چیف ایگزیکٹو آفیسر')}
              </p>
              <h2 className="font-display text-xl font-extrabold text-[#0F0F0F] mt-0.5">
                {t('Sajid Kahloon', 'ساجد کہلوں')}
              </h2>
              <p className="text-xs font-bold text-[#0F0F0F]/80 mt-0.5">
                {t('CEO — Al Harm Travels & Tours', 'سی ای او — الحرم ٹریولز اینڈ ٹورز')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <SquircleIcon variant="light" size="md">
              <Building2 className="w-5 h-5 text-[#0B92D6]" />
            </SquircleIcon>
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                {t('Professional Recognition', 'پیشہ ورانہ شناخت')}
              </p>
              <h2 className="font-display text-base font-extrabold text-[#0F0F0F] mt-0.5">
                {t(
                  'Member of Gujranwala Chamber of Commerce & Industry',
                  'ممبر گوجرانوالہ چیمبر آف کامرس اینڈ انڈسٹری'
                )}
              </h2>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <SquircleIcon variant="light" size="md">
              <Award className="w-5 h-5 text-[#EEA012]" />
            </SquircleIcon>
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                {t('Industry Leadership', 'صنعتی قیادت')}
              </p>
              <h2 className="font-display text-lg font-extrabold text-[#0F0F0F] mt-0.5">
                {t('Chairman — Travel & Tour', 'چیئرمین — ٹریول اینڈ ٹور')}
              </h2>
            </div>
          </div>
        </div>

        {/* All 3 Official Call & WhatsApp Numbers */}
        <div>
          <div className="mb-6">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase">
              {t('Direct Phone & WhatsApp Lines', 'براہِ راست فون اور واٹس ایپ نمبرز')}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F] mt-1">
              {t('CALL OR WHATSAPP US DIRECTLY', 'ہمیں براہِ راست کال یا واٹس ایپ کریں')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactNumbers.map((num, idx) => (
              <div
                key={num.raw}
                className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 sm:p-7 shadow-sm hover:border-[#EEA012] transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-extrabold text-[#0B92D6] uppercase tracking-wider">
                      {num.label}
                    </p>
                    <a
                      href={num.telHref}
                      className="font-mono text-2xl sm:text-3xl font-extrabold text-[#0F0F0F] hover:text-[#EEA012] transition-colors tabular-nums block"
                    >
                      {num.display}
                    </a>
                    <p className="text-xs font-bold text-[#0F0F0F]/75">
                      {t(
                        'Available for Voice Call & WhatsApp Chat',
                        'وائس کال اور واٹس ایپ چیٹ کے لیے دستیاب'
                      )}
                    </p>
                  </div>
                  <SquircleIcon variant={idx === 0 ? 'gold' : 'light'} size="md">
                    <MessageCircle
                      className={`w-5 h-5 ${
                        idx === 0 ? 'text-[#0F0F0F]' : 'text-[#EEA012]'
                      }`}
                    />
                  </SquircleIcon>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#0F0F0F]/10">
                  <a
                    href={num.telHref}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0F0F0F] text-[#FFFFFF] hover:bg-[#0B92D6] text-xs font-extrabold transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#EEA012]" />
                    <span>{t('Call Now', 'کال کریں')}</span>
                  </a>
                  <a
                    href={num.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#EEA012] text-[#0F0F0F] hover:bg-[#0B92D6] hover:text-[#FFFFFF] text-xs font-extrabold transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t('WhatsApp', 'واٹس ایپ')}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Location, Business Hours & Official Social Media Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Office & Hours */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a
              href={OFFICE_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 hover:border-[#EEA012] p-6 shadow-sm space-y-3 flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <SquircleIcon variant="light" size="md">
                    <MapPin className="w-5 h-5 text-[#0B92D6]" />
                  </SquircleIcon>
                  <ArrowUpRight className="w-4 h-4 text-[#EEA012] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                  {t('Office Location', 'دفتر کا پتہ')}
                </h3>
                <p className="text-xs font-extrabold text-[#0B92D6]">
                  {t(OFFICE_LOCATION.shortCity, 'گوجرانوالہ، پاکستان')}
                </p>
                <p className="text-xs font-semibold text-[#0F0F0F]/80 leading-relaxed">
                  {t(
                    'Click to open our official office pin on Google Maps for turn-by-turn directions.',
                    'راستے کی رہنمائی کے لیے گوگل میپس پر ہمارا آفیشل پن کھولنے کے لیے کلک کریں۔'
                  )}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0F0F0F] group-hover:text-[#0B92D6] pt-2">
                <Navigation className="w-3.5 h-3.5 text-[#EEA012]" />
                <span>{t('Open in Google Maps', 'گوگل میپس میں کھولیں')}</span>
              </span>
            </a>

            <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 p-6 shadow-sm space-y-3">
              <SquircleIcon variant="light" size="md">
                <Clock className="w-5 h-5 text-[#EEA012]" />
              </SquircleIcon>
              <h3 className="font-display text-lg font-extrabold text-[#0F0F0F]">
                {t('Business Hours', 'دفتری اوقات')}
              </h3>
              <p className="text-xs font-extrabold text-[#EEA012]">
                {t('Monday — Saturday', 'پیر تا ہفتہ')}
              </p>
              <p className="text-xs font-semibold text-[#0F0F0F]/80 leading-relaxed">
                {t(
                  'Dedicated consultation hours for pilgrims, families & group organizers.',
                  'عازمین، فیملیز اور گروپ آرگنائزرز کے لیے مشاورت کے خصوصی اوقات۔'
                )}
              </p>
            </div>
          </div>

          {/* Official Social Media Channels */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0F0F0F] text-[#FFFFFF] border-2 border-[#EEA012] p-6 sm:p-8 bg-islamic-pattern-dark flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#EEA012] uppercase">
                {t(
                  'Follow CEO Sajid Kahloon & Al Harm Travels & Tours',
                  'سی ای او ساجد کہلوں اور الحرم ٹریولز اینڈ ٹورز کو فالو کریں'
                )}
              </p>
              <h3 className="font-display text-2xl font-extrabold text-[#FFFFFF] mt-1">
                {t('OFFICIAL SOCIAL MEDIA CHANNELS', 'آفیشل سوشل میڈیا چینلز')}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SOCIAL_LINKS.map((soc) => (
                <a
                  key={soc.id}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-[#181818] border border-[#FFFFFF]/15 hover:border-[#EEA012] p-4 transition-all flex flex-col justify-between gap-4"
                >
                  <div className="flex items-center justify-between">
                    <SquircleIcon variant="dark" size="sm">
                      <BrandSocialIcon
                        id={soc.id}
                        className="w-4 h-4 text-[#EEA012]"
                      />
                    </SquircleIcon>
                    <ArrowUpRight className="w-4 h-4 text-[#0B92D6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <p className="font-display text-base font-extrabold text-[#FFFFFF] group-hover:text-[#EEA012]">
                      {soc.name}
                    </p>
                    <p className="text-[11px] font-bold text-[#E8C377] truncate mt-0.5">
                      {soc.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Google Maps & Directions Section */}
        <div className="rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 bg-[#0F0F0F] text-[#FFFFFF] border-b-2 border-[#EEA012] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <SquircleIcon variant="dark" size="md">
                <MapPin className="w-5 h-5 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-extrabold tracking-[0.18em] text-[#0B92D6] uppercase">
                  {t('Visit Our Office · Gujranwala', 'ہمارے دفتر تشریف لائیں · گوجرانوالہ')}
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#FFFFFF] mt-0.5">
                  {t('OFFICIAL GOOGLE MAPS LOCATION', 'گوگل میپس پر آفیشل لوکیشن')}
                </h2>
              </div>
            </div>

            <a
              href={OFFICE_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EEA012] hover:bg-[#0B92D6] text-[#0F0F0F] hover:text-[#FFFFFF] text-xs font-extrabold transition-colors whitespace-nowrap shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>{t('Get Directions on Google Maps', 'گوگل میپس پر راستہ دیکھیں')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative h-80 sm:h-96 w-full bg-[#F4F8FB]">
            <iframe
              title="Al Harm Travels & Tours Gujranwala Office Map"
              src={OFFICE_LOCATION.embedMapUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Full Inquiry Form: SEND US AN INQUIRY */}
        <div className="pt-4">
          <InquiryFormSection
            heading={t('SEND US AN INQUIRY', 'ہمیں اپنی سفری درخواست بھیجیں')}
            subheading={t(
              'Complete the form below and our travel specialists in Gujranwala will contact you directly.',
              'نیچے دیا گیا فارم پر کریں اور گوجرانوالہ میں ہمارے سفری ماہرین براہِ راست آپ سے رابطہ کریں گے۔'
            )}
          />
        </div>
      </section>
    </div>
  );
};
