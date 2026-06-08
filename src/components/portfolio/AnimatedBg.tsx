import { useEffect, useState } from "react";

type Orb = {
  id: number;
  size: number;
  x: number; // 0-100 %
  y: number; // 0-100 %
  dx: number; // drift %
  dy: number;
  duration: number; // seconds
  hue: string;
  opacity: number;
};

const golds = [
  "#C9A84C",
  "#F0D78C",
  "#E5B958",
  "#FFD27A",
  "#B8902F",
];

let counter = 0;
function makeOrb(): Orb {
  counter += 1;
  const size = 180 + Math.random() * 380;
  return {
    id: counter,
    size,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dx: (Math.random() - 0.5) * 40,
    dy: (Math.random() - 0.5) * 40,
    duration: 10 + Math.random() * 12,
    hue: golds[Math.floor(Math.random() * golds.length)],
    opacity: 0.12 + Math.random() * 0.18,
  };
}

export function AnimatedBg() {
  const [orbs, setOrbs] = useState<Orb[]>(() =>
    Array.from({ length: 5 }, makeOrb)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs((prev) => {
        // remove oldest, add a new one
        const next = prev.slice(1);
        next.push(makeOrb());
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {orbs.map((o) => (
        <span
          key={o.id}
          className="orb"
          style={{
            width: o.size,
            height: o.size,
            left: `${o.x}%`,
            top: `${o.y}%`,
            background: `radial-gradient(circle, ${o.hue}, transparent 65%)`,
            opacity: 0,
            animation: `orb-life ${o.duration}s ease-in-out forwards`,
            ["--orb-opacity" as string]: o.opacity,
            ["--orb-dx" as string]: `${o.dx}%`,
            ["--orb-dy" as string]: `${o.dy}%`,
          }}
        />
      ))}
    </div>
  );
}
