import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  User,
  Phone,
  Mail,
  Users,
  Calendar,
  Compass,
  MessageSquare,
  RotateCcw,
} from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { SquircleIcon } from './SquircleIcon';
import { useLanguage } from '../context/LanguageContext';

export interface InquiryPreset {
  travelType?: 'Umrah' | 'Family Tour' | 'Group Tour' | 'Other';
  packageName?: string;
}

interface InquiryFormSectionProps {
  preset?: InquiryPreset | null;
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

export interface StoredInquiry {
  id: string;
  fullName: string;
  whatsapp: string;
  email: string;
  travelers: string;
  travelType: string;
  preferredDate: string;
  message: string;
  submittedAt: string;
  status?: 'new' | 'contacted' | 'booked' | 'archived';
  adminNotes?: string;
}

export const InquiryFormSection: React.FC<InquiryFormSectionProps> = ({
  preset,
  heading,
  subheading,
  compact = false,
}) => {
  const { t } = useLanguage();
  const displayHeading = heading || t('PLAN YOUR JOURNEY', 'اپنے سفر کی منصوبہ بندی کریں');
  const displaySubheading =
    subheading ||
    t(
      'Share your travel preferences below. Our Gujranwala travel desk will prepare a customized itinerary and contact you directly.',
      'اپنی سفری ترجیحات درج ذیل فارم میں شیئر کریں۔ ہمارا گوجرانوالہ ٹریول ڈیسک آپ کے لیے کسٹمائزڈ پلان تیار کر کے براہِ راست آپ سے رابطہ کرے گا۔'
    );

  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [travelType, setTravelType] = useState<string>(
    preset?.travelType || 'Umrah'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState(
    preset?.packageName
      ? `Inquiring about: ${preset.packageName}. Please share current availability and customized options.`
      : ''
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (preset?.travelType) {
      setTravelType(preset.travelType);
    }
    if (preset?.packageName) {
      setMessage(
        `Inquiring about: ${preset.packageName}. Please share current availability and customized options.`
      );
    }
  }, [preset]);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      nextErrors.fullName = t(
        'Please enter your full name.',
        'براہ کرم اپنا پورا نام درج کریں۔'
      );
    }
    if (!whatsapp.trim() || whatsapp.trim().length < 7) {
      nextErrors.whatsapp = t(
        'Please enter a valid WhatsApp or phone number.',
        'براہ کرم درست واٹس ایپ یا فون نمبر درج کریں۔'
      );
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = t(
        'Please enter a valid email address.',
        'براہ کرم درست ای میل ایڈریس درج کریں۔'
      );
    }
    if (!travelers || Number(travelers) < 1) {
      nextErrors.travelers = t(
        'Please specify at least 1 traveler.',
        'براہ کرم کم از کم 1 مسافر درج کریں۔'
      );
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const code = `AH-${Math.floor(100000 + Math.random() * 900000)}`;
    const safeFullName = fullName.trim().slice(0, 120);
    const safeWhatsapp = whatsapp.trim().slice(0, 40);
    const safeEmail = email.trim().slice(0, 160);
    const safeTravelers = String(travelers).slice(0, 10);
    const safeTravelType = ['Umrah', 'Family Tour', 'Group Tour', 'Other'].includes(travelType)
      ? travelType
      : 'Umrah';
    const safePreferredDate = (preferredDate || 'Flexible Dates').slice(0, 60);
    const safeMessage = message.trim().slice(0, 1500);

    const newInquiry: StoredInquiry = {
      id: code,
      fullName: safeFullName,
      whatsapp: safeWhatsapp,
      email: safeEmail,
      travelers: safeTravelers,
      travelType: safeTravelType,
      preferredDate: safePreferredDate,
      message: safeMessage,
      status: 'new',
      adminNotes: '',
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem('al_haram_inquiries') || '[]'
      );
      localStorage.setItem(
        'al_haram_inquiries',
        JSON.stringify([newInquiry, ...existing])
      );
    } catch {
      // Ignore storage error
    }

    try {
      await setDoc(doc(db, 'inquiries', code), {
        referenceCode: code,
        fullName: safeFullName,
        whatsapp: safeWhatsapp,
        email: safeEmail,
        travelers: safeTravelers,
        travelType: safeTravelType,
        preferredDate: safePreferredDate,
        message: safeMessage,
        status: 'new',
        adminNotes: '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.CREATE, `inquiries/${code}`);
      } catch {
        // Fallback already stored locally
      }
    }

    setReferenceCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setWhatsapp('');
    setEmail('');
    setTravelers('2');
    setPreferredDate('');
    setMessage('');
    setErrors({});
  };

