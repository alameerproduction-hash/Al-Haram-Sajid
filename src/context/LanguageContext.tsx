import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UMRAH_PACKAGES,
  UMRAH_SERVICES,
  TOUR_CATEGORIES,
  GALLERY_ITEMS,
  CONTACT_NUMBERS,
  UmrahPackage,
  ServiceItem,
  TourCategory,
  GalleryItem,
  ContactNumber,
} from '../data/siteData';

export type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: (en: string, ur: string) => string;
  getPackages: (basePackages: UmrahPackage[]) => UmrahPackage[];
  getServices: () => ServiceItem[];
  getTourCategories: () => TourCategory[];
  getGalleryItems: () => GalleryItem[];
  getContactNumbers: () => ContactNumber[];
}

const URDU_PACKAGES: Record<string, Partial<UmrahPackage>> = {
  'executive-customized': {
    name: 'کسٹمائزڈ پیکج — ایگزیکٹو قربتِ حرم',
    subtitle: 'انفرادی اور جوڑوں کے لیے خصوصی عمرہ پلان',
    duration: 'لچکدار دورانیہ (7، 10، 14 یا 21 دن)',
    makkahStay: 'مسجد الحرام کے قریب کسٹمائزڈ قیام',
    madinahStay: 'مسجد نبوی ﷺ کے قریب کسٹمائزڈ قیام',
    hotelCategory: 'کسٹمائزڈ سلیکشن (پریمیم / 5 اسٹار / سوئٹس دستیاب)',
    transport: 'پرائیویٹ ایگزیکٹو ٹرانسپورٹ (جدہ · مکہ مکرمہ · مدینہ منورہ)',
    guidance: 'مکمل مرحلہ وار عمرہ اور زیارات کی رہنمائی',
    support: '24/7 ذاتی ٹریول کوآرڈینیٹر اور گراؤنڈ سپورٹ',
    flightInfo: 'پاکستان سے ڈائریکٹ یا پسندیدہ ایئر لائن راؤٹنگ',
    availabilityNote: 'موجودہ دستیابی اور قیمتوں کے لیے ہم سے رابطہ کریں۔',
    highlights: [
      'مکمل عمرہ ویزا پروسیسنگ اور دستاویزات کی تیاری',
      'آپ کی پسندیدہ تاریخوں کے مطابق تیار کردہ سفری شیڈول',
      'مکہ مکرمہ اور مدینہ منورہ کی زیارات کے لیے پرائیویٹ ایئر کنڈیشنڈ گاڑی',
      'روانگی کے ہوائی اڈوں اور ایئر لائن کا لچکدار انتخاب',
    ],
  },
  'family-customized': {
    name: 'کسٹمائزڈ پیکج — فیملی کمفرٹ',
    subtitle: 'فیملیز اور بزرگ عازمین کے لیے خصوصی انتظامات',
    duration: 'فیملی کے شیڈول کے مطابق کسٹمائزڈ دورانیہ',
    makkahStay: 'حرم شریف تک آسان رسائی کے ساتھ کشادہ فیملی رومز',
    madinahStay: 'مرکزیہ کے قریب آرام دہ فیملی رہائش',
    hotelCategory: 'فیملی کی پسند کے مطابق کسٹمائزڈ ہوٹل کیٹیگری',
    transport: 'آرام دہ پرائیویٹ فیملی وین / ایس یو وی ٹرانسفرز',
    guidance: 'فیملی کی سہولت کے مطابق زیارات اور مناسک کی رہنمائی',
    support: 'روانگی سے قبل خصوصی بریفنگ اور مسلسل دیکھ بھال',
    flightInfo: 'فیملی سیٹنگ کوآرڈینیشن اور مناسب فلائٹ اوقات',
    availabilityNote: 'موجودہ دستیابی اور قیمتوں کے لیے ہم سے رابطہ کریں۔',
    highlights: [
      'درخواست پر وہیل چیئر اور بزرگوں کے لیے آسان سفری انتظامات',
      'انٹر کنیکٹڈ یا ملٹی بیڈ فیملی رومز کی سہولت',
      'مکہ مکرمہ اور مدینہ منورہ میں تاریخی اسلامی مقامات کی زیارات',
      'گوجرانوالہ سے روانگی سے لے کر واپسی تک بھرپور معاونت',
    ],
  },
  'group-customized': {
    name: 'کسٹمائزڈ پیکج — منظم گروپ عمرہ',
    subtitle: 'گروپ کوآرڈینیشن کے ساتھ منظم روحانی سفر',
    duration: 'شیڈولڈ اور کسٹم گروپ روانگی (14 / 15 / 21 دن)',
    makkahStay: 'مکہ مکرمہ میں منظم گروپ رہائش',
    madinahStay: 'مدینہ منورہ میں منظم گروپ رہائش',
    hotelCategory: 'کسٹمائزڈ گروپ ہوٹل کیٹیگریز (ایکانومی پلس سے پریمیم تک)',
    transport: 'جدید ایئر کنڈیشنڈ لگژری گروپ کوچز',
    guidance: 'تجربہ کار گروپ کوآرڈینیشن اور زیارات کے انتظامات',
    support: 'سفر سے پہلے اور پورے سفر کے دوران مکمل ٹیم سپورٹ',
    flightInfo: 'گروپ ایئر لائن ٹکٹنگ اور سامان کی کوآرڈینیشن',
    availabilityNote: 'موجودہ دستیابی اور قیمتوں کے لیے ہم سے رابطہ کریں۔',
    highlights: [
      'ویزا، فلائٹ اور ہوٹل چیک ان کا مربوط انتظام',
      'گوجرانوالہ میں روانگی سے قبل جامع تربیتی سیشن',
      'حرمین شریفین کے مقدس مقامات کی مکمل زیارات',
      'شفاف معلومات اور قابلِ اعتماد گروپ شیڈولنگ',
    ],
  },
};

