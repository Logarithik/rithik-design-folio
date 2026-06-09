import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Download } from "lucide-react";

const timeline = [
  { year: "2024 — Now", role: "Senior Product Designer & Engineer", org: "Freelance / Contract", desc: "Designing & building AI-native dashboards and SaaS products end-to-end." },
  { year: "2022 — 2024", role: "Full Stack Developer", org: "TechCraft Studios", desc: "Led front-end architecture for fintech and e-commerce platforms." },
  { year: "2020 — 2022", role: "UI/UX Designer", org: "PixelForge Agency", desc: "Shipped 25+ product designs with 30% average conversion lift." },
  { year: "1 Month", role: "Full Stack Developer Intern", org: "Accent Techno Soft, Coimbatore", bullets: [
    "Gained hands-on experience in full stack web development using Python-based frameworks.",
    "Worked on developing and integrating frontend and backend components for web applications.",
    "Collaborated with the development team to build scalable and user-friendly web solutions.",
  ]},
];

const education = [
  { year: "2018 — 2022", degree: "B.Tech, Computer Science", org: "University of Technology" },
  { year: "2022", degree: "Google UX Design Certificate", org: "Coursera" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About me</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Designing with intent. <br />
            <span className="text-gradient">Building with care.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl glass-strong p-8 shadow-soft"
          >
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m Rithik — a designer-engineer hybrid based in Bengaluru. I&apos;ve spent
              the last 5+ years helping startups and studios turn ambiguous ideas into
              shipped products people love. My sweet spot is the seam between
              <span className="text-foreground"> craft and code</span> — where a polished
              design system meets a fast, accessible, well-tested codebase.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When I&apos;m not designing, I&apos;m exploring generative art, contributing to
              open source, or mentoring junior designers on building portfolios.
            </p>

            <a
              href="#resume"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-aurora px-5 py-2.5 text-sm font-medium text-white shadow-elegant hover:opacity-90 transition"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-4 w-4 text-cyan" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Experience</h3>
              </div>
              <div className="space-y-3">
                {timeline.map((t) => (
                  <div key={t.year} className="rounded-2xl glass p-5 hover:bg-white/5 transition">
                    <div className="text-xs text-muted-foreground">{t.year}</div>
                    <div className="mt-1 font-semibold">{t.role}</div>
                    <div className="text-sm text-gradient-bp">{t.org}</div>
                    {t.desc && <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>}
                    {t.bullets && (
                      <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                        {t.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-4 w-4 text-pink" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((e) => (
                  <div key={e.degree} className="rounded-2xl glass p-5">
                    <div className="text-xs text-muted-foreground">{e.year}</div>
                    <div className="mt-1 font-semibold">{e.degree}</div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
