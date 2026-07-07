"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const projects = [
  {
    category: "Kanban App",
    title: "Taskify",
    image: "/images/project-taskify.jpg",
    desc: "Aplikasi manajemen tugas dengan board, kolom, task, autentikasi, dan konsep realtime.",
    detail:
      "Taskify adalah aplikasi manajemen task seperti Trello dengan board, column, task CRUD, auth, dan konsep realtime untuk kolaborasi tim.",
    stack: ["React", "Express", "Prisma", "PostgreSQL"],
    liveDemo: "https://taskify-task-seven.vercel.app/",
  },
  {
    category: "URL Shortener",
    title: "GoShock",
    image: "/images/project-goshock.jpg",
    desc: "Pemendek URL dengan QR code, dashboard analitik, dan riwayat tautan.",
    detail:
      "GoShock adalah URL shortener berbasis Go dan Next.js dengan QR generator dan statistik klik secara real-time.",
    stack: ["Next.js", "Go", "Gin", "SQLite"],
    liveDemo: "https://goshock.vercel.app/",
  },
  {
    category: "E-Commerce",
    title: "Ifuku Store",
    image: "/images/project-store.jpg",
    desc: "Toko produk digital MLBB lengkap dengan keranjang dan alur pembayaran.",
    detail:
      "Ifuku Store adalah toko digital Mobile Legends dengan autentikasi, cart, dan admin panel untuk kelola produk.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    liveDemo: "https://quick-shop-mlbb.vercel.app/",
  },
  {
    category: "Social Media",
    title: "Circle MLBB",
    image: "/images/project-circle.jpg",
    desc: "Aplikasi sosial media untuk komunitas pemain Mobile Legends.",
    detail:
      "Circle MLBB adalah social media app dengan post, like, comment, dan profile untuk komunitas pemain MLBB.",
    stack: ["React", "Socket.IO", "Prisma"],
    liveDemo: "https://circle-mlbb.vercel.app/",
  },
  {
    category: "Utility App",
    title: "Split Bill Calculator",
    image: "/images/project-splitbill.jpg",
    desc: "Pembaca struk OCR sekaligus aplikasi pembagi tagihan bersama.",
    detail:
      "Aplikasi split bill dengan OCR receipt untuk membaca struk otomatis dan berbagai metode pembagian tagihan.",
    stack: ["Next.js", "OCR", "TypeScript"],
    liveDemo: "https://split-bill-calculator-flax.vercel.app/",
  },
  {
    category: "Laravel",
    title: "Coming Soon",
    image: null,
    desc: "Sedang belajar dan membangun proyek baru menggunakan Laravel.",
    detail:
      "Proyek ini sedang dalam proses pembelajaran. Saya sedang memperdalam Laravel untuk pengembangan backend dan akan segera menambahkan proyek nyata di sini.",
    stack: ["Laravel", "PHP", "MySQL"],
    comingSoon: true,
    liveDemo: null,
  },
];

const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Vercel"],
  },
];

