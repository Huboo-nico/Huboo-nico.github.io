import React, { useState } from 'react';
import { PackageCheck, Shield, Sparkles, Truck, Check, ArrowRight, Eye } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PhasesFlowProps {
  currentLang: Language;
}

export const PhasesFlow: React.FC<PhasesFlowProps> = ({ currentLang }) => {
  const t = translations[currentLang].flow;
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsDetails = [
    {
      num: '01',
      title: 'Recepción & Inspección Rápida',
      subtitle: 'Tus productos listos para despachar en menos de 24 horas',
      description: 'Una vez recibida la mercancía en nuestros Hubs de Madrid o Barcelona, nuestro equipo efectúa una inspección visual y fotográfica de los palés, coteja albaranes y da de alta cada SKU mediante escaneo de código de barras.',
      bullets: [
        'Inspección de bultos y reporte fotográfico de incidencias',
        'Cotejo instantáneo con aviso previo de expedición (ASN)',
        'Sincronización automática de existencias con tu tienda',
      ],
      icon: PackageCheck,
      image: '/recep.png',
      badge: 'Control de Calidad 100%',
    },
    {
      num: '02',
      title: 'Almacenamiento Seguro & Optimizado',
      subtitle: 'Instalaciones de vanguardia sin costes mínimos abusivos',
      description: 'Disponemos de zonas limpias, climatizadas y monitorizadas 24/7 con alarmas grado 3. Estanterías dinámicas para picking rápido y paletería pesada para stock de seguridad.',
      bullets: [
        'Zonas seguras con control de temperatura y humedad',
        'Tarificación por volumen real ocupado, sin penalizaciones',
        'Inventario permanente en tiempo real accesible desde tu dashboard',
      ],
      icon: Shield,
      image: '/nave.jpg',
      badge: 'Hub Madrid & Barcelona',
    },
    {
      num: '03',
      title: 'Preparación & Unboxing Personalizado',
      subtitle: 'El paquete que tu cliente recibe con tu identidad de marca',
      description: 'El packaging no es solo una caja: es la primera impresión física de tu marca. Personalizamos cada pedido con cinta adhesiva corporativa, papel de seda, muestras de regalo y tarjetas de agradecimiento.',
      bullets: [
        'Empaque personalizado según tu guía de estilo de marca',
        'Gestión de números de serie, lotes y fechas de caducidad',
        'Comunicación directa con el equipo asignado a tu Hub',
      ],
      icon: Sparkles,
      image: '/prepa.png',
      badge: 'Unboxing Premium',
    },
    {
      num: '04',
      title: 'Envío Inteligente & Tracking en Tiempo Real',
      subtitle: 'El mejor transportista para cada código postal al mejor precio',
      description: 'Nuestro motor algorítmico selecciona en milisegundos la ruta y el transportista óptimo (GLS, SEUR, Correos Express, DHL) según peso, volumen, destino y urgencia, actualizando el tracking en tu tienda online.',
      bullets: [
        'Rutas optimizadas para entregas en 24h en toda la Península',
        'Envíos transfronterizos sin barreras aduaneras en la UE y UK',
        'Gestión proactiva de entregas fallidas y logística inversa (devoluciones)',
      ],
      icon: Truck,
      image: '/envio.png',
      badge: 'Seguimiento 24/7',
    },
  ];

  return (
    <section id="soluciones" className="py-20 lg:py-28 bg-[#fdf8f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-[#5332a1] text-xs font-bold uppercase tracking-wider">
              {t.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight text-balance">
              {t.title}
            </h2>
          </div>
          <p className="text-neutral-600 text-base max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Step Selector Pill Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {stepsDetails.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#5332a1] text-white border-[#5332a1] shadow-lg shadow-[#5332a1]/20 scale-[1.02]'
                    : 'bg-white text-neutral-700 border-neutral-200/80 hover:bg-neutral-50 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-2xl font-black font-mono ${isSelected ? 'text-[#8af3f7]' : 'text-[#6b4cbb]'}`}>
                    {s.num}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-white/15 text-white' : 'bg-purple-50 text-[#6b4cbb]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-bold text-sm leading-snug line-clamp-2">
                  {s.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Spotlight Active Stage Card */}
        <div className="bg-white rounded-3xl border border-purple-100/80 p-6 sm:p-10 shadow-xl shadow-purple-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eee6f8] text-[#5332a1] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#6b4cbb]"></span>
                <span>Fase {stepsDetails[activeStep].num} • {stepsDetails[activeStep].badge}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-2">
                  {stepsDetails[activeStep].title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#00696c]">
                  {stepsDetails[activeStep].subtitle}
                </p>
              </div>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {stepsDetails[activeStep].description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {stepsDetails[activeStep].bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00696c] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-800">{b}</span>
                  </div>
                ))}
              </div>

              {/* Switch navigation */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : stepsDetails.length - 1))}
                  className="px-4 py-2 rounded-full text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  ← Fase anterior
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < stepsDetails.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#6b4cbb] hover:bg-[#5332a1] transition-colors flex items-center gap-1.5"
                >
                  <span>Siguiente fase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Photo Preview */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 aspect-[4/3] group relative">
                <img
                  src={stepsDetails[activeStep].image}
                  alt={stepsDetails[activeStep].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div
                  className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-50 p-6 text-center text-[#5332a1]"
                >
                  <Eye className="w-8 h-8 mb-2" />
                  <p className="text-xs font-bold">{stepsDetails[activeStep].title}</p>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full">
                  Foto operativa real en Huboo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
