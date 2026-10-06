import React, { useState, useEffect } from 'react';
import { PageId, UmrahPackage } from './data/siteData';
import { WelcomeOverlay } from './components/WelcomeOverlay';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PackageDetailModal } from './components/PackageDetailModal';
import { LegalModal } from './components/LegalModal';
import { InquiryPreset } from './components/InquiryFormSection';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { UmrahPage } from './pages/UmrahPage';
import { ToursPage } from './pages/ToursPage';
import { ServicesPage } from './pages/ServicesPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { BookPage } from './pages/BookPage';
import { AdminPortalPage } from './pages/AdminPortalPage';

const PAGE_TITLES: Record<PageId, string> = {
  home: 'Al Haram Travels & Tours — Premium Umrah & Travel Services | Gujranwala',
  about: 'About Us & Leadership | Al Haram Travels & Tours Gujranwala',
  umrah: 'Customized Umrah Packages | Al Haram Travels & Tours Gujranwala',
  tours: 'International, Family & Group Tours | Al Haram Travels & Tours',
  services: 'Umrah Visa, Flight, Hotel & Ziyarat Services | Al Haram Travels',
  'why-choose-us': 'Why Choose Al Haram Travels & Tours | Trusted Leadership',
  gallery: 'Makkah, Madinah & Umrah Gallery | Al Haram Travels & Tours',
  reviews: 'Client Reviews & Testimonials | Al Haram Travels & Tours',
  contact: 'Contact Our Gujranwala Office | Al Haram Travels & Tours',
  book: 'Book Your Journey & Request Availability | Al Haram Travels & Tours',
  admin: 'Executive Admin Portal | Al Haram Travels & Tours',
};

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedPackage, setSelectedPackage] = useState<UmrahPackage | null>(
    null
  );
  const [inquiryPreset, setInquiryPreset] = useState<InquiryPreset | null>(null);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Sync URL hash and document title for clean multi-page navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash && Object.keys(PAGE_TITLES).includes(hash)) {
        setCurrentPage(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    try {
      window.history.pushState(null, '', `#${page}`);
    } catch {
      // Ignore in sandboxed history contexts
    }
  };

  const handleInquireWithPreset = (preset: InquiryPreset) => {
    setInquiryPreset(preset);
    setSelectedPackage(null);
    handleNavigate('book');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onInquireWithPreset={handleInquireWithPreset}
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'umrah':
        return (
          <UmrahPage
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onInquireWithPreset={handleInquireWithPreset}
          />
        );
      case 'tours':
        return <ToursPage onInquireWithPreset={handleInquireWithPreset} />;
      case 'services':
        return <ServicesPage onInquireWithPreset={handleInquireWithPreset} />;
      case 'why-choose-us':
        return <WhyChooseUsPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'contact':
        return <ContactPage />;
      case 'book':
        return <BookPage preset={inquiryPreset} />;
      case 'admin':
        return <AdminPortalPage onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onInquireWithPreset={handleInquireWithPreset}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0F0F0F] font-semibold">
      <ScrollProgressBar />

      {showWelcome && (
        <WelcomeOverlay onComplete={() => setShowWelcome(false)} />
      )}

      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        hasHeroBackdrop={currentPage === 'home'}
      />

      <main className="flex-1">{renderPage()}</main>

      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={(type) => setLegalModal(type)}
        onReplayIntro={() => setShowWelcome(true)}
      />

      <WhatsAppButton onNavigate={handleNavigate} />

      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookPackage={(pkg) =>
          handleInquireWithPreset({
            travelType: 'Umrah',
            packageName: pkg.name,
          })
        }
      />

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  );
}
