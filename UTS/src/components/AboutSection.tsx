/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Compass, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/nexoraData';
import { PageId } from './Header';

interface AboutSectionProps {
  onNavigate: (page: PageId, path: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="profil-lengkap" className="py-20 bg-white border-b border-sky-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
            Profil Mendalam Perusahaan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Membangun Standar Baru Ekosistem Digital Berkelanjutan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Berdiri sejak tahun {COMPANY_INFO.established}, TMD Nexora berdedikasi memecahkan tantangan teknologi bagi pelaku UMKM maupun korporasi melalui rekayasa perangkat lunak yang elegan, efisien, dan berdampak nyata.
          </p>
        </div>

        {/* 2-Column Story & Culture with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Kisah Perjalanan & Filosofi Kerja
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Berpusat di <span className="font-semibold text-slate-800">Pandeglang, Banten</span>, TMD Nexora dipelopori oleh <span className="font-semibold text-sky-700">Topan Muhammad Derajat</span> dengan satu tekad: <span className="font-semibold text-slate-800">memberikan solusi rekayasa teknologi berkualitas tinggi, mudah digunakan, dan terjangkau untuk lembaga pendidikan serta pelaku UMKM Indonesia.</span>
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Kami tidak sekadar menulis baris kode, melainkan membangun sistem yang langsung mengatasi tantangan operasional harian: mulai dari manajemen presensi guru real-time di sekolah/pesantren, pembukuan kasir SPMB, hingga sistem inventaris stok barang UMKM dengan database online yang handal.
            </p>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {COMPANY_INFO.values.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-sky-50/60 border border-sky-100">
                  <div className="text-sky-700 font-bold text-sm mb-1">{val.title}</div>
                  <div className="text-xs text-slate-600 leading-normal">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <figure className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-md bg-sky-50">
              <img
                src="/assets/aistudio/Cuplikan_layar_2026-10-16_111033_b52dfe3e.png"
                alt="Antarmuka platform TMD Nexora - Rekayasa Digital Pendidikan dan UMKM"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <figcaption className="p-3.5 bg-white/95 text-xs text-slate-600 border-t border-sky-100 flex items-center justify-between">
                <span className="font-medium text-slate-800">Portal Resmi TMD Nexora</span>
                <span className="text-sky-600 font-medium">Pandeglang, Banten</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <article className="nexora-card relative bg-gradient-to-br from-sky-50/80 via-white to-blue-50/40">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Perusahaan</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Menjadi agensi rekayasa digital terpercaya di Indonesia yang memimpin modernisasi sistem informasi bagi ribuan lembaga pendidikan (sekolah & pesantren) serta memberdayakan UMKM nasional dengan infrastruktur web berdaya saing global pada tahun 2030.
            </p>
          </article>

          <article className="nexora-card relative bg-gradient-to-br from-blue-50/80 via-white to-sky-50/40">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Perusahaan</h3>
            <ul className="text-slate-600 text-sm sm:text-base space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                <span>Mengembangkan sistem informasi pendidikan (presensi guru, jadwal mengajar, keuangan kasir PMB) yang akurat dan mudah dioperasikan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                <span>Menyediakan aplikasi web dan mobile untuk UMKM dengan integrasi database online real-time tanpa beban biaya yang memberatkan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                <span>Memberikan pendampingan teknis langsung, pelatihan penggunaan sistem, serta garansi stabilitas infrastruktur cloud.</span>
              </li>
            </ul>
          </article>
        </div>

        {/* Developer Spotlight Profile: Solo Developer / Founder */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
              Tim di Balik Layar
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Profil Pengembang & Pendiri
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Dikelola secara langsung oleh Lead Software Engineer dan arsitek sistem digital TMD Nexora.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.id}
                className="nexora-card p-6 sm:p-8 bg-gradient-to-br from-white via-sky-50/30 to-blue-50/20 border-2 border-sky-200/80 shadow-md"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative shrink-0">
                    <img
                      src={member.avatarUrl}
                      alt={`Foto / Logo Profil ${member.name}`}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-sky-300 shadow-sm bg-white"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                      Aktif
                    </span>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {member.name}
                      </h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold self-center sm:self-auto">
                        {member.role}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-500 mb-4">
                      <span>📍 Pandeglang, Banten</span>
                      <span>•</span>
                      <span>✉️ topanmuhammadderajat@gmail.com</span>
                      <span>•</span>
                      <span>📱 085282893956</span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {member.bio}
                    </p>

                    <div className="mb-5">
                      <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Keahlian & Arsitektur Teknologi:
                      </div>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 text-xs">
                        {member.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-sky-100/70 text-sky-800 text-xs font-medium border border-sky-200/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                      <a
                        href={`https://wa.me/6285282893956?text=${encodeURIComponent('Halo Kak Topan (TMD Nexora), saya ingin berkonsultasi mengenai pembuatan sistem...')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary text-xs py-2 px-4"
                      >
                        <span>WhatsApp: 085282893956</span>
                      </a>
                      <a
                        href="mailto:topanmuhammadderajat@gmail.com"
                        className="btn-secondary text-xs py-2 px-4"
                      >
                        <span>Kirim Email</span>
                      </a>
                      <a
                        href="https://github.com/topanmuhammadderajat-glitch"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>GitHub Profil</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Page Navigation to Next Page */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-100/60 via-white to-blue-100/60 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-sky-800 uppercase tracking-wider">
              Layanan & Investasi
            </div>
            <h4 className="text-lg font-bold text-slate-900 mt-0.5">
              Lihat Spesifikasi Layanan Lengkap & Tabel Perbandingan Harga UMKM
            </h4>
            <p className="text-xs text-slate-600">
              Pilih spesifikasi paket website dan hitung estimasi biaya proyek dengan kalkulator interaktif.
            </p>
          </div>
          <a
            href="/layanan"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('layanan', '/layanan');
            }}
            className="btn-primary shrink-0"
          >
            <span>Buka Layanan & Tabel Harga</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
