import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const presets = [
    'Hola Nicolas, quiero cotizar la logística de mi e-commerce.',
    'Hola Nicolas, me gustaría conocer las tarifas de envío para Península y Europa.',
    'Hola Nicolas, tengo dudas sobre la integración con mi tienda (Shopify / Woo).',
  ];

  const getWhatsAppUrl = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    return `https://wa.me/34674355737?text=${encoded}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 bg-[#25D366] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/20 border-2 border-white">
                <img
                  src="/perfil.png"
                  alt="Nicolas Coronel"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeRiee63xl1wqfGVxtTdfKotwQcopYkSjWW2QHSKlFkD-mY6_PwkQmKkECyrlX9pswKjwT4T-a5DAH-HfTk08-LiLn8xFb7LLDmzPiD_kEy508_DczAV2MubzzPD6ltHdoBEQrHJVuMkSgzE2pjYci1L24Yjp87TGjq-8rTo2cQTMbMFF_JSc0ll8-e1cmVBGOZXdUs4dZ5YyfXFDIgSPp6vw_14VU0GF_E10o0lq7J8FDG_QdD4o';
                  }}
                />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">Nicolas Coronel</h4>
                <p className="text-[11px] text-white/90">Huboo Fulfilment • En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-black/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick messages */}
          <div className="p-4 bg-[#fdf8f9] space-y-2.5">
            <p className="text-xs text-neutral-600 font-medium">
              ¡Hola! ¿En qué puedo ayudarte hoy con la logística de tu tienda? Elige una opción rápida:
            </p>

            <div className="space-y-1.5">
              {presets.map((msg) => (
                <a
                  key={msg}
                  href={getWhatsAppUrl(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#25D366] text-xs font-semibold text-neutral-800 hover:text-[#00696c] flex items-center justify-between group transition-all"
                >
                  <span className="line-clamp-2">{msg}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#25D366] shrink-0 ml-2" />
                </a>
              ))}
            </div>

            <div className="pt-2 text-center">
              <a
                href={getWhatsAppUrl('Hola Nicolas, me gustaría conversar sobre mi e-commerce.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#1faa52] transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Abrir chat de WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all"
        title="Contactar con Nicolas por WhatsApp"
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
};