  return (
    <div
      className={`rounded-3xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/12 shadow-[0_20px_50px_-15px_rgba(15,15,15,0.12)] overflow-hidden ${
        compact ? 'p-6 sm:p-8' : 'p-6 sm:p-10 lg:p-12'
      }`}
    >
      <div className="max-w-2xl mb-8">
        <p className="text-xs font-extrabold tracking-[0.2em] text-[#0B92D6] uppercase mb-2">
          {t('Al Harm Travels & Tours · Gujranwala', 'الحرم ٹریولز اینڈ ٹورز · گوجرانوالہ')}
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F0F0F]">
          {displayHeading}
        </h2>
        <p className="text-sm sm:text-base font-semibold text-[#0F0F0F]/80 mt-2 leading-relaxed">
          {displaySubheading}
        </p>
      </div>

      {submitted ? (
        <div className="rounded-2xl bg-[#FFF9EB] border-2 border-[#EEA012] p-8 text-center space-y-5">
          <div className="flex justify-center">
            <SquircleIcon variant="dark" size="lg">
              <CheckCircle2 className="w-6 h-6 text-[#EEA012]" />
            </SquircleIcon>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B92D6]">
              {t('Inquiry Reference', 'درخواست کا حوالہ نمبر')} ·{' '}
              <span className="tabular-nums">{referenceCode}</span>
            </p>
            <h3 className="font-display text-2xl font-extrabold text-[#0F0F0F]">
              {t(
                'Thank you. Our travel team will contact you shortly.',
                'شکریہ! ہماری ٹریول ٹیم جلد ہی آپ سے رابطہ کرے گی۔'
              )}
            </h3>
            <p className="text-sm font-semibold text-[#0F0F0F]/85 max-w-md mx-auto leading-relaxed">
              {t(
                `We have received your request for ${travelType} (${travelers} ${
                  Number(travelers) === 1 ? 'Traveler' : 'Travelers'
                }). A dedicated representative from Al Harm Travels & Tours will reach out to you via WhatsApp at `,
                `ہمیں ${travelType} (${travelers} مسافر) کے لیے آپ کی درخواست موصول ہو گئی ہے۔ الحرم ٹریولز اینڈ ٹورز کا نمائندہ آپ کے واٹس ایپ نمبر پر رابطہ کرے گا: `
              )}
              <span className="font-mono tabular-nums font-bold text-[#0B92D6]">{whatsapp}</span>
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F0F0F] text-[#EEA012] text-xs font-extrabold hover:bg-[#0B92D6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('Submit Another Inquiry', 'ایک اور درخواست بھیجیں')}</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="inquiry-name"
                className="flex items-center gap-2.5 text-xs font-extrabold text-[#0F0F0F] mb-2"
              >
                <SquircleIcon variant="light" size="sm">
                  <User className="w-4 h-4 text-[#0F0F0F]" />
                </SquircleIcon>
                <span>{t('Full Name *', 'پورا نام *')}</span>
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t('Enter your full name', 'اپنا پورا نام لکھیں')}
                className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-4 py-3 text-sm font-bold text-[#0F0F0F] placeholder:text-[#0F0F0F]/40 focus:outline-none focus:border-[#EEA012] transition-colors"
              />
              {errors.fullName && (
                <p className="text-xs font-bold text-red-700 mt-1.5">{errors.fullName}</p>
              )}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label
                htmlFor="inquiry-whatsapp"
                className="flex items-center gap-2.5 text-xs font-extrabold text-[#0F0F0F] mb-2"
              >
                <SquircleIcon variant="light" size="sm">
                  <Phone className="w-4 h-4 text-[#0B92D6]" />
                </SquircleIcon>
                <span>{t('WhatsApp Number *', 'واٹس ایپ نمبر *')}</span>
              </label>
              <input
                id="inquiry-whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="e.g. +92 300 0000000"
                className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-4 py-3 text-sm font-mono font-bold tabular-nums text-[#0F0F0F] placeholder:font-sans placeholder:text-[#0F0F0F]/40 focus:outline-none focus:border-[#EEA012] transition-colors"
              />
              {errors.whatsapp && (
                <p className="text-xs font-bold text-red-700 mt-1.5">{errors.whatsapp}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="inquiry-email"
                className="flex items-center gap-2.5 text-xs font-extrabold text-[#0F0F0F] mb-2"
              >
                <SquircleIcon variant="light" size="sm">
                  <Mail className="w-4 h-4 text-[#EEA012]" />
                </SquircleIcon>
                <span>{t('Email Address', 'ای میل ایڈریس')}</span>
              </label>
              <input
                id="inquiry-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@example.com"
                className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-4 py-3 text-sm font-bold text-[#0F0F0F] placeholder:text-[#0F0F0F]/40 focus:outline-none focus:border-[#EEA012] transition-colors"
              />
              {errors.email && (
                <p className="text-xs font-bold text-red-700 mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* Number of Travelers */}
            <div>
              <label
                htmlFor="inquiry-travelers"
                className="flex items-center gap-2.5 text-xs font-extrabold text-[#0F0F0F] mb-2"
              >
                <SquircleIcon variant="light" size="sm">
                  <Users className="w-4 h-4 text-[#0B92D6]" />
                </SquircleIcon>
                <span>{t('Number of Travelers *', 'مسافروں کی تعداد *')}</span>
              </label>
              <input
                id="inquiry-travelers"
                type="number"
                min={1}
                max={100}
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-4 py-3 text-sm font-mono font-bold tabular-nums text-[#0F0F0F] focus:outline-none focus:border-[#EEA012] transition-colors"
              />
              {errors.travelers && (
                <p className="text-xs font-bold text-red-700 mt-1.5">{errors.travelers}</p>
              )}
            </div>

            {/* Travel Type */}
            <div>
              <label
                htmlFor="inquiry-type"
                className="flex items-center gap-2.5 text-xs font-extrabold text-[#0F0F0F] mb-2"
              >
                <SquircleIcon variant="light" size="sm">
                  <Compass className="w-4 h-4 text-[#EEA012]" />
                </SquircleIcon>
                <span>{t('Travel Type *', 'سفر کی قسم *')}</span>
              </label>
              <select
                id="inquiry-type"
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-4 py-3 text-sm font-bold text-[#0F0F0F] focus:outline-none focus:border-[#EEA012] transition-colors"
              >
                <option value="Umrah">{t('Umrah', 'عمرہ')}</option>
                <option value="Family Tour">{t('Family Tour', 'فیملی ٹور')}</option>
                <option value="Group Tour">{t('Group Tour', 'گروپ ٹور')}</option>
                <option value="Other">{t('Other', 'دیگر')}</option>
              </select>
            </div>

            {/* Preferred Travel Date */}
            <div>
              <label
                htmlFor="inquiry-date"
                className="flex items-center gap-2.5 text-xs font-extrabold text-[#0F0F0F] mb-2"
              >
                <SquircleIcon variant="light" size="sm">
                  <Calendar className="w-4 h-4 text-[#0B92D6]" />
                </SquircleIcon>
                <span>{t('Preferred Travel Date', 'پسندیدہ تاریخِ سفر')}</span>
              </label>
              <input
                id="inquiry-date"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-4 py-3 text-sm font-mono font-bold tabular-nums text-[#0F0F0F] focus:outline-none focus:border-[#EEA012] transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="inquiry-message"
              className="flex items-center gap-2.5 text-xs font-extrabold text-[#0F0F0F] mb-2"
            >
              <SquircleIcon variant="light" size="sm">
                <MessageSquare className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span>{t('Message / Specific Preferences', 'پیغام / خصوصی ترجیحات')}</span>
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t(
                'Tell us about your preferred Makkah & Madinah stay duration, hotel proximity, wheelchair assistance, or flight preferences...',
                'اپنے مکہ مکرمہ اور مدینہ منورہ میں قیام کے دورانیے، ہوٹل کی قربت، وہیل چیئر کی سہولت یا فلائٹ کی ترجیحات کے بارے میں بتائیں...'
              )}
              className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 p-4 text-sm font-bold text-[#0F0F0F] placeholder:text-[#0F0F0F]/40 focus:outline-none focus:border-[#EEA012] transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-xs font-bold text-[#0F0F0F]/75">
              {t(
                'Direct consultation with Al Harm Travels & Tours · No obligation quote.',
                'الحرم ٹریولز اینڈ ٹورز کے ساتھ براہِ راست مشاورت · بغیر کسی اضافی فیس کے۔'
              )}
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#EEA012] hover:bg-[#0F0F0F] text-[#0F0F0F] hover:text-[#EEA012] text-sm font-extrabold shadow-[0_10px_25px_-5px_rgba(238,160,18,0.45)] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>{t('SEND INQUIRY', 'درخواست بھیجیں')}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