const URDU_SERVICES: Record<string, Partial<ServiceItem>> = {
  visa: {
    title: 'عمرہ ویزا اسسٹنس',
    description: 'ویزا کے پورے مرحلے میں پیشہ ورانہ رہنمائی۔',
    details: 'مکمل دستاویزات کی تصدیق، درخواست کی جمع آوری اور ہر مرحلے پر شفاف اپ ڈیٹس کے ساتھ بروقت ویزا پروسیسنگ۔',
  },
  flights: {
    title: 'فلائٹ بکنگ',
    description: 'سفری منصوبہ بندی اور ایئر لائن ٹکٹنگ۔',
    details: 'آپ کے سفری شیڈول کے مطابق بہترین روٹس، پسندیدہ ایئر لائنز اور منظم روانگی کے اوقات۔',
  },
  hotels: {
    title: 'ہوٹل رہائش',
    description: 'مکہ مکرمہ اور مدینہ منورہ میں بہترین رہائش۔',
    details: 'آپ کے آرام، فیملی کے افراد اور حرمین شریفین سے قربت کی ترجیحات کے مطابق بہترین ہوٹلوں کا انتظام۔',
  },
  transport: {
    title: 'ٹرانسپورٹیشن',
    description: 'آرام دہ اور محفوظ سفری سہولیات۔',
    details: 'ایئرپورٹ پک اینڈ ڈراپ، مکہ مکرمہ اور مدینہ منورہ کے درمیان سفر اور جدید گاڑیوں میں مقامی ٹرانسپورٹ۔',
  },
  ziyarat: {
    title: 'زیارات',
    description: 'مقدس اسلامی مقامات کی زیارت اور رہنمائی۔',
    details: 'مکہ مکرمہ اور مدینہ منورہ کے مقدس اور تاریخی اسلامی مقامات کی باادب اور منظم زیارات۔',
  },
  assistance: {
    title: 'ٹریول اسسٹنس',
    description: 'سفر سے پہلے اور دورانِ سفر مسلسل معاونت۔',
    details: 'روانگی سے قبل رہنمائی، سفری چیک لسٹ اور دورانِ سفر فوری مدد تاکہ آپ یکسوئی سے عبادت کر سکیں۔',
  },
  'family-umrah': {
    title: 'فیملی عمرہ پلاننگ',
    description: 'فیملیز کے لیے خصوصی اور آرام دہ انتظامات۔',
    details: 'بچوں، بزرگوں اور فیملی کی پرائیویسی کو مدِنظر رکھتے ہوئے پرائیویٹ ٹرانسفرز کے ساتھ خصوصی پلان۔',
  },
  'group-umrah': {
    title: 'گروپ عمرہ',
    description: 'پیشہ ورانہ گروپ ٹریول کوآرڈینیشن۔',
    details: 'منظم گروپ روانگی، مربوط انتظامات اور روحانی ماحول میں بااعتماد سفر۔',
  },
};

