"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Taskify",
    image: "/images/project-taskify.jpg",
    desc: "Kanban board app with boards, columns, tasks, auth, and real-time concept.",
    stack: ["React", "Express", "Prisma", "PostgreSQL"],
  },
  {
    title: "GoShock",
    image: "/images/project-goshock.jpg",
    desc: "URL shortener with QR code, analytics dashboard, and link history.",
    stack: ["Next.js", "Go", "Gin", "SQLite"],
  },
  {
    title: "Ifuku Store",
    image: "/images/project-store.jpg",
    desc: "MLBB digital product shop with cart, auth, admin panel, and payment flow.",
    stack: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    title: "Circle MLBB",
    image: "/images/project-circle.jpg",
    desc: "Social media app for MLBB players with posts, likes, comments, and profile.",
    stack: ["React", "Express", "Socket.IO", "Prisma"],
  },
  {
    title: "Split Bill Calculator",
    image: "/images/project-splitbill.jpg",
    desc: "Receipt OCR and bill splitting app with equal, percentage, and item-based split.",
    stack: ["Next.js", "OCR", "TypeScript"],
  },
  {
    title: "Portfolio Web",
    image: "/images/project-portfolio.jpg",
    desc: "Personal portfolio website with responsive UI and modern dark theme.",
    stack: ["Next.js", "Tailwind", "Vercel"],
  },
];

const stacks = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Tailwind CSS",
  "Git & GitHub",
  "Vercel",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const navs = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-black">
            MN<span className="text-emerald-400">.</span>
          </h1>

          <div className="hidden gap-7 text-sm md:flex">
            {navs.map((nav) => (
              <a key={nav.href} href={nav.href} className="hover:text-emerald-400">
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

      <section
        id="home"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center"
      >
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-emerald-400">
            Full-Stack Developer
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-6xl">
            Hi, I&apos;m Mhd Nur Ifaturachman
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I build modern, responsive, and production-ready web applications
            from frontend to backend.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-emerald-500 px-6 py-3 font-bold text-black">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl border border-white/20 px-6 py-3 font-bold">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <Image
            src="/images/profile.jpg"
            alt="Mhd Nur Ifaturachman"
            width={500}
            height={500}
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
            priority
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-center sm:grid-cols-2 md:grid-cols-4">
          {[
            ["3+", "Years Experience"],
            ["20+", "Projects Built"],
            ["15+", "Happy Clients"],
            ["∞", "Coffee Consumed"],
          ].map(([num, text]) => (
            <div key={text}>
              <h3 className="text-4xl font-black text-emerald-400">{num}</h3>
              <p className="text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-400">
          Tech Stack
        </p>
        <h2 className="mt-3 text-4xl font-black">Technologies I Work With</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {stacks.map((stack) => (
            <span key={stack} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              {stack}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-400">
          Projects
        </p>
        <h2 className="mt-3 text-4xl font-black">Selected Works</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={360}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-10 text-center">
          <h2 className="text-4xl font-black">Let&apos;s Build Something Great</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Need a portfolio, dashboard, store, or full-stack app? Let&apos;s turn your idea into a real product.
          </p>

          <a
            href="mailto:ifuku.007@gmail.com"
            className="mt-8 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-bold text-black"
          >
            Contact Me
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Mhd Nur Ifaturachman. Built with Next.js.
      </footer>
    </main>
  );
}