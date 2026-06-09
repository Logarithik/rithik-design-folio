import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Dribbble } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "logarithik@gmail.com", href: "mailto:logarithik@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9585485091", href: "tel:+919585485091" },
  { icon: MapPin, label: "Location", value: "Coimbatore, India", href: "#" },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Let&apos;s build something <span className="text-gradient">remarkable</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind, a role to fill, or just want to say hi? My inbox is open.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-7">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 rounded-3xl glass-strong p-8 shadow-soft space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Subject" placeholder="Project inquiry" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project, timeline, and goals…"
                className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-aurora px-6 py-3 text-sm font-medium text-white shadow-elegant hover:opacity-90 transition"
            >
              {sent ? "Message sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-3xl glass-strong p-7 space-y-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 rounded-2xl p-3 -m-3 hover:bg-white/5 transition"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-aurora">
                    <c.icon className="h-4 w-4 text-white" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-3xl glass-strong p-7">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Follow</div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group relative grid h-12 w-12 place-items-center rounded-xl glass hover:bg-white/10 transition"
                  >
                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-aurora blur-md -z-10" />
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
      />
    </div>
  );
}
