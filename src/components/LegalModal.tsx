import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SquircleIcon } from './SquircleIcon';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { t } = useLanguage();
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0F]/80 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl rounded-3xl bg-[#FFFFFF] border-2 border-[#EEA012] shadow-2xl overflow-hidden">
        <div className="bg-[#0F0F0F] text-[#FFFFFF] px-6 py-5 flex items-center justify-between border-b-2 border-[#EEA012]">
          <div className="flex items-center gap-3">
            <SquircleIcon variant="dark" size="sm">
              {isPrivacy ? (
                <ShieldCheck className="w-4 h-4 text-[#EEA012]" />
              ) : (
                <FileText className="w-4 h-4 text-[#0B92D6]" />
              )}
            </SquircleIcon>
            <div>
              <h2 className="font-display text-lg font-extrabold">
                {isPrivacy
                  ? t('Privacy Policy', 'پرائیویسی پالیسی')
                  : t('Terms & Conditions', 'شرائط و ضوابط')}
              </h2>
              <p className="text-xs font-bold text-[#EEA012]">
                {t('Al Harm Travels & Tours · Gujranwala', 'الحرم ٹریولز اینڈ ٹورز · گوجرانوالہ')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="cursor-pointer"
          >
            <SquircleIcon variant="glass" size="sm">
              <X className="w-4 h-4 text-[#FFFFFF]" />
            </SquircleIcon>
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-sm font-semibold text-[#0F0F0F]/85 leading-relaxed max-h-[65vh] overflow-y-auto">
          {isPrivacy ? (
            <>
              <p>
                <strong>{t('Al Harm Travels & Tours', 'الحرم ٹریولز اینڈ ٹورز')}</strong>{' '}
                {t(
                  'respects your privacy and is committed to protecting the personal and travel documentation details you share with us when planning your Umrah or international travel journey.',
                  'آپ کی پرائیویسی کا احترام کرتا ہے اور آپ کے عمرہ یا بین الاقوامی سفر کی منصوبہ بندی کے دوران فراہم کردہ ذاتی اور سفری دستاویزات کے تحفظ کے لیے پرعزم ہے۔'
                )}
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                {t('1. Information We Collect', '1. معلومات جو ہم حاصل کرتے ہیں')}
              </h3>
              <p>
                {t(
                  'When you submit an inquiry or request travel assistance, we collect your name, contact information (WhatsApp/Phone, Email), travel preferences, and passport/visa documentation strictly as required to process your travel arrangements.',
                  'جب آپ سفری معلومات یا معاونت کی درخواست دیتے ہیں تو ہم صرف آپ کے سفری انتظامات مکمل کرنے کے لیے آپ کا نام، رابطہ نمبر (واٹس ایپ/فون، ای میل)، سفری ترجیحات اور پاسپورٹ/ویزا دستاویزات حاصل کرتے ہیں۔'
                )}
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                {t('2. How We Use Your Information', '2. معلومات کا استعمال')}
              </h3>
              <p>
                {t(
                  'Your details are used solely to coordinate visa processing, airline reservations, hotel accommodations in Makkah, Madinah, or international destinations, and ground transportation on your behalf.',
                  'آپ کی تفصیلات صرف ویزا پروسیسنگ، ایئر لائن بکنگ، مکہ مکرمہ، مدینہ منورہ یا بین الاقوامی مقامات پر ہوٹل کی رہائش اور گراؤنڈ ٹرانسپورٹ کے انتظام کے لیے استعمال کی جاتی ہیں۔'
                )}
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                {t('3. Confidentiality & Security', '3. رازداری اور تحفظ')}
              </h3>
              <p>
                {t(
                  'We never sell or distribute client data to unauthorized third parties. Information is shared only with official visa authorities, airlines, and hospitality partners necessary to fulfill your travel itinerary.',
                  'ہم کبھی بھی کلائنٹ کا ڈیٹا کسی غیر متعلقہ فریق کو فراہم نہیں کرتے۔ معلومات صرف متعلقہ ویزا حکام، ایئر لائنز اور ہوٹل پارٹنرز کے ساتھ شیئر کی جاتی ہیں۔'
                )}
              </p>
            </>
          ) : (
            <>
              <p>
                {t(
                  'Welcome to Al Harm Travels & Tours, Gujranwala, Pakistan. All travel inquiries, Umrah packages, and tour bookings are subject to the following service principles:',
                  'الحرم ٹریولز اینڈ ٹورز، گوجرانوالہ، پاکستان میں خوش آمدید۔ تمام سفری درخواستیں، عمرہ پیکجز اور ٹور بکنگ درج ذیل اصولوں کے تحت کی جاتی ہیں:'
                )}
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                {t(
                  '1. Customized Package Availability & Pricing',
                  '1. کسٹمائزڈ پیکج کی دستیابی اور قیمتیں'
                )}
              </h3>
              <p>
                {t(
                  'All Umrah packages, flight schedules, and hotel accommodations are subject to real-time availability and seasonal pricing at the time of confirmation. Written itineraries are provided prior to booking confirmation.',
                  'تمام عمرہ پیکجز، فلائٹ شیڈول اور ہوٹلوں کی رہائش بکنگ کی تصدیق کے وقت موجودہ دستیابی اور قیمتوں سے مشروط ہوتی ہے۔ بکنگ کنفرم کرنے سے پہلے تحریری شیڈول فراہم کیا جاتا ہے۔'
                )}
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                {t('2. Visa & Travel Documentation', '2. ویزا اور سفری دستاویزات')}
              </h3>
              <p>
                {t(
                  'Al Harm Travels & Tours provides comprehensive guidance and application assistance. Final visa issuance timelines and entry regulations remain governed by the relevant embassy and Kingdom of Saudi Arabia authorities.',
                  'الحرم ٹریولز اینڈ ٹورز ویزا کی درخواست میں مکمل رہنمائی فراہم کرتا ہے۔ ویزا کے اجراء کا حتمی وقت اور داخلے کے قوانین متعلقہ سفارت خانے اور سعودی عرب کے حکام کے طے کردہ ضوابط کے تابع ہوتے ہیں۔'
                )}
              </p>
              <h3 className="font-display text-base font-extrabold text-[#0F0F0F]">
                {t('3. Transparent Communication', '3. شفاف رابطہ اور معلومات')}
              </h3>
              <p>
                {t(
                  'We are committed to clear, honest, and timely communication regarding all inclusions, hotel categories, and transport arrangements before your journey begins.',
                  'ہم آپ کے سفر کے آغاز سے پہلے تمام سہولیات، ہوٹل کیٹیگریز اور ٹرانسپورٹ کے انتظامات کے بارے میں واضح، سچی اور بروقت معلومات فراہم کرنے کے پابند ہیں۔'
                )}
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-[#FFF9EB] border-t border-[#EEA012]/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0F0F0F] text-[#EEA012] text-xs font-extrabold hover:bg-[#0B92D6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            {t('Close Window', 'ونڈو بند کریں')}
          </button>
        </div>
      </div>
    </div>
  );
};
