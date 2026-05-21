const projects = [
  {
    title: "Taskify",
    desc: "Kanban board app with boards, columns, tasks, auth, and real-time concept.",
    stack: ["React", "Express", "Prisma", "PostgreSQL"],
  },
  {
    title: "GoShock",
    desc: "URL shortener with dashboard, QR code, analytics, and link history.",
    stack: ["Next.js", "Go", "Gin", "SQLite"],
  },
  {
    title: "Ifuku Store",
    desc: "MLBB digital product shop with cart, auth, admin product management, and payment flow.",
    stack: ["Next.js", "Supabase", "Tailwind"],
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
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-bold">
          MN<span className="text-emerald-400">.</span>
        </h1>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#home" className="hover:text-emerald-400">Home</a>
          <a href="#projects" className="hover:text-emerald-400">Projects</a>
          <a href="#stack" className="hover:text-emerald-400">Tech Stack</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
        </div>
      </nav>

      <section id="home" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Full-Stack Developer
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Hi, I&apos;m Mhd Nur Ifaturachman
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I build modern, responsive, and production-ready web applications
            from frontend to backend.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              View Projects
            </a>

            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8 shadow-2xl">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-500/20 to-blue-500/10 p-8">
            <p className="text-6xl">👋</p>
            <h3 className="mt-6 text-2xl font-bold">Indie Hacker & Developer</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Based in Indonesia. Available for web projects, portfolio sites,
              dashboards, and full-stack applications.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-black text-emerald-400">3+</h3>
            <p className="text-slate-300">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-emerald-400">20+</h3>
            <p className="text-slate-300">Projects Built</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-emerald-400">15+</h3>
            <p className="text-slate-300">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-emerald-400">∞</h3>
            <p className="text-slate-300">Coffee Consumed</p>
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Tech Stack
        </p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Technologies I Work With
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
            >
              {stack}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Selected Works
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Need a portfolio, dashboard, store, or full-stack app? Let&apos;s
            turn your idea into a real product.
          </p>

          <a
            href="mailto:ifuku.007@gmail.com"
            className="mt-8 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Contact Me
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Mhd Nur Ifaturachman. Built with Next.js.
      </footer>
    </main>
  );
}