import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

const socials = [Linkedin, Github, Twitter, Dribbble];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-[0.08]" />
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-aurora text-sm font-bold">R</span>
            <div>
              <div className="font-display font-semibold">Rithik</div>
              <div className="text-xs text-muted-foreground">UI/UX Designer & Full Stack Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rithik. Crafted with care & caffeine.</p>
          <p>Designed & built from scratch · v1.0</p>
        </div>
      </div>
    </footer>
  );
}
