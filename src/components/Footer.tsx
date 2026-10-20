import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Compass,
  Award,
  ShieldCheck,
} from 'lucide-react';
import {
  CONTACT_NUMBERS,
  SOCIAL_LINKS,
  OFFICE_LOCATION,
  PageId,
} from '../data/siteData';
import { SquircleIcon } from './SquircleIcon';
import { BrandSocialIcon } from './SocialIcons';
import { OfficialBrandLogo } from './OfficialBrandLogo';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegalModal,
  onReplayIntro,
}) => {
  const { t, getContactNumbers } = useLanguage();
  const contactNumbers = getContactNumbers();

  return (
    <footer className="bg-[#0F0F0F] text-[#FFFFFF] border-t-2 border-[#EEA012] bg-islamic-pattern-dark">
      {/* Top Credential Ribbon */}
      <div className="border-b border-[#FFFFFF]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-[18px] bg-[#FFFFFF] border-2 border-[#EEA012] p-1.5 shadow-lg flex items-center justify-center shrink-0">
              <OfficialBrandLogo
                className="w-full h-full"
                showWordmark={true}
              />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-wide text-[#FFFFFF]">
                {t('AL HARM TRAVELS & TOURS', 'الحرم ٹریولز اینڈ ٹورز')}
              </h2>
              <p className="text-sm font-bold text-[#EEA012] mt-0.5">
                {t(
                  'Your Journey of Faith, Comfort & Trust.',
                  'آپ کا روحانی سفر — آرام، اعتماد اور سہولت کے ساتھ۔'
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#FFFFFF]">
            <div className="flex items-center gap-3">
              <SquircleIcon variant="dark" size="sm">
                <Award className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="text-[#FFFFFF] font-extrabold">
                  {t('Sajid Kahloon — CEO', 'ساجد کہلوں — سی ای او')}
                </p>
                <p className="text-[#0B92D6] font-bold">
                  {t('Chairman — Travel & Tour', 'چیئرمین — ٹریول اینڈ ٹور')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SquircleIcon variant="dark" size="sm">
                <ShieldCheck className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <div>
                <p className="text-[#FFFFFF] font-extrabold">
                  {t('Chamber Recognition', 'چیمبر آف کامرس رکنیت')}
                </p>
                <p className="text-[#E8C377] font-bold">
                  {t(
                    'Member of Gujranwala Chamber of Commerce & Industry',
                    'ممبر گوجرانوالہ چیمبر آف کامرس اینڈ انڈسٹری'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Social Media Column */}
          <div className="lg:col-span-4 space-y-5">
            <p className="text-xs tracking-[0.2em] text-[#0B92D6] font-extrabold uppercase">
              {t(
                'ESTABLISHED PILGRIMAGE & TRAVEL PARTNER',
                'معتبر عمرہ اور سفری ساتھی'
              )}
            </p>
            <p className="text-sm font-semibold text-[#FFFFFF]/85 leading-relaxed max-w-sm">
              {t(
                'Al Harm Travels & Tours helps pilgrims and travelers experience a comfortable, organized, and memorable journey with professional travel assistance and dedicated customer care from Gujranwala, Pakistan.',
                'الحرم ٹریولز اینڈ ٹورز گوجرانوالہ، پاکستان سے عازمین اور مسافروں کو پیشہ ورانہ سفری رہنمائی اور خصوصی کسٹمر کیئر کے ساتھ ایک آرام دہ، منظم اور یادگار سفر فراہم کرتا ہے۔'
              )}
            </p>

            {/* Official Social Media Links inside Squircle Containers */}
            <div className="space-y-2.5 pt-1">
              <p className="text-xs font-extrabold tracking-wider text-[#EEA012] uppercase">
                {t('Official Social Channels', 'آفیشل سوشل میڈیا چینلز')}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${soc.name} — ${soc.handle}`}
                    className="group inline-flex items-center gap-2.5 pr-3.5 rounded-2xl bg-[#181818] border border-[#FFFFFF]/15 hover:border-[#EEA012] transition-all"
                  >
                    <SquircleIcon variant="dark" size="sm">
                      <BrandSocialIcon
                        id={soc.id}
                        className="w-4 h-4 text-[#EEA012]"
                      />
                    </SquircleIcon>
                    <span className="text-xs font-extrabold text-[#FFFFFF] group-hover:text-[#EEA012] transition-colors">
                      {soc.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('book')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EEA012] text-[#0F0F0F] text-xs font-extrabold hover:bg-[#0B92D6] hover:text-[#FFFFFF] transition-colors cursor-pointer whitespace-nowrap shadow-[0_8px_20px_-4px_rgba(238,160,18,0.4)]"
              >
                <span>{t('Plan Your Journey', 'اپنے سفر کی منصوبہ بندی کریں')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              {onReplayIntro && (
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#181818] border border-[#EEA012]/40 text-[#FFFFFF] hover:border-[#0B92D6] hover:text-[#EEA012] text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{t('Replay 3D Intro', 'تھری ڈی انٹرو دوبارہ دیکھیں')}</span>
                </button>
              )}
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-base font-extrabold text-[#EEA012]">
              {t('Company', 'کمپنی')}
            </h3>
            <ul className="space-y-2.5 text-sm font-bold text-[#FFFFFF]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  {t('About', 'ہمارے بارے میں')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  {t('Leadership', 'قیادت')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('why-choose-us')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  {t('Why Choose Us', 'ہمیں کیوں منتخب کریں')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  {t('Gallery', 'گیلری')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-[#EEA012] transition-colors cursor-pointer"
                >
                  {t('Testimonials', 'گاہکوں کی آراء')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-base font-extrabold text-[#EEA012]">
              {t('Services', 'خدمات')}
            </h3>
            <ul className="space-y-2.5 text-sm font-bold text-[#FFFFFF]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('umrah')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  {t('Umrah', 'عمرہ')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('tours')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  {t('Travel & Tours', 'ٹریول اینڈ ٹورز')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  {t('Visa Assistance', 'ویزا اسسٹنس')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  {t('Hotel Booking', 'ہوٹل بکنگ')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0B92D6] transition-colors cursor-pointer"
                >
                  {t('Transportation', 'ٹرانسپورٹیشن')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact (All 3 Call & WhatsApp Numbers + Location) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h3 className="font-display text-base font-extrabold text-[#EEA012]">
              {t('Contact & WhatsApp Lines', 'رابطہ اور واٹس ایپ نمبرز')}
            </h3>
            <div className="space-y-3 text-sm text-[#FFFFFF]">
              {contactNumbers.map((num, idx) => (
                <div
                  key={num.raw}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-[#181818] border border-[#FFFFFF]/10 hover:border-[#EEA012]/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <SquircleIcon variant="dark" size="sm">
                      {idx % 2 === 0 ? (
                        <Phone className="w-4 h-4 text-[#EEA012]" />
                      ) : (
                        <MessageCircle className="w-4 h-4 text-[#0B92D6]" />
                      )}
                    </SquircleIcon>
                    <div>
                      <a
                        href={num.telHref}
                        className="font-mono text-sm font-extrabold text-[#FFFFFF] hover:text-[#EEA012] tabular-nums block"
                      >
                        {num.display}
                      </a>
                      <p className="text-[11px] font-bold text-[#E8C377]">
                        {num.label}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={num.telHref}
                      className="px-2.5 py-1.5 rounded-lg bg-[#0F0F0F] border border-[#FFFFFF]/20 text-[11px] font-extrabold text-[#FFFFFF] hover:border-[#0B92D6] hover:text-[#0B92D6] transition-colors"
                    >
                      {t('Call', 'کال')}
                    </a>
                    <a
                      href={num.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-[#EEA012] text-[#0F0F0F] hover:bg-[#0B92D6] hover:text-[#FFFFFF] text-[11px] font-extrabold transition-colors"
                    >
                      {t('WhatsApp', 'واٹس ایپ')}
                    </a>
                  </div>
                </div>
              ))}

              <a
                href={OFFICE_LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-[#181818] border border-[#FFFFFF]/10 hover:border-[#0B92D6] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <SquircleIcon variant="dark" size="sm">
                    <MapPin className="w-4 h-4 text-[#0B92D6]" />
                  </SquircleIcon>
                  <div>
                    <p className="text-xs font-bold text-[#E8C377]">
                      {t('Office Location (Google Maps)', 'دفتر کا مقام (گوگل میپس)')}
                    </p>
                    <p className="text-xs font-extrabold text-[#FFFFFF] group-hover:text-[#EEA012] transition-colors">
                      {t(OFFICE_LOCATION.city, 'گوجرانوالہ، پنجاب، پاکستان')}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#EEA012] shrink-0 mr-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#FFFFFF]/12 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-[#FFFFFF]/80">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>
              {t(
                '© 2026 Al Harm Travels & Tours. All Rights Reserved.',
                '© 2026 الحرم ٹریولز اینڈ ٹورز۔ جملہ حقوق محفوظ ہیں۔'
              )}
            </p>
            <span aria-hidden="true" className="hidden sm:inline text-[#0B92D6]">
              |
            </span>
            <p>
              {t('Created by', 'تیار کردہ:')}{' '}
              <a
                href="https://fasttargetco.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EEA012] hover:text-[#0B92D6] underline underline-offset-4 font-extrabold transition-colors"
              >
                FAST TARGET CO.
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-[#EEA012] transition-colors cursor-pointer"
            >
              {t('Privacy Policy', 'پرائیویسی پالیسی')}
            </button>
            <span aria-hidden="true" className="text-[#0B92D6]">
              |
            </span>
            <button
              type="button"
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-[#EEA012] transition-colors cursor-pointer"
            >
              {t('Terms & Conditions', 'شرائط و ضوابط')}
            </button>
            <span aria-hidden="true" className="text-[#0B92D6]">
              |
            </span>
            <button
              type="button"
              onClick={() => onNavigate('admin')}
              className="hover:text-[#EEA012] transition-colors cursor-pointer"
            >
              {t('Admin Portal', 'ایڈمن پورٹل')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
