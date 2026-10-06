import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang].footer;

  return (
    <footer className="w-full bg-neutral-900 text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#6b4cbb] flex items-center justify-center text-white font-black text-sm">
                H
              </div>
              <span className="text-xl font-black tracking-tight text-white">huboo.</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              {t.tagline}
            </p>
            <div className="pt-2 text-xs text-neutral-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8af3f7]" />
                <span>Hubs Operativos: Madrid & Barcelona (España)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8af3f7]" />
                <a href="mailto:nicolas.coronel@huboo.com" className="hover:text-white transition-colors">
                  nicolas.coronel@huboo.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8af3f7]" />
                <a href="tel:+34674355737" className="hover:text-white transition-colors">
                  +34 674 355 737
                </a>
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">{t.solutionsTitle}</h4>
            <div className="flex flex-col space-y-2 text-xs text-neutral-400">
              <a href="#soluciones" className="hover:text-white transition-colors">Recepción & Almacén</a>
              <a href="#soluciones" className="hover:text-white transition-colors">Picking & Packaging Personalizado</a>
              <a href="#soluciones" className="hover:text-white transition-colors">Envíos Peninsulares & Paneuropeos</a>
              <a href="#integraciones" className="hover:text-white transition-colors">Integraciones Multicanal</a>
              <a href="#calculadora" className="hover:text-white transition-colors">Calculadora de Ahorro</a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">{t.companyTitle}</h4>
            <div className="flex flex-col space-y-2 text-xs text-neutral-400">
              <a href="#casos-de-exito" className="hover:text-white transition-colors">Casos de Éxito de Clientes</a>
              <a href="#partner" className="hover:text-white transition-colors">Sobre Nicolas Coronel</a>
              <a href="https://huboo.com/es/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Huboo Global</a>
              <a href="https://maps.app.goo.gl/YLLd1YFuPxkaN7Pb7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Visitar Hub en Google Maps</a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Red Profesional</h4>
            <div className="flex flex-col space-y-2 text-xs text-neutral-400">
              <a
                href="https://www.linkedin.com/in/nicolasjuancoronel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8af3f7] flex items-center gap-1.5 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>Nicolas Coronel</span>
              </a>
              <a
                href="https://wa.me/34674355737"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                WhatsApp Directo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>{t.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">{t.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
