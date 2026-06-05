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
          background: "radial-gradient(circle, #6366F1, transparent 60%)",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          width: 600,
          height: 600,
          top: "30%",
          right: "-15%",
          background: "radial-gradient(circle, #8B5CF6, transparent 60%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          width: 480,
          height: 480,
          bottom: "-12%",
          left: "30%",
          background: "radial-gradient(circle, #EC4899, transparent 60%)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          width: 420,
          height: 420,
          top: "60%",
          left: "-5%",
          background: "radial-gradient(circle, #06B6D4, transparent 60%)",
          animationDelay: "-3s",
        }}
      />
    </div>
  );
}
