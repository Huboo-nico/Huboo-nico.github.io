import React from 'react';
import { Calendar, MessageCircle, Lock, Headphones, Clock, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CtaBannerProps {
  currentLang: Language;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ currentLang }) => {
  const t = translations[currentLang].cta;

  const BOOKING_URL =
    'https://outlook.office.com/bookwithme/user/d6afa597286e4db3953054334ee721af@huboo.com/meetingtype/hEyaWmOHkUytX520BxtFuQ2?anonymous&ep=mLinkFromTile';
  const WHATSAPP_URL =
    'https://wa.me/34674355737?text=Hola%20Nicolas,%20estoy%20interesado%20en%20los%20servicios%20de%20Huboo';

  return (
    <section className="py-20 lg:py-28 bg-[#fdf8f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-neutral-100/90 border border-purple-100 p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-sm">
          {/* Ambient circles */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#6b4cbb]/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#8af3f7]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#5332a1] text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6b4cbb]" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight text-balance">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#6b4cbb] text-white text-sm font-bold shadow-xl shadow-[#6b4cbb]/25 hover:bg-[#5332a1] hover:scale-105 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookCall}</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-white text-neutral-900 hover:text-[#25D366] text-sm font-bold shadow-md hover:scale-105 transition-all border border-neutral-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.whatsapp}</span>
              </a>
            </div>

            {/* Trust Seals */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-neutral-500 text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#00696c]" />
                <span>{t.trust[0]}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-[#00696c]" />
                <span>{t.trust[1]}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#00696c]" />
                <span>{t.trust[2]}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
