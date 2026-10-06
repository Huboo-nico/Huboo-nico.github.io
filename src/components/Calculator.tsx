import React, { useState, useId } from 'react';
import { Calculator as CalcIcon, Clock, DollarSign, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CalculatorProps {
  currentLang: Language;
  onOpenQuoteWithData: (data: { orders: number; storage: string; dest: string }) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ currentLang, onOpenQuoteWithData }) => {
  const t = translations[currentLang].calculator;
  const ordersInputId = useId();
  const itemsInputId = useId();

  const [orders, setOrders] = useState<number>(1200);
  const [itemsPerOrder, setItemsPerOrder] = useState<number>(2);
  const [storageTier, setStorageTier] = useState<number>(1);
  const [destTier, setDestTier] = useState<number>(0);

  // Calculations
  // Average minutes to pick, pack, label self-fulfillment: ~7 minutes per parcel
  const hoursSavedPerMonth = Math.round((orders * 7) / 60);
  // Average savings per parcel compared to individual carrier contracts: ~€1.40 - €2.20 per parcel
  const estimatedSavingsEuro = Math.round(orders * (destTier === 2 ? 2.6 : 1.75));
  // Accuracy metric
  const accuracy = '99.85%';

  const handleRequestQuote = () => {
    onOpenQuoteWithData({
      orders,
      storage: t.storageOptions[storageTier],
      dest: t.destOptions[destTier],
    });
  };

  return (
    <section id="calculadora" className="py-20 lg:py-28 bg-[#f7f2f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-[#5332a1] text-xs font-bold uppercase tracking-wider">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: Input controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5 space-y-8">
            {/* Slider 1: Monthly Orders */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor={ordersInputId} className="text-sm font-bold text-neutral-800">
                  {t.monthlyOrders}
                </label>
                <span className="text-lg font-black text-[#5332a1] bg-purple-50 px-3 py-1 rounded-xl">
                  {orders.toLocaleString('es-ES')} envíos/mes
                </span>
              </div>
              <input
                id={ordersInputId}
                type="range"
                min="100"
                max="10000"
                step="100"
                value={orders}
                onChange={(e) => setOrders(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#6b4cbb]"
              />
              <div className="flex justify-between text-xs text-neutral-400 font-semibold">
                <span>100</span>
                <span>2.500</span>
                <span>5.000</span>
                <span>10.000+</span>
              </div>
            </div>

            {/* Slider 2: Items per order */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor={itemsInputId} className="text-sm font-bold text-neutral-800">
                  {t.itemsPerOrder}
                </label>
                <span className="text-base font-bold text-neutral-900 bg-neutral-100 px-3 py-1 rounded-xl">
                  {itemsPerOrder} {itemsPerOrder === 1 ? 'artículo' : 'artículos'}
                </span>
              </div>
              <input
                id={itemsInputId}
                type="range"
                min="1"
                max="6"
                step="1"
                value={itemsPerOrder}
                onChange={(e) => setItemsPerOrder(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#6b4cbb]"
              />
              <div className="flex justify-between text-xs text-neutral-400 font-semibold">
                <span>1 unidad</span>
                <span>3 unidades</span>
                <span>6+ unidades</span>
              </div>
            </div>

            {/* Buttons: Storage Footprint */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-neutral-800 block">
                {t.storageNeed}
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {t.storageOptions.map((opt, idx) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setStorageTier(idx)}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-bold text-left transition-all border ${
                      storageTier === idx
                        ? 'bg-[#6b4cbb] text-white border-[#6b4cbb] shadow-sm'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Radio / Buttons: Destination Mix */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-neutral-800 block">
                {t.destinations}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {t.destOptions.map((dest, idx) => (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => setDestTier(idx)}
                    className={`py-2 px-3 rounded-2xl text-xs font-semibold text-center transition-all border ${
                      destTier === idx
                        ? 'bg-[#00696c] text-white border-[#00696c] shadow-sm'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Results Card */}
          <div className="lg:col-span-5 bg-[#5332a1] text-white p-7 sm:p-9 rounded-3xl shadow-2xl shadow-[#5332a1]/30 flex flex-col justify-between relative overflow-hidden">
            {/* Background ambient shape */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8af3f7]">
                {t.resultsTitle}
              </span>

              {/* Metric 1: Hours Saved */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-[#8af3f7]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white tabular-nums">
                      ~{hoursSavedPerMonth} h/mes
                    </div>
                    <p className="text-xs text-white/70">{t.hoursSub}</p>
                  </div>
                </div>
              </div>

              {/* Metric 2: Estimated Carrier Savings */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-[#25D366]">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#8af3f7] tabular-nums">
                      ~{estimatedSavingsEuro.toLocaleString('es-ES')} €/mes
                    </div>
                    <p className="text-xs text-white/70">{t.savingsSub}</p>
                  </div>
                </div>
              </div>

              {/* Metric 3: Accuracy */}
              <div className="flex items-center justify-between px-2 text-xs text-white/80">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#8af3f7]" />
                  <span>{t.errorReduction}:</span>
                </span>
                <span className="font-bold text-white text-sm">{accuracy} de precisión</span>
              </div>

              <div className="space-y-2 pt-2 text-xs text-white/80 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Tarifas negociadas con SEUR, GLS, Correos Express y DHL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Embalaje a medida y albarán de entrega incluido</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA to transfer data to quotation */}
            <div className="pt-6 relative z-10">
              <button
                type="button"
                onClick={handleRequestQuote}
                className="w-full py-4 px-6 rounded-full bg-[#8af3f7] hover:bg-white text-[#004f52] font-black text-sm shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>{t.ctaCalculate}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
