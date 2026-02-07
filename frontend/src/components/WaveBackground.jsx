import "./WaveBackground.css";

const WaveBackground = () => {
  return (
    <div className="wave-container">
      {/* Background image via inline style (public/) */}
      <div
        className="bg-image"
        style={{ backgroundImage: "url(/bg3.jpg)" }}
      />

      {/* Dark overlay */}
      <div className="bg-overlay" />

      {/* Waves */}
      <svg
        className="wave-svg"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C240,160 480,260 720,220 960,180 1200,140 1440,180"
          className="wave wave-1"
        />
        <path
          d="M0,220 C300,180 520,300 800,260 1080,220 1240,200 1440,220"
          className="wave wave-2"
        />
        <path
          d="M0,240 C260,200 540,280 820,260 1100,240 1280,220 1440,240"
          className="wave wave-3"
        />
        <path
          d="M0,260 C280,220 580,300 880,280 1180,260 1320,240 1440,260"
          className="wave wave-4"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
