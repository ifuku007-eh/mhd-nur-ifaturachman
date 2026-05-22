"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navs = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <h1 className="text-xl font-black">
          MN<span className="text-emerald-400">.</span>
        </h1>

        <div className="hidden gap-7 text-sm md:flex">
          {navs.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="transition hover:text-emerald-400"
            >
              {nav.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/15 px-3 py-2 md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 pb-5 md:hidden">
          {navs.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm hover:text-emerald-400"
            >
              {nav.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}