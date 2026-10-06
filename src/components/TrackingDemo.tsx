import React, { useState } from 'react';
import { Search, CheckCircle, Truck, PackageCheck, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TrackingDemoProps {
  currentLang: Language;
}

export const TrackingDemo: React.FC<TrackingDemoProps> = ({ currentLang }) => {
  const t = translations[currentLang].trackingDemo;
  const [orderQuery, setOrderQuery] = useState('#HB-MAD-8921');
  const [activeOrder, setActiveOrder] = useState({
    code: '#HB-MAD-8921',
    carrier: 'GLS Spain Express 24h',
    recipient: 'Alejandro M. • Pozuelo de Alarcón (Madrid)',
    items: '2x Camiseta Oversize Organic, 1x Gorra Algodón (Caja Branded Huboo)',
    currentStep: 3, // 0 to 3
    estimatedDelivery: 'Hoy antes de las 18:30h',
  });

  const sampleOrders = [
    { code: '#HB-MAD-8921', carrier: 'GLS Express 24h', recipient: 'Madrid (Pozuelo)', step: 3 },
    { code: '#HB-BCN-4402', carrier: 'SEUR Frío / 24h', recipient: 'Barcelona (Sarrià)', step: 2 },
    { code: '#HB-VAL-1092', carrier: 'Correos Express', recipient: 'Valencia (Ruzafa)', step: 1 },
  ];

  const milestones = [
    {
      title: 'Pedido recibido en API',
      time: '09:12h',
      desc: 'Sincronizado al segundo desde Shopify Plus',
      icon: Search,
    },
    {
      title: 'Picking & Empaque completado',
      time: '10:45h',
      desc: 'Inspección de lote + precinto con logotipo y tarjeta regalo',
      icon: PackageCheck,
    },
    {
      title: 'Despacho desde Hub Madrid',
      time: '12:30h',
      desc: 'Entregado a transporte con código de seguimiento nacional',
      icon: Truck,
    },
    {
      title: 'En reparto hacia destino',
      time: '15:10h',
      desc: 'En furgoneta del transportista, entrega estimada hoy',
      icon: MapPin,
    },
  ];

  const handleSelectSample = (sample: typeof sampleOrders[0]) => {
    setOrderQuery(sample.code);
    setActiveOrder({
      code: sample.code,
      carrier: sample.carrier,
      recipient: `${sample.recipient}`,
      items: '2 artículos seleccionados (Empaque D2C Premium)',
      currentStep: sample.step,
      estimatedDelivery: 'Hoy antes de las 19:00h',
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;
    setActiveOrder((prev) => ({
      ...prev,
      code: orderQuery.toUpperCase(),
      currentStep: 2,
    }));
  };

  return (
    <section id="tracking-demo" className="py-20 lg:py-28 bg-[#fdf8f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-[#5332a1] text-xs font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Simulator Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5 p-6 sm:p-10">
          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-neutral-200 focus:outline-none focus:border-[#6b4cbb] text-sm font-semibold"
              />
            </div>
            <button
              type="submit"
              className="px-7 py-3.5 rounded-2xl bg-[#6b4cbb] hover:bg-[#5332a1] text-white font-bold text-sm shadow-md transition-all shrink-0"
            >
              {t.trackBtn}
            </button>
          </form>

          {/* Quick select chips */}
          <div className="flex flex-wrap items-center gap-2 mb-8 text-xs text-neutral-500">
            <span className="font-semibold text-neutral-700">{t.quickSelect}</span>
            {sampleOrders.map((sample) => (
              <button
                key={sample.code}
                type="button"
                onClick={() => handleSelectSample(sample)}
                className="px-3 py-1 rounded-full bg-neutral-100 hover:bg-purple-100/60 text-neutral-800 font-mono font-bold transition-colors"
              >
                {sample.code}
              </button>
            ))}
          </div>

          {/* Active Order Summary Card */}
          <div className="p-5 rounded-2xl bg-[#eee6f8]/60 border border-purple-200/50 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-neutral-900 font-mono">{activeOrder.code}</span>
                <span className="px-2 py-0.5 rounded-full bg-[#00696c] text-white text-[11px] font-bold">
                  {activeOrder.carrier}
                </span>
              </div>
              <p className="text-xs text-neutral-600 mt-1">Destinatario: {activeOrder.recipient}</p>
              <p className="text-[11px] text-neutral-400 mt-0.5">{activeOrder.items}</p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-neutral-500 block">Estado estimado:</span>
              <span className="text-sm font-bold text-[#00696c]">{activeOrder.estimatedDelivery}</span>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-neutral-200">
            {milestones.map((m, index) => {
              const Icon = m.icon;
              const isPast = index <= activeOrder.currentStep;
              const isCurrent = index === activeOrder.currentStep;

              return (
                <div key={m.title} className="relative flex items-start gap-4">
                  {/* Pin Dot */}
                  <div
                    className={`absolute -left-6 sm:-left-8 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-colors ${
                      isPast
                        ? 'bg-[#6b4cbb] text-white shadow-sm ring-4 ring-purple-100'
                        : 'bg-neutral-200 text-neutral-400 ring-4 ring-white'
                    }`}
                  >
                    {isPast ? <CheckCircle className="w-3.5 h-3.5" /> : <Icon className="w-3 h-3" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4
                        className={`text-sm font-bold ${
                          isCurrent ? 'text-[#5332a1] font-black' : isPast ? 'text-neutral-900' : 'text-neutral-400'
                        }`}
                      >
                        {m.title}
                      </h4>
                      <span className="text-xs font-mono text-neutral-400">{m.time}</span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
