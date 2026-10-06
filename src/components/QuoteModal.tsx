import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { translations } from '../data/translations';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialData?: {
    orders?: number;
    storage?: string;
    dest?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialData,
}) => {
  const t = translations[currentLang].modal;

  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    storeUrl: '',
    email: '',
    phone: '',
    orders: initialData?.orders ? `${initialData.orders} envíos/mes` : '500 - 2.000 envíos/mes',
    platform: 'Shopify',
    notes: initialData ? `Estimación: ${initialData.storage || ''} · Destino: ${initialData.dest || ''}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-[#fdf8f9]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#6b4cbb] text-white flex items-center justify-center font-bold text-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">{t.title}</h3>
              <p className="text-xs text-neutral-500">Nicolas Coronel • Huboo España</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form or Confirmation */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00696c] mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-neutral-900">{t.successTitle}</h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                {t.successDesc}
              </p>
              <div className="p-4 rounded-2xl bg-purple-50 text-xs text-[#5332a1] font-semibold max-w-sm mx-auto">
                Contacto directo: nicolas.coronel@huboo.com | +34 674 355 737
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#6b4cbb] text-white font-bold text-xs hover:bg-[#5332a1] transition-all"
                >
                  {t.close}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-neutral-500 mb-4">{t.subtitle}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">{t.name} *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej: Laura Sánchez"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#6b4cbb] text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">{t.storeName} *</label>
                  <input
                    required
                    type="text"
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    placeholder="Ej: Aura Cosmetics"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#6b4cbb] text-xs font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">{t.email} *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="laura@auracosmetics.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#6b4cbb] text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">{t.phone} *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#6b4cbb] text-xs font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">{t.platform}</label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#6b4cbb] text-xs font-medium bg-white"
                  >
                    <option value="Shopify">Shopify</option>
                    <option value="WooCommerce">WooCommerce</option>
                    <option value="PrestaShop">PrestaShop</option>
                    <option value="Amazon">Amazon FBM</option>
                    <option value="TikTok Shop">TikTok Shop</option>
                    <option value="Otro">Otro / Custom ERP</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">{t.orders}</label>
                  <input
                    type="text"
                    value={formData.orders}
                    onChange={(e) => setFormData({ ...formData, orders: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#6b4cbb] text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">{t.notes}</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Detalles de embalaje, número aproximado de referencias (SKUs), etc."
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#6b4cbb] text-xs font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl bg-[#6b4cbb] hover:bg-[#5332a1] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#6b4cbb]/20 transition-all"
                >
                  {loading ? (
                    <span>{t.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{t.submit}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
