/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('beranda');
  const [prefilledPlan, setPrefilledPlan] = useState('');

  // Sinkronisasi rute URL saat pertama kali dimuat & tombol back/forward browser
  useEffect(() => {
    const syncRouteFromUrl = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase().replace('#', '');

      if (path.includes('layanan') || hash.includes('layanan')) {
        setActivePage('layanan');
      } else if (
        path.includes('kontak') ||
        path.includes('portofolio') ||
        hash.includes('kontak') ||
        hash.includes('portofolio')
      ) {
        setActivePage('portofolio-kontak');
      } else {
        setActivePage('beranda');
      }
    };

    syncRouteFromUrl();
    window.addEventListener('popstate', syncRouteFromUrl);
    window.addEventListener('hashchange', syncRouteFromUrl);

    return () => {
      window.removeEventListener('popstate', syncRouteFromUrl);
      window.removeEventListener('hashchange', syncRouteFromUrl);
    };
  }, []);

  // Fungsi navigasi antar halaman murni
  const handleNavigate = (page: PageId, path: string) => {
    setActivePage(page);
    try {
      window.history.pushState({ page }, '', path);
    } catch {
      window.location.hash = path.replace('/', '#/');
    }
    // Scroll ke atas halaman baru
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectPlanAndNavigate = (planName: string) => {
    setPrefilledPlan(planName);
    handleNavigate('portofolio-kontak', '/portofolio-kontak');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      
      {/* 1. Header Semantik dengan Bilah Navigasi */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* 2. Komponen Semantik <main> yang Merender Halaman Terpilih */}
      <main className="flex-1 page-content">
        
        {/* HALAMAN 1 (Rute: /): Profil Perusahaan Nexora, Visi Misi & Profil Tim */}
        {activePage === 'beranda' && (
          <div className="page-transition">
            <HeroSection onNavigate={handleNavigate} />
            <AboutSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* HALAMAN 2 (Rute: /layanan): Layanan & Tabel Perbandingan Harga UMKM */}
        {activePage === 'layanan' && (
          <div className="page-transition">
            <PricingSection
              onSelectPlanAndNavigate={handleSelectPlanAndNavigate}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* HALAMAN 3 (Rute: /portofolio-kontak): Portofolio Studi Kasus & Formulir Kontak */}
        {activePage === 'portofolio-kontak' && (
          <div className="page-transition">
            <PortfolioSection onNavigate={handleNavigate} />
            <ContactSection prefilledPlan={prefilledPlan} onNavigate={handleNavigate} />
          </div>
        )}

      </main>

      {/* 3. Footer Semantik */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
