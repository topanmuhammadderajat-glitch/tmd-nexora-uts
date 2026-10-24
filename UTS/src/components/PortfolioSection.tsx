/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink, TrendingUp, ArrowLeft } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/nexoraData';
import { PageId } from './Header';

interface PortfolioSectionProps {
  onNavigate: (page: PageId, path: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onNavigate }) => {
  return (
    <section id="portofolio" className="pt-14 pb-16 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            Bukti Kinerja & Studi Kasus Nyata
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Proyek Unggulan dengan Dampak Bisnis Terukur
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Setiap solusi digital yang kami bangun dirancang untuk menghasilkan metrik pertumbuhan nyata bagi klien, baik dari sisi konversi penjualan maupun efisiensi operasional.
          </p>
        </div>

        {/* Portfolio Showcase Grid using <article> elements */}
        <div className="space-y-14">
          {PORTFOLIO_PROJECTS.map((proj, idx) => (
            <article
              key={proj.id}
              className="nexora-card p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Project Details (5 cols) */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''} space-y-5`}>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="text-sky-700 font-bold">{proj.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Klien: {proj.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>Tahun {proj.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Quantitative Impact Metrics */}
                  <div className="pt-2">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-sky-600" />
                      <span>Hasil & Dampak Terukur:</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 bg-white rounded-xl border border-sky-100 shadow-2xs">
                          <div className="text-lg sm:text-xl font-bold text-sky-700 font-mono tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {proj.liveUrl && proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-xs transition-colors"
                      >
                        <span>Akses Sistem Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href="/layanan"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('layanan', '/layanan');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 hover:underline cursor-pointer"
                    >
                      <span>Lihat Spesifikasi Paket</span>
                    </a>
                  </div>
                </div>

                {/* Project Image Display (7 cols) */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <figure className="relative rounded-2xl overflow-hidden border border-sky-200/80 shadow-md bg-white group">
                    <img
                      src={proj.image}
                      alt={`Mockup antarmuka proyek ${proj.title}`}
                      className="w-full h-auto object-cover aspect-[16/9] group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <figcaption className="p-3 bg-white/95 text-[11px] text-slate-500 border-t border-sky-100 flex items-center justify-between">
                      <span className="font-medium text-slate-700">{proj.title}</span>
                      <span>Studi Kasus Resmi TMD Nexora</span>
                    </figcaption>
                  </figure>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
