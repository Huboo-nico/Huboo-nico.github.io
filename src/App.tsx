import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhasesFlow } from './components/PhasesFlow';
import { IntegrationsSection } from './components/IntegrationsSection';
import { Calculator } from './components/Calculator';
import { TrackingDemo } from './components/TrackingDemo';
import { PartnerProfile } from './components/PartnerProfile';
import { CaseStudies } from './components/CaseStudies';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('huboo_lang');
    return saved === 'en' ? 'en' : 'es';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState<{
    orders?: number;
    storage?: string;
    dest?: string;
  } | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem('huboo_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const handleOpenQuoteWithData = (data: { orders: number; storage: string; dest: string }) => {
    setQuoteInitialData(data);
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteEmpty = () => {
    setQuoteInitialData(undefined);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fdf8f9] text-[#1c1b1c] font-sans antialiased selection:bg-[#6b4cbb] selection:text-white">
      {/* Top Header */}
      <Header
        currentLang={lang}
        onToggleLang={toggleLanguage}
        onOpenQuoteModal={handleOpenQuoteEmpty}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero currentLang={lang} onOpenQuoteModal={handleOpenQuoteEmpty} />

        {/* 4 Core Fulfillment Steps */}
        <PhasesFlow currentLang={lang} />

        {/* Omnichannel Integrations Ecosystem */}
        <IntegrationsSection currentLang={lang} onOpenQuoteModal={handleOpenQuoteEmpty} />

        {/* Interactive Savings & Fulfillment Calculator */}
        <Calculator currentLang={lang} onOpenQuoteWithData={handleOpenQuoteWithData} />

        {/* Live Milestone Tracking Simulator */}
        <TrackingDemo currentLang={lang} />

        {/* Dedicated Partner Spotlight: Nicolas Coronel */}
        <PartnerProfile currentLang={lang} />

        {/* Proven Proof & Success Stories */}
        <CaseStudies currentLang={lang} />

        {/* High Conversion Bottom CTA */}
        <CtaBanner currentLang={lang} />
      </main>

      {/* Footer */}
      <Footer currentLang={lang} />

      {/* Floating Interactive WhatsApp Concierge */}
      <WhatsAppWidget />

      {/* Interactive Quotation & Meeting Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentLang={lang}
        initialData={quoteInitialData}
      />
    </div>
  );
};

export default App;
