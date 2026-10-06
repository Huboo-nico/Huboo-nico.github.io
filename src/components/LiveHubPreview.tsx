import React, { useState, useEffect } from 'react';
import { Package, TrendingUp, CheckCircle, Truck, Sparkles } from 'lucide-react';
import { INITIAL_LIVE_ACTIVITIES } from '../data/integrations';
import { LiveActivity } from '../types';

export const LiveHubPreview: React.FC = () => {
  const [activities, setActivities] = useState<LiveActivity[]>(INITIAL_LIVE_ACTIVITIES);
  const [ordersToday, setOrdersToday] = useState(1482);
  const [pulseActive, setPulseActive] = useState(false);

  // Micro-tick simulating real dispatches in Madrid & Barcelona
  useEffect(() => {
    const interval = setInterval(() => {
      setOrdersToday((prev) => prev + 1);
      setPulseActive(true);

      const carriers = ['GLS Express', 'SEUR Frío', 'Correos Express', 'Paack 24h', 'DHL Parcel'];
      const channels = ['Shopify', 'WooCommerce', 'TikTok Shop', 'Amazon FBM', 'Miravia'];
      const randomOrder = `#HB-${Math.random() > 0.5 ? 'MAD' : 'BCN'}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const newActivity: LiveActivity = {
        id: Date.now().toString(),
        channel: channels[Math.floor(Math.random() * channels.length)],
        orderNumber: randomOrder,
        itemCount: Math.floor(1 + Math.random() * 3),
        status: 'Enviado',
        carrier: carriers[Math.floor(Math.random() * carriers.length)],
        timeAgo: 'ahora mismo',
      };

      setActivities((prev) => [newActivity, ...prev.slice(0, 3)]);

      setTimeout(() => setPulseActive(false), 800);
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-3xl bg-white p-5 sm:p-7 shadow-2xl shadow-purple-950/10 border border-purple-100/80">
      {/* Top Bar of Preview */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
          <span className="text-xs font-mono text-neutral-400 ml-2">huboo-live-core.es</span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00696c] bg-[#e3fafc] px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span>Hubs Madrid & Barcelona Activos</span>
        </div>
      </div>

      {/* Main Metric Card */}
      <div className="my-5 p-5 rounded-2xl bg-[#eee6f8]/70 border border-purple-200/50">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#493877]">
              Pedidos procesados hoy
            </span>
            <div
              className={`text-4xl sm:text-5xl font-black text-neutral-900 mt-1 transition-transform duration-300 ${
                pulseActive ? 'scale-105 text-[#6b4cbb]' : ''
              }`}
            >
              {ordersToday.toLocaleString('es-ES')}
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#6b4cbb] text-white flex items-center justify-center shadow-md shadow-[#6b4cbb]/30">
            <Package className="w-6 h-6" />
          </div>
        </div>

        {/* Dynamic Mini Sparkline */}
        <div className="mt-4 pt-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-500 mb-1">
            <span>Ritmo de preparación por hora</span>
            <span className="text-[#00696c] flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> +14% vs ayer
            </span>
          </div>
          <svg
            className="w-full h-8 text-[#6b4cbb]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 240 35"
          >
            <polyline
              points="0,28 30,24 60,30 90,14 120,18 150,8 180,12 210,4 240,10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle className="fill-[#6b4cbb]" cx="240" cy="10" r="3" />
          </svg>
        </div>
      </div>

      {/* Feed of dispatches */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-neutral-400 uppercase tracking-wider px-1">
          <span>Flujo de almacén en directo</span>
          <span className="flex items-center gap-1 text-[#493877]">
            <Sparkles className="w-3 h-3 text-[#6b4cbb]" /> Auto-sync
          </span>
        </div>

        {activities.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-xl bg-neutral-50 hover:bg-[#eee6f8]/40 border border-neutral-100 flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#5332a1]">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-neutral-900">{item.orderNumber}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-100/70 text-[#5332a1] font-semibold">
                    {item.channel}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500">{item.carrier} · {item.timeAgo}</p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-bold text-[#00696c] flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Floating Tag */}
      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
        <span className="font-semibold text-neutral-700">Tasa de corte diario: 18:00h</span>
        <span className="text-[#6b4cbb] font-bold">Entrega en 24h garantizada</span>
      </div>
    </div>
  );
};
