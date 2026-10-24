/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, ArrowLeft, Home } from 'lucide-react';
import { COMPANY_INFO, PRICING_PACKAGES } from '../data/nexoraData';
import { PageId } from './Header';

interface ContactSectionProps {
  prefilledPlan?: string;
  onNavigate?: (page: PageId, path: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledPlan, onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [businessType, setBusinessType] = useState('UMKM');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledPlan) {
      setSelectedPlan(prefilledPlan);
    }
  }, [prefilledPlan]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSelectedPlan('');
    setBusinessType('UMKM');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="kontak-resmi" className="py-16 gradient-nexora">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            Konsultasi & Kontak Resmi TMD Nexora
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Mulai Diskusi Kebutuhan Proyek Digital Anda
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Diskusikan kebutuhan pembuatan website, toko online, atau sistem kustom bersama konsultan teknis TMD Nexora secara gratis tanpa komitmen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Form Component (7 cols) using semantic <form>, <fieldset>, etc. */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-sky-100 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Permintaan Konsultasi Berhasil Dikirim!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Terima kasih <span className="font-semibold text-slate-800">{name}</span>. Tim konsultan digital TMD Nexora akan menghubungi Anda via WhatsApp ({phone}) atau email ({email}) dalam kurun waktu 1x24 jam kerja.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Kirim Pertanyaan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <fieldset className="space-y-5">
                  <legend className="text-base font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2 w-full">
                    Formulir Pemesanan Layanan & Konsultasi
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nama Lengkap / Pemilik Usaha <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Cth: Budi Santoso"
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Cth: 0812-3456-7890"
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Alamat Email Bisnis <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Cth: budi@usahaku.id"
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-type" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Skala Usaha / Organisasi
                      </label>
                      <select
                        id="contact-type"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all font-medium text-slate-800"
                      >
                        <option value="UMKM">Usaha Mikro / Kecil (UMKM)</option>
                        <option value="Toko Online">Toko Retail / E-Commerce</option>
                        <option value="Perusahaan">Perusahaan Swasta / Startup</option>
                        <option value="Instansi">Lembaga / Komunitas / Yayasan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-plan" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Pilihan Paket dari Tabel Harga:
                    </label>
                    <select
                      id="contact-plan"
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all font-medium text-slate-800"
                    >
                      <option value="">-- Pilih Paket Layanan (Opsional) --</option>
                      {PRICING_PACKAGES.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} - Rp {p.priceRp.toLocaleString('id-ID')}
                        </option>
                      ))}
                      <option value="Custom Project">Kebutuhan Kustom Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Deskripsi Kebutuhan Proyek / Rencana Fitur <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Jelaskan jenis produk/jasa yang ingin ditampilkan, referensi tampilan yang disukai, atau target peluncuran website..."
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>
                </fieldset>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <span>Memproses Pengiriman...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Permintaan Konsultasi</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Semantic <aside> for Office, Map & Direct Channels (5 cols) */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Kantor Operasional TMD Nexora</span>
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Alamat Kantor Pusat:</div>
                    <p className="mt-0.5 text-slate-400 leading-relaxed">{COMPANY_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Surat Elektronik (Email):</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sky-400 hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Telepon Kantor & WhatsApp:</div>
                    <p className="mt-0.5 text-slate-400">{COMPANY_INFO.phone} / {COMPANY_INFO.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Jam Operasional:</div>
                    <p className="mt-0.5 text-slate-400">Senin - Jumat: 09:00 - 18:00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={`https://wa.me/6285282893956?text=${encodeURIComponent('Halo TMD Nexora, saya ingin berkonsultasi mengenai paket website & sistem...')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat WhatsApp Langsung (085282893956)</span>
                </a>
              </div>
            </div>
          </aside>

        </div>

        {/* Multi-Page Navigation Footer at bottom of Page 3 */}
        {onNavigate && (
          <div className="mt-12 p-6 rounded-2xl bg-white border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="/layanan"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('layanan', '/layanan');
              }}
              className="btn-secondary w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Halaman Layanan</span>
            </a>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('beranda', '/');
              }}
              className="btn-primary w-full sm:w-auto"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Beranda Utama</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
