export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated gradient fallback — shown when no video or while loading */}
      <div className="hero-bg-fallback" aria-hidden="true" />

      {/* Background video */}
      <video className="hero-video-bg" autoPlay muted loop playsInline poster="">
        <source src={`${import.meta.env.BASE_URL}videos/hero-bg.mp4`} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3" fill="currentColor" />
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            </svg>
            Shenzhen · AI-Powered Football Academy Platform
          </div>

          <h1>
            Data-driven training for
            <br />
            <span className="highlight">the next generation</span>
          </h1>

          <p>
            Footstats provides AI-powered analytics, automatic highlight generation, and player
            tracking for football academies. Every session, backed by data.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0L9 4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#highlights" className="btn btn-secondary">
              Watch Highlights
            </a>
          </div>

          <div className="stats-bar">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Academies onboarded</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Minutes analyzed</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Players tracked</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Data accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
