const features = [
  {
    icon: "🎯",
    title: "AI Event Recognition",
    desc: "Automatically detect goals, shots, passes, tackles and more. No manual tagging — saves coaches hours every session.",
  },
  {
    icon: "📊",
    title: "Player Tracking",
    desc: "Track distance covered, pass accuracy, shot attempts, and other key metrics. Watch each player's development over time.",
  },
  {
    icon: "🎬",
    title: "Smart Highlight Reels",
    desc: "One-click generation of match and training highlights. AI selects the best moments — ready to export and share.",
  },
  {
    icon: "📋",
    title: "Auto-Generated Reports",
    desc: "Every training session produces a detailed analysis report with individual and team-level statistics.",
  },
  {
    icon: "🏃",
    title: "Tactical Heatmaps",
    desc: "Position-based activity heatmaps that reveal player coverage areas, movement patterns, and tactical habits.",
  },
  {
    icon: "📱",
    title: "Cross-Platform Access",
    desc: "Syncs across web and mobile. Coaches, players, and parents can view the latest data and reports anytime.",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-label">Core Features</div>
        <h2 className="section-title">Everything an academy needs</h2>
        <p className="section-subtitle">
          From data capture to analysis reports — Footstats covers the full training and match
          workflow.
        </p>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
