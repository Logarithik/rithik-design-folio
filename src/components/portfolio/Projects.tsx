import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Nimbus Analytics",
    desc: "An AI-powered SaaS dashboard for product analytics with realtime cohorting, funnels, and natural-language queries.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Figma"],
    image: p1,
    demo: "#",
    github: "#",
    accent: "var(--grad-purple-pink)",
  },
  {
    title: "Lumen Finance",
    desc: "Personal-finance mobile app with envelope budgeting, smart insights, and a fully custom design system.",
    tags: ["React Native", "TypeScript", "Express.js", "MySQL"],
    image: p2,
    demo: "#",
    github: "#",
    accent: "var(--grad-cyan-blue)",
  },
  {
    title: "Aurora Commerce",
    desc: "Headless e-commerce redesign that lifted conversion by 38% across desktop, tablet, and mobile.",
    tags: ["Next.js", "Tailwind", "Stripe", "Figma"],
    image: p3,
    demo: "#",
    github: "#",
    accent: "var(--grad-blue-purple)",
  },
  {
    title: "Echo AI Chat",
    desc: "Multi-model AI chat with persistent memory, streaming responses, and a luminous glassmorphism interface.",
    tags: ["React", "Python", "FastAPI", "WebSockets"],
    image: p4,
    demo: "#",
    github: "#",
    accent: "var(--grad-aurora)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Projects that <span className="text-gradient">tell a story</span>
            </h2>
          </div>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Have a project? Let&apos;s talk →
          </a>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-50 transition-opacity group-hover:opacity-70"
                  style={{ background: p.accent }}
                />
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover mix-blend-luminosity opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-xl glass group-hover:bg-white/10 transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 rounded-xl bg-aurora px-4 py-2 text-xs font-medium text-white shadow-elegant hover:opacity-90 transition"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-xs font-medium hover:bg-white/10 transition"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