const stats = [
  ["3+", "Tahun Pengalaman"],
  ["20+", "Proyek Dibangun"],
  ["15+", "Klien Puas"],
  ["∞", "Kopi Terminum"],
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[number]
  >(null);

  const whatsappLink =
    "https://wa.me/6282171734864?text=Halo%20Mhd%20Nur%20Ifaturachman,%20saya%20tertarik%20dengan%20project%20Anda.";
  const githubLink = "https://github.com/ifuku007-eh";
  const linkedinLink = "https://www.linkedin.com/in/mhd-nur-ifaturachman/";
  const email = "ifaturachman7@gmail.com";
  const emailLink = `mailto:${email}`;

  return (
    <main className="min-h-screen text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center"
      >
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Terbuka untuk proyek baru
        </span>

        <p className="mb-4 font-mono text-sm uppercase tracking-[0.4em] text-emerald-400">
          — Portofolio
        </p>

        <h1 className="text-5xl font-black leading-[1.05] md:text-7xl">
          Mhd Nur
          <br />
          Ifaturachman
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          Full-Stack Developer — saya merancang dan membangun aplikasi web
          modern, rapi, dan siap produksi, dari sisi frontend hingga backend.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-emerald-500 px-7 py-3 font-bold text-black hover:bg-emerald-400"
          >
            Lihat Karya ↓
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            className="rounded-xl border border-white/15 px-7 py-3 font-bold text-white hover:border-emerald-400/50 hover:text-emerald-300"
          >
            Hubungi via WhatsApp
          </a>
        </div>

        <div className="mt-16 grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {stats.map(([num, text]) => (
            <div key={text}>
              <h3 className="text-3xl font-black text-emerald-400">{num}</h3>
              <p className="mt-1 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-sm uppercase tracking-[0.4em] text-emerald-400">
          Portofolio
        </p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Karya Pilihan</h2>
        <p className="mt-4 max-w-xl text-slate-400">
          Kumpulan proyek terbaik yang menunjukkan kemampuan teknis saya dari
          frontend hingga backend.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-emerald-400/50"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={360}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="flex h-48 w-full flex-col items-center justify-center gap-2 bg-white/[0.04] text-slate-500">
                  <span className="text-3xl">🚧</span>
                  <span className="font-mono text-xs uppercase tracking-widest">
                    Coming Soon
                  </span>
                </div>
              )}

              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-black">{project.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {project.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.comingSoon ? (
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-slate-500">
                    Segera Hadir <span>⏳</span>
                  </span>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 flex items-center gap-2 font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    Lihat Detail <span>→</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/10 bg-white/[0.02] py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-emerald-400">
              Tentang
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Halo, Saya Nur 👋
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Saya seorang developer yang senang membangun produk digital
              yang tidak hanya berfungsi dengan baik, tapi juga terasa rapi
              dan enak dipakai. Dengan pengalaman 3+ tahun, saya sudah
              membantu berbagai klien membangun aplikasi web dari nol
              hingga rilis.
            </p>

            <div className="mt-8 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-sm font-bold text-white">
                    {group.label}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
              <Image
                src="/images/profile.jpg"
                alt="Mhd Nur Ifaturachman"
                width={500}
                height={500}
                className="h-[380px] w-full rounded-xl object-cover"
              />
              <div className="mt-4 px-1">
                <p className="text-lg font-black">Mhd Nur Ifaturachman</p>
                <p className="text-sm text-slate-400">
                  Full-Stack Developer
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Terbuka untuk kolaborasi remote maupun on-site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.4em] text-emerald-400">
          Kontak
        </p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">
          Mari Berkolaborasi ✦
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate-400">
          Punya ide proyek, dashboard, toko online, atau aplikasi full-stack?
          Mari kita wujudkan menjadi produk nyata.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            className="rounded-xl bg-emerald-500 px-7 py-3 font-bold text-black hover:bg-emerald-400"
          >
            WhatsApp
          </a>
          <a
            href={emailLink}
            className="rounded-xl border border-white/15 px-7 py-3 font-bold hover:border-emerald-400/50 hover:text-emerald-300"
          >
            Email
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            className="rounded-xl border border-white/15 px-7 py-3 font-bold hover:border-emerald-400/50 hover:text-emerald-300"
          >
            LinkedIn
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="rounded-xl border border-white/15 px-7 py-3 font-bold hover:border-emerald-400/50 hover:text-emerald-300"
          >
            GitHub
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">{email}</p>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        Dirancang &amp; dibangun dengan ♥ oleh{" "}
        <span className="text-slate-300">Mhd Nur Ifaturachman</span> — 2026
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/70 px-6">
          <div className="relative max-w-xl rounded-2xl border border-white/10 bg-[#0b0c11] p-6 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 text-2xl text-slate-400 hover:text-white"
            >
              ×
            </button>

            {selectedProject.image && (
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={700}
                height={400}
                className="h-56 w-full rounded-xl object-cover"
              />
            )}

            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-emerald-400">
              {selectedProject.category}
            </p>
            <h3 className="mt-2 text-3xl font-black">
              {selectedProject.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              {selectedProject.detail}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {selectedProject.liveDemo && (
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-black hover:bg-emerald-400"
              >
                Live Demo <span>↗</span>
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}