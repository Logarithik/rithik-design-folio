import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portrait from "@/assets/rithik-portrait.jpg";
import { useScrolled } from "@/hooks/use-scrolled";

const links = [
  { href: "#hero", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SERVICES" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];



export function Nav() {
  const nameVisible = useScrolled(120);
  const picVisible = useScrolled(500);
  const scrolled = nameVisible;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-soft" : ""
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 font-display font-semibold min-h-9">
            <motion.span
              initial={false}
              animate={{
                opacity: picVisible ? 1 : 0,
                scale: picVisible ? 1 : 0.6,
                width: picVisible ? 36 : 0,
                marginRight: picVisible ? 8 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative block h-9 rounded-full overflow-hidden ring-2 ring-gold/60"
            >
              <img
                src={portrait}
                alt="Rithik"
                className="h-9 w-9 object-cover"
              />
            </motion.span>
            <motion.span
              initial={false}
              animate={{ opacity: nameVisible ? 1 : 0, x: nameVisible ? 0 : -8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-gold text-lg tracking-tight"
            >
              LOGARITHIK T
            </motion.span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-colors hover:bg-gold/15 hover:text-gold ${
                  active === l.href
                    ? "text-gold bg-gold/10"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>


          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-lg glass"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl glass-strong p-3"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
