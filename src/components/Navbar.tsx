import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MapPin,
  Globe,
} from 'lucide-react';
import { PageId } from '../data/siteData';
import { SquircleIcon } from './SquircleIcon';
import { OfficialBrandLogo } from './OfficialBrandLogo';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  hasHeroBackdrop: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  hasHeroBackdrop,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isTransparent = hasHeroBackdrop && !scrolled && !mobileMenuOpen;

  const primaryLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t('Home', 'ہوم') },
    { id: 'about', label: t('About', 'ہمارے بارے میں') },
    { id: 'umrah', label: t('Umrah', 'عمرہ') },
    { id: 'tours', label: t('Tours', 'ٹورز') },
    { id: 'services', label: t('Services', 'خدمات') },
  ];

  const moreLinks: { id: PageId; label: string }[] = [
    { id: 'why-choose-us', label: t('Why Choose Us', 'ہمیں کیوں منتخب کریں') },
    { id: 'gallery', label: t('Gallery', 'گیلری') },
    { id: 'reviews', label: t('Reviews', 'آراء') },
    { id: 'contact', label: t('Contact', 'رابطہ') },
  ];

  const allMobileLinks: { id: PageId; label: string }[] = [
    ...primaryLinks,
    ...moreLinks,
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isTransparent
          ? 'bg-gradient-to-b from-[#0F0F0F]/90 via-[#0F0F0F]/55 to-transparent border-b border-[#FFFFFF]/15 py-4'
          : 'bg-[#FFFFFF]/95 backdrop-blur-md border-b-2 border-[#EEA012]/35 shadow-[0_6px_24px_-6px_rgba(15,15,15,0.1)] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Zone 1: Official Brand Logo + Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className={`flex items-center gap-3 font-display text-base sm:text-lg font-extrabold tracking-tight text-left transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EEA012] ${
            isTransparent ? 'text-[#FFFFFF]' : 'text-[#0F0F0F]'
          }`}
        >
          <span className="w-11 h-11 rounded-[14px] bg-[#FFFFFF] border-2 border-[#EEA012] shadow-sm flex items-center justify-center p-1 shrink-0">
            <OfficialBrandLogo
              className="w-full h-full"
              showWordmark={false}
            />
          </span>
          <span>{t('AL HARM TRAVELS & TOURS', 'الحرم ٹریولز اینڈ ٹورز')}</span>
        </button>

        {/* Zone 2: Primary Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-6"
        >
          {primaryLinks.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                className={`relative py-1 text-sm font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isTransparent
                    ? isActive
                      ? 'text-[#EEA012]'
                      : 'text-[#FFFFFF] hover:text-[#EEA012]'
                    : isActive
                    ? 'text-[#0F0F0F]'
                    : 'text-[#0F0F0F]/80 hover:text-[#0B92D6]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isTransparent
                        ? 'bg-[#EEA012]'
                        : 'bg-gradient-to-r from-[#EEA012] to-[#0B92D6]'
                    }`}
                  />
                )}
              </button>
            );
          })}

          {moreLinks.slice(0, 3).map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                className={`hidden xl:inline-flex relative py-1 text-sm font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isTransparent
                    ? isActive
                      ? 'text-[#EEA012]'
                      : 'text-[#FFFFFF] hover:text-[#EEA012]'
                    : isActive
                    ? 'text-[#0F0F0F]'
                    : 'text-[#0F0F0F]/80 hover:text-[#0B92D6]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isTransparent
                        ? 'bg-[#EEA012]'
                        : 'bg-gradient-to-r from-[#EEA012] to-[#0B92D6]'
                    }`}
                  />
                )}
              </button>
            );
          })}

          {/* Dropdown for Explore */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setMoreMenuOpen((prev) => !prev)}
              aria-expanded={moreMenuOpen}
              className={`inline-flex items-center gap-1.5 py-1 text-sm font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                isTransparent
                  ? 'text-[#FFFFFF] hover:text-[#EEA012]'
                  : 'text-[#0F0F0F]/80 hover:text-[#0B92D6]'
              }`}
            >
              <span>{t('Explore', 'مزید')}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  moreMenuOpen ? 'rotate-180 text-[#EEA012]' : ''
                }`}
              />
            </button>

            {moreMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10 shadow-2xl p-2 z-50">
                {moreLinks.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleLinkClick(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-bold transition-colors whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#0F0F0F] text-[#EEA012]'
                          : 'text-[#0F0F0F] hover:bg-[#EEA012]/15 hover:text-[#0F0F0F]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0B92D6]" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Language Switcher, Primary Action CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Segmented EN / UR Language Switcher */}
          <div
            role="group"
            aria-label="Language switcher"
            className={`inline-flex items-center rounded-xl p-1 border-2 transition-colors ${
              isTransparent
                ? 'bg-[#0F0F0F]/70 border-[#EEA012]/60 text-[#FFFFFF]'
                : 'bg-[#FFF9EB] border-[#EEA012]/60 text-[#0F0F0F]'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-[#0B92D6] mx-1.5 hidden sm:block shrink-0" />
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#EEA012] text-[#0F0F0F] shadow-sm'
                  : isTransparent
                  ? 'text-[#FFFFFF]/80 hover:text-[#EEA012]'
                  : 'text-[#0F0F0F]/75 hover:text-[#0B92D6]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ur')}
              aria-pressed={language === 'ur'}
              className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                language === 'ur'
                  ? 'bg-[#EEA012] text-[#0F0F0F] shadow-sm'
                  : isTransparent
                  ? 'text-[#FFFFFF]/80 hover:text-[#EEA012]'
                  : 'text-[#0F0F0F]/75 hover:text-[#0B92D6]'
              }`}
            >
              اردو
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('book')}
            className={`hidden sm:inline-flex px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
              isTransparent
                ? 'bg-[#EEA012] text-[#0F0F0F] hover:bg-[#E8C377] shadow-[0_8px_22px_-4px_rgba(238,160,18,0.5)]'
                : 'bg-[#0F0F0F] text-[#EEA012] hover:bg-[#0B92D6] hover:text-[#FFFFFF] border border-[#EEA012]/50 shadow-[0_8px_20px_-4px_rgba(15,15,15,0.28)]'
            }`}
          >
            {t('Book Your Journey', 'اپنا سفر بک کریں')}
          </button>

          {/* Mobile Hamburger Trigger inside Squircle Container */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden focus-visible:outline-2 focus-visible:outline-[#EEA012]"
          >
            <SquircleIcon
              variant={isTransparent ? 'glass' : 'light'}
              size="sm"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </SquircleIcon>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b-2 border-[#EEA012] px-4 pt-3 pb-6 shadow-2xl max-h-[82vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1">
            {allMobileLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-[#0F0F0F] text-[#EEA012]'
                      : 'text-[#0F0F0F] hover:bg-[#EEA012]/15'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#0B92D6]" />
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleLinkClick('book')}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#EEA012] text-[#0F0F0F] text-sm font-extrabold"
            >
              <span>{t('Book Your Journey', 'اپنا سفر بک کریں')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-5 pt-4 border-t border-[#0F0F0F]/10 space-y-3 px-2">
            <div className="flex items-center justify-between text-xs text-[#0F0F0F]">
              <a
                href="https://maps.app.goo.gl/gYJr1yp4XncCRaAf6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
              >
                <SquircleIcon variant="gold" size="sm">
                  <MapPin className="w-4 h-4 text-[#0F0F0F]" />
                </SquircleIcon>
                <div>
                  <p className="font-extrabold text-[#0F0F0F] group-hover:text-[#0B92D6] underline decoration-[#EEA012]">
                    {t('Gujranwala, Pakistan (Open Map)', 'گوجرانوالہ، پاکستان (نقشہ کھولیں)')}
                  </p>
                  <p className="text-[11px] font-bold text-[#0B92D6]">
                    {t('CEO Sajid Kahloon · Chairman Travel & Tour', 'سی ای او ساجد کہلوں · چیئرمین ٹریول اینڈ ٹور')}
                  </p>
                </div>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-extrabold text-[#0F0F0F]">
              <a
                href="https://wa.me/923217455558"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-[#FFF9EB] border border-[#EEA012] hover:bg-[#EEA012]"
              >
                0321-7455558
              </a>
              <a
                href="https://wa.me/923267455558"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-[#FFF9EB] border border-[#EEA012] hover:bg-[#EEA012]"
              >
                0326-7455558
              </a>
              <a
                href="https://wa.me/923337455558"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-[#FFF9EB] border border-[#EEA012] hover:bg-[#EEA012]"
              >
                0333-7455558
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

