import React from 'react';
import { Calendar, ArrowDown, MessageCircle, Mail, ShieldCheck, Zap, RefreshCw } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { Language } from '../types';
import { translations } from '../data/translations';
import { LiveHubPreview } from './LiveHubPreview';

interface HeroProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenQuoteModal }) => {
  const t = translations[currentLang].hero;

  const BOOKING_URL =
    'https://outlook.office.com/bookwithme/user/d6afa597286e4db3953054334ee721af@huboo.com/meetingtype/hEyaWmOHkUytX520BxtFuQ2?anonymous&ep=mLinkFromTile';

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle ambient lavender glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6b4cbb]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200/80 text-[#493877] text-xs font-bold tracking-wide">
              <span>🇪🇸</span>
              <span className="uppercase text-[11px]">{t.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 leading-[1.08] text-balance">
              {t.headlineStart}
              <span className="text-[#6b4cbb]">{t.headlineAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed">
              <strong className="text-neutral-900 font-bold">Huboo</strong> {t.subtitleStart}
              <span className="text-[#5332a1] font-bold">{t.subtitleAccent}</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-[#6b4cbb] text-white text-sm font-bold shadow-xl shadow-[#6b4cbb]/30 hover:bg-[#5332a1] hover:scale-105 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.ctaPrimary}</span>
              </a>

              <a
                href="#calculadora"
                className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full bg-[#eee6f8] text-[#5332a1] hover:bg-[#cfbdff] text-sm font-bold transition-all"
              >
                <span>{t.ctaSecondary}</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Nicolas Direct Contact Strip */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-neutral-600 text-xs">
              <span className="font-bold text-neutral-400 uppercase tracking-wider">{t.directContact}</span>
              <a
                href="https://wa.me/34674355737?text=Hola%20Nicolas,%20quiero%20conocer%20mas%20sobre%20Huboo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-[#25D366]/15 hover:text-[#25D366] transition-colors font-semibold text-neutral-800"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:nicolas.coronel@huboo.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-[#6b4cbb]/15 hover:text-[#6b4cbb] transition-colors font-semibold text-neutral-800"
              >
                <Mail className="w-3.5 h-3.5 text-[#6b4cbb]" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasjuancoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-[#00696c]/15 hover:text-[#00696c] transition-colors font-semibold text-neutral-800"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#00696c]" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-3 gap-3.5 pt-4 w-full max-w-xl">
              <div className="p-3.5 rounded-2xl bg-neutral-100/80 border border-neutral-200/60 flex flex-col">
                <div className="flex items-center gap-1.5 text-[#5332a1] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xl sm:text-2xl font-black">{t.stats.accuracy}</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-medium leading-tight">{t.stats.accuracyLabel}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-100/80 border border-neutral-200/60 flex flex-col">
                <div className="flex items-center gap-1.5 text-[#00696c] mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xl sm:text-2xl font-black">{t.stats.setup}</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-medium leading-tight">{t.stats.setupLabel}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-100/80 border border-neutral-200/60 flex flex-col">
                <div className="flex items-center gap-1.5 text-[#493877] mb-1">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-xl sm:text-2xl font-black">{t.stats.sync}</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-medium leading-tight">{t.stats.syncLabel}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Hub Preview */}
          <div className="lg:col-span-5 relative">
            <LiveHubPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
