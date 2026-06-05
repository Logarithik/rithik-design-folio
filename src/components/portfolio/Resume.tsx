import { motion } from "framer-motion";
import { Download, Award, FileText, CheckCircle2 } from "lucide-react";

const achievements = [
  "Awwwards Site of the Day — 2025",
  "Top 1% on Behance, Web Design category",
  "Speaker · Config 2024 (Figma)",
  "Open-source contributor — 12+ shadcn community components",
];

const certifications = [
  { name: "Google UX Design Professional Certificate", year: "2022" },
  { name: "Meta Front-End Developer", year: "2023" },
  { name: "AWS Certified Cloud Practitioner", year: "2024" },
  { name: "Interaction Design Foundation — UX", year: "2023" },
];

export function Resume() {
  return (
    <section id="resume" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Resume</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            The <span className="text-gradient">short version</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-7">
          {/* Resume preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative rounded-3xl glass-strong p-8 shadow-elegant overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-aurora opacity-30 blur-3xl" />
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-aurora">
                <FileText className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">Rithik_Resume_2026.pdf</h3>
                <p className="text-xs text-muted-foreground">Updated · 2 pages · 312 KB</p>
              </div>
            </div>

            {/* Faux page */}
            <div className="mt-6 rounded-2xl bg-white/[0.03] border border-white/10 p-6 space-y-3">
              <div className="h-3 w-1/3 rounded bg-white/20" />
              <div className="h-2 w-2/3 rounded bg-white/10" />
              <div className="h-2 w-1/2 rounded bg-white/10" />
              <div className="mt-4 h-px bg-white/10" />
              <div className="grid grid-cols-3 gap-3 mt-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-12 rounded-lg bg-white/[0.04] border border-white/5" />
                ))}
              </div>
              <div className="mt-2 h-2 w-3/4 rounded bg-white/10" />
              <div className="h-2 w-2/3 rounded bg-white/10" />
              <div className="h-2 w-1/2 rounded bg-white/10" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-aurora px-5 py-2.5 text-sm font-medium text-white shadow-elegant hover:opacity-90 transition"
              >
                <Download className="h-4 w-4" /> Download PDF
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                View online
              </a>
            </div>
          </motion.div>

          {/* Achievements + certs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-7"
          >
            <div className="rounded-3xl glass-strong p-7">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-4 w-4 text-pink" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Achievements</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-cyan mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl glass-strong p-7">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-4 w-4 text-cyan" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-foreground">{c.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
