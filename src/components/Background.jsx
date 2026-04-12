export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-ambient-glow" />
      <div className="bg-orb-orange" />
      <div className="bg-orb-gray" />
      <div className="bg-orb-soft" />
      <div className="bg-noise" />
    </div>
  );
}