const URDU_TOUR_CATEGORIES: Record<string, Partial<TourCategory>> = {
  'international-tours': {
    title: 'بین الاقوامی ٹورز',
    category: 'عالمی سیاحتی مقامات',
    description: 'مشرقِ وسطیٰ، ترکی، ملائیشیا اور دیگر ممالک کے لیے مکمل سفری منصوبہ بندی کے ساتھ بہترین انٹرنیشنل ٹورز۔',
    features: ['ملٹی سٹی راؤٹنگ', 'مکمل ویزا اور فلائٹ کوآرڈینیشن', 'معیاری ہوٹلوں کا انتخاب'],
  },
  'family-tours': {
    title: 'فیملی ٹورز',
    category: 'پرائیویٹ اور آرام دہ',
    description: 'آرام، تحفظ اور یادگار لمحات کے لیے تیار کردہ فیملی فرینڈلی تفریحی اور سیاحتی پلانز۔',
    features: ['لچکدار روزانہ شیڈول', 'فیملی سوئٹ بکنگ', 'پرائیویٹ ایئرپورٹ اور سیر و تفریح ٹرانسفرز'],
  },
  'group-tours': {
    title: 'گروپ ٹورز',
    category: 'منظم گروپ روانگی',
    description: 'کارپوریٹ وفود، کمیونٹی تنظیموں اور بڑی فیملیز کے لیے پیشہ ورانہ طور پر منظم گروپ ٹریول۔',
    features: ['خصوصی گروپ لاجسٹکس', 'مربوط ٹکٹنگ اور قیام', 'واضح اور شفاف رابطہ'],
  },
  'hotel-booking': {
    title: 'ہوٹل بکنگ',
    category: 'مہمان نوازی',
    description: 'سعودی عرب اور بین الاقوامی مقامات پر آپ کی پسند کے مطابق قابلِ اعتماد ہوٹل ریزرویشن۔',
    features: ['تصدیق شدہ رہائشی آپشنز', 'فیملی اور ایگزیکٹو رومز', 'آسان چیک ان دستاویزات'],
  },
  'flight-booking': {
    title: 'فلائٹ بکنگ',
    category: 'فضائی سفر',
    description: 'ملکی اور بین الاقوامی سفر کے لیے پیشہ ورانہ ایئر لائن ٹکٹنگ اور روٹ پلاننگ۔',
    features: ['بہترین ٹرانزٹ کنکشنز', 'گروپ اور فیملی سیٹ کوآرڈینیشن', 'تاریخ کی تبدیلی اور شیڈول سپورٹ'],
  },
  'visa-assistance': {
    title: 'ویزا اسسٹنس',
    category: 'دستاویزات',
    description: 'عمرہ اور بین الاقوامی سیاحتی مقامات کے لیے منظم ویزا فائل کی تیاری اور درخواست کی رہنمائی۔',
    features: ['ڈاکومنٹ چیک لسٹ کا جائزہ', 'درخواست فارم کی تیاری', 'بروقت اسٹیٹس اپ ڈیٹس'],
  },
  transportation: {
    title: 'ٹرانسپورٹیشن',
    category: 'گراؤنڈ لاجسٹکس',
    description: 'آرام دہ زمینی سفر کے لیے ایئرپورٹ ٹرانسفرز، انٹر سٹی گاڑیاں اور پرائیویٹ ڈرائیورز۔',
    features: ['پرائیویٹ سیڈان، ایس یو وی اور وینز', 'لگژری گروپ کوچز', 'ایئرپورٹ پر بروقت استقبال'],
  },
  'customized-plans': {
    title: 'کسٹمائزڈ ٹریول پلانز',
    category: 'حسبِ منشا سفر',
    description: 'عمرہ کے ساتھ بین الاقوامی اسٹاپ اوورز یا آپ کے ذاتی شیڈول کے مطابق تیار کردہ سفری پلانز۔',
    features: ['100% آپ کی پسندیدہ تاریخیں', 'بجٹ اور آرام کے مطابق انتخاب', 'ون آن ون سفری مشاورت'],
  },
};

