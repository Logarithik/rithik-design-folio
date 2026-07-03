import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Award, FileText, X } from "lucide-react";

const RESUME_URL = "/resume.pdf";
const RESUME_FILENAME = "LOGARITHIK_T_Resume.pdf";

const certifications = [
  { name: "Data Science Methodology – IBM, Coursera", year: "Sep – Oct 2025" },
  { name: "Data Structures and Management with MySQL – Meta, Coursera", year: "Apr – May 2025" },
];

export function Resume() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

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
                <h3 className="font-display text-xl font-semibold">{RESUME_FILENAME}</h3>
                <p className="text-xs text-muted-foreground">Updated · PDF</p>
              </div>
            </div>

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
                href={RESUME_URL}
                download={RESUME_FILENAME}
                className="inline-flex items-center gap-2 rounded-xl bg-aurora px-5 py-2.5 text-sm font-medium text-white shadow-elegant hover:opacity-90 transition"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
              >
                View Online
              </button>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-7"
          >
            <div className="rounded-3xl glass-strong p-7">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-4 w-4 text-gold" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <li key={c.name} className="flex flex-col gap-1 text-sm">
                    <span className="text-foreground">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden bg-[#0B1020] border border-white/10 shadow-elegant flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium">{RESUME_FILENAME}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={RESUME_URL}
                    download={RESUME_FILENAME}
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs bg-gold/15 text-gold hover:bg-gold/25 transition"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10 transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-auto bg-black/40">
                <object data={RESUME_URL} type="application/pdf" className="w-full h-full">
                  <iframe src={RESUME_URL} title="Resume" className="w-full h-full" />
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
