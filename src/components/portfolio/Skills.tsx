import { motion } from "framer-motion";

const design = [
  { name: "Figma", level: 98 },
  { name: "Wireframing", level: 95 },
  { name: "Prototyping", level: 92 },
  { name: "User Research", level: 88 },
  { name: "Design Systems", level: 96 },
];

const stack = [
  { name: "React", level: 96 },
  { name: "Next.js", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 82 },
  { name: "MySQL", level: 80 },
  { name: "Java", level: 78 },
  { name: "Python", level: 76 },
  { name: "HTML / CSS / JS", level: 98 },
];

function SkillCard({ name, level, accent }: { name: string; level: number; accent: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl glass p-5 hover:bg-white/[0.07] transition-all"
    >
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"
        style={{ background: accent }}
      />
      <div className="flex items-center justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: accent }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Skills</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Tools I use to <span className="text-gradient">ship great work</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A dual stack — design fluency on the left, engineering depth on the right.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl glass-strong p-7 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: "var(--grad-purple-pink)" }}>
                <span className="text-lg">🎨</span>
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">Design</h3>
                <p className="text-xs text-muted-foreground">UI/UX, research, systems</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {design.map((s) => (
                <SkillCard key={s.name} {...s} accent="var(--grad-purple-pink)" />
              ))}
            </div>
          </div>

          <div className="rounded-3xl glass-strong p-7 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: "var(--grad-cyan-blue)" }}>
                <span className="text-lg">⚡</span>
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">Full Stack</h3>
                <p className="text-xs text-muted-foreground">Front-end, back-end, data</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {stack.map((s) => (
                <SkillCard key={s.name} {...s} accent="var(--grad-cyan-blue)" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
