import React from 'react';
import { Award, TrendingUp, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { CASE_STUDIES } from '../data/integrations';

interface CaseStudiesProps {
  currentLang: Language;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ currentLang }) => {
  const t = translations[currentLang].cases;

  return (
    <section id="casos-de-exito" className="py-20 lg:py-28 bg-[#f7f2f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-[#5332a1] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.brand}
              className="p-8 rounded-3xl bg-white border border-purple-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00696c] uppercase tracking-wider">
                    {c.category}
                  </span>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    <span>{c.growth}</span>
                  </div>
                </div>

                {/* Big Metric */}
                <div>
                  <div className="text-4xl font-black text-[#5332a1]">{c.metric}</div>
                  <p className="text-xs font-semibold text-neutral-500 mt-0.5">{c.metricLabel}</p>
                </div>

                <div className="relative pt-2">
                  <Quote className="w-6 h-6 text-purple-200 absolute -top-1 -left-2 -z-0 opacity-70" />
                  <p className="text-sm text-neutral-700 leading-relaxed italic relative z-10">
                    “{c.quote}”
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{c.author}</h4>
                  <p className="text-xs text-neutral-500">{c.role} • <strong className="text-[#5332a1]">{c.brand}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
