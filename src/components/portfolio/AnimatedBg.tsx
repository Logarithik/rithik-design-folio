export function AnimatedBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="blob animate-blob"
        style={{
          width: 520,
          height: 520,
          top: "-10%",
          left: "-8%",
          background: "radial-gradient(circle, #C9A84C, transparent 60%)",
          opacity: 0.25,
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          width: 600,
          height: 600,
          top: "40%",
          right: "-15%",
          background: "radial-gradient(circle, #F0D78C, transparent 60%)",
          animationDelay: "-6s",
          opacity: 0.18,
        }}
      />
    </div>
  );
}
