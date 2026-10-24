/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Check, Search, Calculator, ArrowRight, ArrowLeft } from 'lucide-react';
import { PRICING_PACKAGES, SERVICES } from '../data/nexoraData';
import { PricingPlan } from '../types';
import { PageId } from './Header';

interface PricingSectionProps {
  onSelectPlanAndNavigate: (planName: string) => void;
  onNavigate: (page: PageId, path: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlanAndNavigate,
  onNavigate,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'umkm' | 'bisnis' | 'enterprise'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlanForCalc, setSelectedPlanForCalc] = useState<string>('plan-umkm-starter');
  const [includeMaintenance, setIncludeMaintenance] = useState(false);
  const [includeCustomSeo, setIncludeCustomSeo] = useState(false);
  const [includePrioritySupport, setIncludePrioritySupport] = useState(false);

  // Filtered packages
  const filteredPlans = useMemo(() => {
    return PRICING_PACKAGES.filter((plan) => {
      const matchCat = filterCategory === 'all' || plan.category === filterCategory;
      const matchSearch =
        searchQuery === '' ||
        plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.targetUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.features.some((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [filterCategory, searchQuery]);

  // Selected plan calculation
  const currentPlan = useMemo(() => {
    return PRICING_PACKAGES.find((p) => p.id === selectedPlanForCalc) || PRICING_PACKAGES[0];
  }, [selectedPlanForCalc]);

  const totalCalculated = useMemo(() => {
    let sum = currentPlan.priceRp;
    if (includeMaintenance) sum += currentPlan.maintenanceMonthlyRp * 6;
    if (includeCustomSeo) sum += 1200000;
    if (includePrioritySupport) sum += 800000;
    return sum;
  }, [currentPlan, includeMaintenance, includeCustomSeo, includePrioritySupport]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const comparisonCriteria = [
    { label: 'Target Pengguna', key: 'target' },
    { label: 'Estimasi Durasi Pengerjaan', key: 'delivery' },
    { label: 'Ketentuan Revisi Desain', key: 'revision' },
    { label: 'Jumlah Halaman Web', key: 'pages' },
    { label: 'Domain & Cloud Hosting', key: 'hosting' },
    { label: 'Integrasi WhatsApp Langsung', key: 'whatsapp' },
    { label: 'Katalog & Varian Produk', key: 'catalog' },
    { label: 'Sistem Pembayaran / Payment Gateway', key: 'payment' },
    { label: 'Optimasi SEO & Kecepatan', key: 'seo' },
    { label: 'Dukungan & Pemeliharaan', key: 'support' },
  ];

  const getCellValue = (plan: PricingPlan, key: string) => {
    switch (key) {
      case 'target':
        return <span className="font-semibold text-slate-800">{plan.targetUser}</span>;
      case 'delivery':
        return <span className="font-mono text-slate-700">{plan.deliveryTime}</span>;
      case 'revision':
        return <span className="text-slate-700">{plan.revisions}</span>;
      case 'pages':
        if (plan.id === 'plan-umkm-starter') return '1 - 3 Halaman';
        if (plan.id === 'plan-umkm-toko') return 'Hingga 6 Halaman & Modul Kasir';
        if (plan.id === 'plan-pendidikan-sekolah') return 'Multi-Jenjang (TK-SMA-Pesantren)';
        return 'Modul Kasir PMB & Enterprise';
      case 'hosting':
        return 'Termasuk (1 Tahun)';
      case 'whatsapp':
        return <Check className="w-5 h-5 text-emerald-600 inline" />;
      case 'catalog':
        if (plan.id === 'plan-umkm-starter') return <span className="text-slate-400">Tabel Sederhana</span>;
        if (plan.id === 'plan-umkm-toko') return <span className="font-semibold text-slate-800">Katalog + Stok</span>;
        if (plan.id === 'plan-pendidikan-sekolah') return <span className="font-semibold text-sky-700">Jadwal & Guru</span>;
        return <span className="font-semibold text-sky-700">Database Santri</span>;
      case 'payment':
        if (plan.category === 'umkm' && plan.id === 'plan-umkm-starter')
          return <span className="text-slate-400">Manual Transfer</span>;
        if (plan.id === 'plan-umkm-toko') return <span className="text-slate-700">Format Order WA</span>;
        if (plan.id === 'plan-pendidikan-sekolah') return <span className="text-slate-700">SPP & Kasir Sekolah</span>;
        return <span className="font-semibold text-sky-700">Kwitansi A4 & Kasir Otomatis</span>;
      case 'seo':
        if (plan.category === 'umkm') return 'Dasar Google Ready';
        return 'Full Technical & Database Cloud';
      case 'support':
        return `${formatRupiah(plan.maintenanceMonthlyRp)} / bln`;
      default:
        return '-';
    }
  };

  return (
    <section
      id="halaman-layanan-harga"
      className="py-14 sm:py-20 bg-slate-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            Pilar Layanan & Investasi Transparan
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Tabel Harga & Spesifikasi Layanan TMD Nexora
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Penuhi kebutuhan lembaga pendidikan dan usaha Anda dengan paket website terstruktur tanpa biaya tersembunyi. Khusus dirancang untuk pelaku UMKM lokal, sekolah, yayasan, hingga korporasi.
          </p>
        </div>

        {/* 4 Pilar Layanan Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="nexora-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                    Layanan {srv.number}
                  </span>
                  {srv.badge && (
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {srv.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{srv.title}</h3>
                <div className="text-xs text-sky-700 font-medium mb-3">{srv.subtitle}</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{srv.description}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Stack: </span>
                {srv.techStack.join(' · ')}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-sky-100 shadow-2xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Paket ({PRICING_PACKAGES.length})
            </button>
            <button
              onClick={() => setFilterCategory('umkm')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filterCategory === 'umkm'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Khusus UMKM
            </button>
            <button
              onClick={() => setFilterCategory('bisnis')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filterCategory === 'bisnis'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sistem Pendidikan (eSchool)
            </button>
            <button
              onClick={() => setFilterCategory('enterprise')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filterCategory === 'enterprise'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Keuangan & Enterprise
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari fitur (cth: WhatsApp, SEO, Domain)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>
        </div>

        {/* Semantic HTML5 <table> with custom CSS class .pricing-table */}
        <div className="bg-white rounded-2xl border border-sky-200 shadow-sm overflow-hidden mb-12">
          <div className="p-4 bg-gradient-to-r from-sky-50 to-white border-b border-sky-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Tabel Perbandingan Spesifikasi & Biaya Layanan
              </span>
            </div>
            <span className="text-xs font-medium text-sky-700">
              Paket UMKM & Korporasi
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="pricing-table">
              <caption className="sr-only">
                Tabel Perbandingan Harga Paket Pembuatan Website dan Layanan IT TMD Nexora
              </caption>

              {/* Table Header: <thead> */}
              <thead>
                <tr>
                  <th scope="col" className="w-1/4">
                    Kriteria & Spesifikasi
                  </th>
                  {filteredPlans.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className={plan.popular ? 'bg-sky-100/60 text-sky-900' : ''}
                    >
                      <div className="text-sm sm:text-base font-extrabold">{plan.name}</div>
                      <div className="text-xs font-normal text-slate-500 mt-0.5">{plan.targetUser}</div>
                      <div className="text-lg sm:text-xl font-mono font-extrabold text-sky-700 mt-2 tabular-nums">
                        {formatRupiah(plan.priceRp)}
                      </div>
                      <div className="text-[11px] font-normal text-slate-500">{plan.period}</div>
                      <button
                        onClick={() => onSelectPlanAndNavigate(plan.name)}
                        className={`mt-3 w-full py-1.5 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          plan.popular
                            ? 'bg-sky-600 text-white hover:bg-sky-700 shadow-xs'
                            : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        Pilih & Konsultasi
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body: <tbody> with zebra striping */}
              <tbody>
                {comparisonCriteria.map((criterion) => (
                  <tr key={criterion.key}>
                    <th scope="row">
                      {criterion.label}
                    </th>
                    {filteredPlans.map((plan) => (
                      <td key={plan.id}>
                        {getCellValue(plan, criterion.key)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              {/* Table Footer: <tfoot> */}
              <tfoot>
                <tr>
                  <th scope="row">Aksi Tindak Lanjut</th>
                  {filteredPlans.map((plan) => (
                    <td key={plan.id}>
                      <a
                        href="/portofolio-kontak"
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectPlanAndNavigate(plan.name);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline cursor-pointer"
                      >
                        <span>Pesan Paket Ini</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Interactive Investment Calculator Widget */}
        <div className="gradient-nexora p-6 sm:p-8 rounded-2xl border border-sky-200 shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 text-sky-600" />
            <h3 className="text-lg font-bold text-slate-900">
              Kalkulator Estimasi Kebutuhan Biaya Proyek Interaktif
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Pilih paket dasar dan tambahkan fitur pendukung opsional untuk menghitung total estimasi investasi digital Anda secara otomatis:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  1. Pilih Paket Dasar Website:
                </label>
                <select
                  value={selectedPlanForCalc}
                  onChange={(e) => setSelectedPlanForCalc(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-xl p-2.5 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                >
                  {PRICING_PACKAGES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - {formatRupiah(p.priceRp)} ({p.targetUser})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="block text-xs font-semibold text-slate-700">
                  2. Layanan Tambahan Opsional (Add-Ons):
                </span>
                
                <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeMaintenance}
                    onChange={(e) => setIncludeMaintenance(e.target.checked)}
                    className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-slate-800">Paket Maintenance Server & Backup 6 Bulan</span>
                    <span className="text-slate-500 block">Termasuk update konten berkala dan backup cloud mingguan (+{formatRupiah(currentPlan.maintenanceMonthlyRp * 6)})</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeCustomSeo}
                    onChange={(e) => setIncludeCustomSeo(e.target.checked)}
                    className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-slate-800">Audit & Optimasi SEO Riset Kata Kunci Lokal</span>
                    <span className="text-slate-500 block">Membantu bisnis lokal Anda muncul di pencarian Google Maps & Search (+{formatRupiah(1200000)})</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={includePrioritySupport}
                    onChange={(e) => setIncludePrioritySupport(e.target.checked)}
                    className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-slate-800">Dedicated Support WhatsApp 24/7 Prioritas</span>
                    <span className="text-slate-500 block">Jaminan respon teknisi di bawah 30 menit setiap saat (+{formatRupiah(800000)})</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-sky-200 shadow-sm text-center">
              <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block mb-1">
                Total Estimasi Investasi
              </span>
              <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums my-3">
                {formatRupiah(totalCalculated)}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight mb-5">
                Estimasi belum termasuk PPN 11%. Pembayaran dapat dilakukan secara termin (DP 50%).
              </p>
              <button
                onClick={() => onSelectPlanAndNavigate(`${currentPlan.name} (Estimasi ${formatRupiah(totalCalculated)})`)}
                className="w-full btn-primary py-2.5 px-4 text-xs"
              >
                <span>Ajukan Penawaran ke Halaman Kontak</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Page Transition Footer Strip */}
        <div className="p-6 rounded-2xl bg-white border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('beranda', '/');
            }}
            className="btn-secondary w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda Profil</span>
          </a>

          <a
            href="/portofolio-kontak"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('portofolio-kontak', '/portofolio-kontak');
            }}
            className="btn-primary w-full sm:w-auto"
          >
            <span>Lihat Portofolio & Kontak Kami</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
