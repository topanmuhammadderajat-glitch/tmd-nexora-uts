/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Sparkles, Home, Table, PhoneCall } from 'lucide-react';

export type PageId = 'beranda' | 'layanan' | 'portofolio-kontak';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId, path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 3 Halaman Navigasi Multi-Halaman
  const pages: { id: PageId; path: string; label: string; icon: React.ReactNode }[] = [
    {
      id: 'beranda',
      path: '/',
      label: 'Beranda & Profil',
      icon: <Home className="w-3.5 h-3.5" />,
    },
    {
      id: 'layanan',
      path: '/layanan',
      label: 'Layanan & Tabel Harga',
      icon: <Table className="w-3.5 h-3.5" />,
    },
    {
      id: 'portofolio-kontak',
      path: '/portofolio-kontak',
      label: 'Portofolio & Kontak',
      icon: <PhoneCall className="w-3.5 h-3.5" />,
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: PageId, path: string) => {
    e.preventDefault();
    onNavigate(page, path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Official Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, 'beranda', '/')}
          className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-3 group text-decoration-none"
        >
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-10-09_at_09.49.31__1__0dc53adf.jpeg"
            alt="Logo Resmi TMD Nexora"
            className="w-10 h-10 rounded-xl object-cover border border-sky-200 shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-slate-900 group-hover:text-sky-600 transition-colors leading-tight font-extrabold text-base sm:text-lg">
              TMD Nexora<span className="text-sky-500">.</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider hidden sm:block">
              Technology for the Next Era
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links via Semantic <nav> and pure <a href="..."> tags */}
        <nav className="main-nav hidden lg:flex items-center" aria-label="Navigasi Utama">
          {pages.map((p) => {
            const isActive = activePage === p.id;
            return (
              <a
                key={p.id}
                href={p.path}
                onClick={(e) => handleLinkClick(e, p.id, p.path)}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <span>{p.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Fast Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="/portofolio-kontak"
            onClick={(e) => handleLinkClick(e, 'portofolio-kontak', '/portofolio-kontak')}
            className="btn-primary py-2.5 px-5 text-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Konsultasi Proyek</span>
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Buka navigasi mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sky-100 bg-white/95 px-4 pt-3 pb-5 space-y-1 shadow-lg">
          <nav className="flex flex-col space-y-2" aria-label="Navigasi Mobile">
            {pages.map((p) => (
              <a
                key={p.id}
                href={p.path}
                onClick={(e) => handleLinkClick(e, p.id, p.path)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2.5 ${
                  activePage === p.id
                    ? 'bg-sky-100 text-sky-800 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {p.icon}
                <span>{p.label}</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/portofolio-kontak"
                onClick={(e) => handleLinkClick(e, 'portofolio-kontak', '/portofolio-kontak')}
                className="btn-primary w-full text-center text-xs py-2.5"
              >
                Konsultasi Proyek Sekarang
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
