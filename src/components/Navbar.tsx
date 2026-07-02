"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navs = [
    { label: "Beranda", href: "#home" },
    { label: "Proyek", href: "#projects" },
    { label: "Tentang", href: "#about" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#08090d]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-emerald-400">✦</span>
          <span>
            MN<span className="text-emerald-400">.</span>dev
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navs.map((nav) => (
            <a key={nav.href} href={nav.href} className="hover:text-emerald-400">
              {nav.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-emerald-400/40 px-4 py-2 text-emerald-300 hover:bg-emerald-400/10"
          >
            Hubungi Saya
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
          className="rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 pb-5 md:hidden">
          {navs.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-slate-300 hover:text-emerald-400"
            >
              {nav.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
