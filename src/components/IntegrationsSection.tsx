import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, Clock, Zap, Store, ShoppingBag, Share2, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INTEGRATIONS } from '../data/integrations';

interface IntegrationsSectionProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({
  currentLang,
  onOpenQuoteModal,
}) => {
  const t = translations[currentLang].ecosystem;
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'marketplace' | 'social' | 'erp'>('all');
  const [testingId, setTestingId] = useState<string | null>(null);

  const filtered = filter === 'all' ? INTEGRATIONS : INTEGRATIONS.filter((i) => i.category === filter);

  const handleSimulateSync = (id: string) => {
    setTestingId(id);
    setTimeout(() => {
      setTestingId(null);
    }, 2200);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'ecommerce':
        return <Store className="w-4 h-4" />;
      case 'marketplace':
        return <ShoppingBag className="w-4 h-4" />;
      case 'social':
        return <Share2 className="w-4 h-4" />;
      case 'erp':
        return <FileText className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <section id="integraciones" className="py-20 lg:py-28 bg-[#f7f2f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-[#5332a1] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Core Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-3xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#eee6f8] flex items-center justify-center text-[#5332a1]">
                <Store className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Pilar 01 • Omnicanal</span>
              <h3 className="text-xl font-bold text-neutral-900">Tus Canales de Venta</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Conexión directa con tus escaparates de venta en Europa. Cuando un cliente compra en Shopify, Amazon o TikTok, el pedido se enruta en milisegundos.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap gap-1.5">
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">Shopify</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">WooCommerce</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">Amazon</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">TikTok Shop</span>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-[#5332a1] text-white shadow-xl shadow-[#5332a1]/25 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-[#8af3f7]">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8af3f7]">Pilar 02 • Core Engine</span>
              <h3 className="text-xl font-bold text-white">HUBOO Tech Engine</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Control de inventario centralizado sin riesgo de roturas ni sobreventa. Gestión automatizada de albaranes, batches y códigos de seguimiento.
              </p>
            </div>
            <div className="pt-6 space-y-2 relative z-10">
              <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between text-xs">
                <span>Ingreso de pedidos</span>
                <span className="font-bold text-[#8af3f7]">100% Automático</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between text-xs">
                <span>Actualización de stock</span>
                <span className="font-bold text-[#8af3f7]">&lt; 1 segundo</span>
              </div>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-purple-100 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#e3fafc] flex items-center justify-center text-[#00696c]">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Pilar 03 • Control</span>
              <h3 className="text-xl font-bold text-neutral-900">Dashboard Unificado</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Visualiza stock, órdenes en preparación y métricas de desempeño logístico en un portal accesible desde cualquier dispositivo.
              </p>
            </div>
            <div className="pt-6">
              <div className="p-3.5 rounded-2xl bg-neutral-50 flex flex-col space-y-2">
                <div className="flex justify-between items-center text-xs text-neutral-600">
                  <span>Precisión de inventario</span>
                  <span className="font-bold text-neutral-900">99.8%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-200 overflow-hidden">
                  <div className="h-full bg-[#00696c] w-[99.8%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-[#6b4cbb] text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            {t.filterAll}
          </button>
          <button
            type="button"
            onClick={() => setFilter('ecommerce')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'ecommerce'
                ? 'bg-[#6b4cbb] text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            {t.filterEcommerce}
          </button>
          <button
            type="button"
            onClick={() => setFilter('marketplace')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'marketplace'
                ? 'bg-[#6b4cbb] text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            {t.filterMarketplace}
          </button>
          <button
            type="button"
            onClick={() => setFilter('social')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'social'
                ? 'bg-[#6b4cbb] text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            {t.filterSocial}
          </button>
          <button
            type="button"
            onClick={() => setFilter('erp')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'erp'
                ? 'bg-[#6b4cbb] text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            {t.filterErp}
          </button>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white border border-purple-100/70 hover:border-[#6b4cbb]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#5332a1] flex items-center justify-center">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-bold text-[#00696c] bg-[#e3fafc] px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-neutral-900 mb-1">{item.name}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {item.timeToSetup}
                </span>

                <button
                  type="button"
                  onClick={() => handleSimulateSync(item.id)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                    testingId === item.id
                      ? 'bg-emerald-50 text-[#00696c] font-black'
                      : 'bg-[#eee6f8] text-[#5332a1] hover:bg-[#cfbdff]'
                  }`}
                >
                  {testingId === item.id ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                      <span>Sync OK</span>
                    </>
                  ) : (
                    <>
                      <span>Simular test</span>
                      <ArrowRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom API Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-neutral-900">¿Tienes un ERP a medida o tienda personalizada?</h4>
            <p className="text-xs sm:text-sm text-neutral-500">
              Nuestra RESTful Open API permite sincronizar catálogos, pedidos y estados en cuestión de horas con webhooks en tiempo real.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#6b4cbb] hover:bg-[#5332a1] shrink-0 transition-colors"
          >
            Consultar con Ingenieros de Huboo
          </button>
        </div>
      </div>
    </section>
  );
};
