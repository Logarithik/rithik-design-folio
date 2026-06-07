import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import portrait from "@/assets/rithik-portrait.jpg";
import { useScrolled } from "@/hooks/use-scrolled";

const tags = ["#Branding", "#UI/UX Design", "#Fullstack Developer", "#Web Designer"];

const testimonials = [
  {
    quote:
      "Navigating the portfolio feels natural — everything aligned and easy to use.",
  },
  {
    quote: "Rithik captured our vision, turning it into a polished website.",
  },
  {
    quote: "The experience feels smooth, fast — exactly how a portfolio should be.",
  },
  {
    quote: "Portfolio navigation feels effortless — everything aligned perfectly.",
  },
];

export function Hero() {
  const scrolled = useScrolled(120);
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-12">
      <div className="mx-auto max-w-7xl px-5">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center font-display font-extrabold tracking-tight leading-[0.95] text-[18vw] md:text-[12rem] lg:text-[14rem]"
        >
          <span className="text-foreground">RITHIK</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm md:text-base text-muted-foreground"
        >
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </motion.div>

        <div className="mt-14 grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden glass-strong p-2"
          >
            <div className="aspect-square w-full rounded-xl overflow-hidden grid-bg">
              <img
                src={portrait}
                alt="Rithik portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Welcome to my portfolio! I&apos;m Rithik, a UI/UX designer &
              full stack developer with years of experience. I craft visually
              stunning, functional websites that deliver exceptional user
              experiences.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black shadow-elegant hover:brightness-110 transition"
            >
              Start a Project Now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-8"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-2">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
