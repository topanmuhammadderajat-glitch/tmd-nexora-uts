/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/nexoraData';
import { PageId } from './Header';

interface HeroSectionProps {
  onNavigate: (page: PageId, path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('profil-lengkap');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative pt-12 pb-20 md:pt-18 md:pb-24 overflow-hidden gradient-nexora border-b border-sky-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wide uppercase">
              <span>Profil Agensi Digital Resmi</span>
              <span aria-hidden="true" className="text-sky-300">·</span>
              <span>Est. {COMPANY_INFO.established}</span>
              <span aria-hidden="true" className="text-sky-300">·</span>
              <span>Pandeglang, Banten, Indonesia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Transformasi Digital Presisi untuk{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                Pendidikan, UMKM & Bisnis Modern
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {COMPANY_INFO.description}
            </p>

            {/* Feature Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Sistem Informasi Sekolah & Presensi Guru</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Aplikasi Kasir & Inventaris Stok UMKM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Database Cloud Real-Time & Akses Online</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Pendampingan & Pelatihan Sistem Langsung</span>
              </div>
            </div>

            {/* CTA Group with anchor tags pointing to separate pages */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/layanan"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('layanan', '/layanan');
                }}
                className="btn-primary"
              >
                <span>Lihat Tabel Paket & Harga</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#profil-lengkap"
                onClick={scrollToAbout}
                className="btn-secondary"
              >
                <span>Pelajari Profil Agensi</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Focal Asset (5 cols) */}
          <div className="lg:col-span-5">
            <figure className="relative rounded-2xl overflow-hidden border border-sky-200/80 shadow-xl bg-white group">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-09_at_09.49.31__1__0dc53adf.jpeg"
                alt="Logo Resmi TMD Nexora - Technology for the Next Era"
                className="w-full h-auto object-contain p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <figcaption className="p-4 bg-white/95 backdrop-blur-sm border-t border-sky-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="font-semibold text-slate-800">TMD Nexora Technology</span>
                  <span>· Pandeglang, Banten</span>
                </div>
                <span className="text-sky-600 font-mono text-[11px] font-bold">Next Era</span>
              </figcaption>
            </figure>
          </div>

        </div>

        {/* Full-width 4-Column KPI strip below hero */}
        <div className="mt-16 pt-10 border-t border-sky-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/80 border border-sky-100 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-700 font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
