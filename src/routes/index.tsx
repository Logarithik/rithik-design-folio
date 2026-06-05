import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBg } from "@/components/portfolio/AnimatedBg";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rithik — UI/UX Designer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Premium portfolio of Rithik — a UI/UX designer and full stack developer crafting elegant, fast, and modern digital products.",
      },
      { property: "og:title", content: "Rithik — UI/UX Designer & Full Stack Developer" },
      {
        property: "og:description",
        content: "Premium portfolio showcasing design systems, SaaS dashboards, and modern web apps.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBg />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
