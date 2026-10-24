/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/nexoraData';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId, path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, page: PageId, path: string) => {
    e.preventDefault();
    onNavigate(page, path);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLink(e, 'beranda', '/')}
              className="flex items-center gap-3 text-white font-extrabold text-xl text-decoration-none group"
            >
              <img
                src={COMPANY_INFO.logoUrl}
                alt="TMD Nexora Brand Logo"
                className="w-10 h-10 rounded-xl object-cover bg-white p-0.5 border border-sky-400/40 group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-white font-extrabold tracking-tight">TMD Nexora<span className="text-sky-400">.</span></span>
                <span className="block text-[10px] text-sky-300 font-mono tracking-wider font-normal">Technology for the Next Era</span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>
            <div className="pt-2 text-xs text-slate-500">
              <p className="font-semibold text-slate-300">{COMPANY_INFO.legalName}</p>
              <p className="mt-1 text-slate-400">📍 {COMPANY_INFO.location}</p>
            </div>
          </div>

          {/* Col 3: Multi-Page Hyperlink Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, 'beranda', '/')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Beranda & Profil Agensi
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  onClick={(e) => handleLink(e, 'layanan', '/layanan')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Layanan & Tabel Harga
                </a>
              </li>
              <li>
                <a
                  href="/portofolio-kontak"
                  onClick={(e) => handleLink(e, 'portofolio-kontak', '/portofolio-kontak')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Portofolio & Kontak Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Layanan IT & Paket */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Paket Layanan Digital
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/layanan"
                  onClick={(e) => handleLink(e, 'layanan', '/layanan')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Paket UMKM Starter (Rp 1.5 Jt)
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  onClick={(e) => handleLink(e, 'layanan', '/layanan')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Paket Kasir UMKM (StokinAja)
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  onClick={(e) => handleLink(e, 'layanan', '/layanan')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Paket Sekolah & Presensi (eSchool)
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  onClick={(e) => handleLink(e, 'layanan', '/layanan')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Paket Keuangan Kasir PMB & Enterprise
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak Cepat */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-400 transition-colors truncate">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`https://wa.me/6285282893956`} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors truncate">
                  WhatsApp: {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} TMD Nexora. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Pandeglang, Banten, Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
