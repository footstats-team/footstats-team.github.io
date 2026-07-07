export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-label">About Footstats</div>

        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              The football
              <br />
              analytics platform for academies
            </h2>
            <p>
              Founded in Shenzhen, Footstats is a one-stop platform for football academies seeking
              data-driven insights and professional highlight production. We combine computer vision
              and AI to automatically detect key events in matches and training sessions, generating
              detailed reports and polished highlights.
            </p>
            <p>
              Whether it's individual player statistics, team tactics analysis, or training
              effectiveness — Footstats gives coaches and administrators clear, actionable insights
              to help young players develop faster.
            </p>
          </div>

          <div className="about-stats">
            <div className="about-stat-card">
              <h3>2026</h3>
              <p>Founded in Shenzhen</p>
            </div>
            <div className="about-stat-card">
              <h3>AI-Powered</h3>
              <p>Auto event recognition</p>
            </div>
            <div className="about-stat-card">
              <h3>Real-time</h3>
              <p>Analysis & feedback</p>
            </div>
            <div className="about-stat-card">
              <h3>All-in-one</h3>
              <p>Analytics & highlights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
