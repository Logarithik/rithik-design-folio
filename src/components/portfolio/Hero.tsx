import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Figma, Code2, Palette } from "lucide-react";
import portrait from "@/assets/rithik-portrait.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Available for new projects · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            <span className="block">Hi, I&apos;m Rithik —</span>
            <span className="block text-gradient">UI/UX Designer</span>
            <span className="block">
              & <span className="text-gradient-bp">Full Stack Developer</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            I craft elegant digital experiences and ship production-grade web apps —
            blending pixel-perfect design with scalable engineering. Currently obsessed
            with motion, design systems, and AI-native interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-aurora px-6 py-3 text-sm font-medium text-white shadow-elegant hover:opacity-95 transition"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { k: "5+", v: "Years experience" },
              { k: "40+", v: "Projects shipped" },
              { k: "20+", v: "Happy clients" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto w-full max-w-md aspect-square">
            {/* glow ring */}
            <div className="absolute inset-0 rounded-[2rem] bg-aurora blur-2xl opacity-60" />
            <div className="absolute inset-0 rounded-[2rem] bg-aurora animate-spin-slow opacity-40" />
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden glass-strong p-2">
              <img
                src={portrait}
                alt="Rithik — UI/UX Designer & Full Stack Developer"
                width={896}
                height={1152}
                className="h-full w-full rounded-[1.75rem] object-cover"
              />
            </div>

            {/* Floating UI chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 rounded-2xl glass-strong p-3 shadow-elegant flex items-center gap-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-aurora">
                <Figma className="h-4 w-4 text-white" />
              </span>
              <div>
                <div className="text-xs font-semibold">Design System v2</div>
                <div className="text-[10px] text-muted-foreground">Shipped today</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/3 rounded-2xl glass-strong p-3 shadow-elegant flex items-center gap-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl"
                style={{ background: "var(--grad-cyan-blue)" }}>
                <Code2 className="h-4 w-4 text-white" />
              </span>
              <div>
                <div className="text-xs font-semibold">98% Lighthouse</div>
                <div className="text-[10px] text-muted-foreground">Performance</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 left-1/4 rounded-2xl glass-strong p-3 shadow-elegant flex items-center gap-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl"
                style={{ background: "var(--grad-purple-pink)" }}>
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <div>
                <div className="text-xs font-semibold">Awwwards 2025</div>
                <div className="text-[10px] text-muted-foreground">Site of the day</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-8 bottom-12 rounded-2xl glass-strong p-3 shadow-elegant flex items-center gap-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl"
                style={{ background: "var(--grad-blue-purple)" }}>
                <Palette className="h-4 w-4 text-white" />
              </span>
              <div>
                <div className="text-xs font-semibold">Brand kit ready</div>
                <div className="text-[10px] text-muted-foreground">12 components</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