const URDU_GALLERY: Record<string, Partial<GalleryItem>> = {
  'gal-1': {
    title: 'مسجد الحرام کا روح پرور منظر',
    caption: 'مکہ مکرمہ میں خانہ کعبہ اور مطاف پر شام کی پرسکون روشنی۔',
    location: 'مکہ مکرمہ',
  },
  'gal-2': {
    title: 'مسجد نبوی ﷺ کا صحن',
    caption: 'مدینہ منورہ میں روضۂ رسول ﷺ اور مسجد نبوی کا دلکش منظر۔',
    location: 'مدینہ منورہ',
  },
  'gal-3': {
    title: 'اسلامی طرزِ تعمیر اور روحانی سکون',
    caption: 'حرم شریف کے دلکش محراب اور روحانی ماحول۔',
    location: 'مسجد الحرام',
  },
  'gal-4': {
    title: 'ایگزیکٹو مہمان نوازی اور آرام',
    caption: 'آپ کے سفر کے دوران پرسکون قیام کے لیے بہترین رہائشی سہولیات۔',
    location: 'مکہ مکرمہ اور مدینہ منورہ',
  },
  'gal-5': {
    title: 'تاریخی عرب ورثہ اور نخلستان',
    caption: 'خطے کے تاریخی اور ثقافتی مقامات کی سیر۔',
    location: 'جزیرہ نما عرب',
  },
  'gal-6': {
    title: 'منظم عمرہ تیاری اور رہنمائی',
    caption: 'افراد، فیملیز اور گروپس کے ذہنی سکون کے لیے منظم سفری منصوبہ بندی۔',
    location: 'مکہ مکرمہ اور مدینہ منورہ',
  },
};

const URDU_CONTACT_LABELS: Record<string, string> = {
  '03217455558': 'پرائمری لائن اور واٹس ایپ',
  '03267455558': 'عمرہ اور ٹورز ڈیسک (کال اور واٹس ایپ)',
  '03337455558': 'ایگزیکٹو ڈیسک (کال اور واٹس ایپ)',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('al_harm_lang');
      return saved === 'ur' ? 'ur' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('al_harm_lang', lang);
    } catch {
      // Ignore storage error
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const isRTL = language === 'ur';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  const t = (en: string, ur: string) => (language === 'ur' ? ur : en);

  const getPackages = (basePackages: UmrahPackage[] = UMRAH_PACKAGES) => {
    if (language === 'en') return basePackages;
    return basePackages.map((pkg) => {
      const ur = URDU_PACKAGES[pkg.id];
      return ur ? { ...pkg, ...ur } : pkg;
    });
  };

  const getServices = () => {
    if (language === 'en') return UMRAH_SERVICES;
    return UMRAH_SERVICES.map((srv) => {
      const ur = URDU_SERVICES[srv.id];
      return ur ? { ...srv, ...ur } : srv;
    });
  };

  const getTourCategories = () => {
    if (language === 'en') return TOUR_CATEGORIES;
    return TOUR_CATEGORIES.map((cat) => {
      const ur = URDU_TOUR_CATEGORIES[cat.id];
      return ur ? { ...cat, ...ur } : cat;
    });
  };

  const getGalleryItems = () => {
    if (language === 'en') return GALLERY_ITEMS;
    return GALLERY_ITEMS.map((item) => {
      const ur = URDU_GALLERY[item.id];
      return ur ? { ...item, ...ur } : item;
    });
  };

  const getContactNumbers = () => {
    if (language === 'en') return CONTACT_NUMBERS;
    return CONTACT_NUMBERS.map((num) => ({
      ...num,
      label: URDU_CONTACT_LABELS[num.raw] || num.label,
    }));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRTL,
        t,
        getPackages,
        getServices,
        getTourCategories,
        getGalleryItems,
        getContactNumbers,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
