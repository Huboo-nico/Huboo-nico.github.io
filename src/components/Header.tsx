import React, { useState } from 'react';
import { Globe, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang].nav;

  const BOOKING_URL =
    'https://outlook.office.com/bookwithme/user/d6afa597286e4db3953054334ee721af@huboo.com/meetingtype/hEyaWmOHkUytX520BxtFuQ2?anonymous&ep=mLinkFromTile';

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#fdf8f9]/90 backdrop-blur-md border-b border-purple-100/60 shadow-[0_1px_12px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single element wordmark */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-[#6b4cbb] flex items-center justify-center text-white font-black text-xl shadow-md shadow-[#6b4cbb]/25 group-hover:scale-105 transition-transform">
            H
          </div>
          <span className="text-2xl font-black tracking-tight text-[#1c1b1c]">
            huboo<span className="text-[#6b4cbb]">.</span>
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-600">
          <a
            href="#soluciones"
            className="hover:text-[#5332a1] transition-colors py-1"
          >
            {t.solutions}
          </a>
          <a
            href="#integraciones"
            className="hover:text-[#5332a1] transition-colors py-1"
          >
            {t.integrations}
          </a>
          <a
            href="#calculadora"
            className="hover:text-[#5332a1] transition-colors py-1"
          >
            {t.calculator}
          </a>
          <a
            href="#tracking-demo"
            className="hover:text-[#5332a1] transition-colors py-1"
          >
            {t.tracking}
          </a>
          <a
            href="#casos-de-exito"
            className="hover:text-[#5332a1] transition-colors py-1"
          >
            {t.caseStudies}
          </a>
          <a
            href="#partner"
            className="hover:text-[#5332a1] transition-colors py-1 flex items-center gap-1.5"
          >
            <span>{t.partner}</span>
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          </a>
        </nav>

        {/* Zone 3: Actions + Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            title="Cambiar idioma / Switch language"
            aria-label="Cambiar idioma"
          >
            <Globe className="w-3.5 h-3.5 text-[#5332a1]" />
            <span className="uppercase">{currentLang === 'es' ? '🇪🇸 ES' : '🇬🇧 EN'}</span>
          </button>

          {/* Quick Quote Action */}
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-bold text-[#5332a1] bg-[#eee6f8] hover:bg-[#cfbdff] transition-all whitespace-nowrap"
          >
            {t.quote}
          </button>

          {/* Primary Meeting CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#6b4cbb] hover:bg-[#5332a1] shadow-md shadow-[#6b4cbb]/25 hover:scale-105 transition-all whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.bookCall}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdf8f9] border-b border-purple-100 px-6 py-5 space-y-3 shadow-lg">
          <a
            href="#soluciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-800 hover:text-[#5332a1] py-2"
          >
            {t.solutions}
          </a>
          <a
            href="#integraciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-800 hover:text-[#5332a1] py-2"
          >
            {t.integrations}
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-800 hover:text-[#5332a1] py-2"
          >
            {t.calculator}
          </a>
          <a
            href="#tracking-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-800 hover:text-[#5332a1] py-2"
          >
            {t.tracking}
          </a>
          <a
            href="#casos-de-exito"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-800 hover:text-[#5332a1] py-2"
          >
            {t.caseStudies}
          </a>
          <a
            href="#partner"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-800 hover:text-[#5332a1] py-2"
          >
            {t.partner}
          </a>
          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-center text-[#5332a1] bg-[#eee6f8]"
            >
              {t.quote}
            </button>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-center text-white bg-[#6b4cbb]"
            >
              {t.bookCall}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
