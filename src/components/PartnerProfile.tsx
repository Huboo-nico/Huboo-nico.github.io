import React from 'react';
import { Calendar, MapPin, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PartnerProfileProps {
  currentLang: Language;
}

export const PartnerProfile: React.FC<PartnerProfileProps> = ({ currentLang }) => {
  const t = translations[currentLang].partner;

  const BOOKING_URL =
    'https://outlook.office.com/bookwithme/user/d6afa597286e4db3953054334ee721af@huboo.com/meetingtype/hEyaWmOHkUytX520BxtFuQ2?anonymous&ep=mLinkFromTile';
  const MAPS_URL = 'https://maps.app.goo.gl/YLLd1YFuPxkaN7Pb7';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/nicolasjuancoronel';
  const WHATSAPP_URL = 'https://wa.me/34674355737?text=Hola%20Nicolas,%20quiero%20conocer%20mas%20sobre%20Huboo';

  return (
    <section id="partner" className="py-20 lg:py-28 bg-[#fdf8f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Card with Dark Plum Accent & Glow */}
        <div className="rounded-3xl bg-[#493877] text-white p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#6b4cbb]/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: Nicolas Portrait & Details */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden bg-[#6b4cbb] border-4 border-white/20 shadow-xl group">
                <img
                  src="/perfil.png"
                  alt="Nicolas Coronel - Huboo España"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeRiee63xl1wqfGVxtTdfKotwQcopYkSjWW2QHSKlFkD-mY6_PwkQmKkECyrlX9pswKjwT4T-a5DAH-HfTk08-LiLn8xFb7LLDmzPiD_kEy508_DczAV2MubzzPD6ltHdoBEQrHJVuMkSgzE2pjYci1L24Yjp87TGjq-8rTo2cQTMbMFF_JSc0ll8-e1cmVBGOZXdUs4dZ5YyfXFDIgSPp6vw_14VU0GF_E10o0lq7J8FDG_QdD4o';
                  }}
                />
                <div className="absolute bottom-2.5 right-2.5 bg-[#25D366] text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  <span>{t.statusAvailable}</span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-black text-white">{t.name}</h3>
                <p className="text-xs sm:text-sm text-[#8af3f7] font-semibold">{t.role}</p>
                <p className="text-xs text-white/70 mt-0.5">Madrid / Barcelona • España</p>
              </div>

              {/* Direct links */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  title="Perfil de LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white transition-colors"
                  title="WhatsApp directo"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  title="Ubicación Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Message & Key Commitments */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#8af3f7] text-xs font-bold">
                <span>🤝</span>
                <span>{t.badge}</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium leading-snug text-white/95">
                {t.quote}
              </blockquote>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                {t.body}
              </p>

              {/* Features check */}
              <div className="space-y-2.5 pt-1">
                {t.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8af3f7] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-white/90">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#8af3f7] hover:bg-white text-[#004f52] font-black text-xs sm:text-sm shadow-lg hover:scale-105 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.bookMeeting}</span>
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t.visitHub}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
