import { useRef, useState } from "react";

function VideoCard({
  title,
  desc,
  tag,
  src,
}: {
  title: string;
  desc: string;
  tag: string;
  src: string;
}) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="video-card">
      <div className="video-wrapper">
        {failed ? (
          <div className="video-placeholder">
            <div className="play-icon">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M5 3l8 5-8 5V3z" fill="currentColor" />
              </svg>
            </div>
            <span>Video unavailable on this domain</span>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            onError={() => setFailed(true)}
          >
            <source
              src={`${import.meta.env.BASE_URL}${src}`}
              type="video/mp4"
            />
          </video>
        )}
      </div>
      <div className="video-info">
        <span className="video-tag">{tag}</span>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const highlights = [
  {
    title: "U15 Academy Match Analysis",
    desc: "Goal-scoring plays automatically detected and tagged by Footstats AI",
    tag: "Match Highlights",
    src: "videos/hero-bg.mp4",
  },
  {
    title: "Passing Drill — Skill Assessment",
    desc: "Automated drill analysis tracking pass accuracy, speed, and technique",
    tag: "Training Analysis",
    src: "videos/passing_drill.mp4",
  },
  {
    title: "Full Session Data Capture",
    desc: "Complete training session with AI-powered player tracking and heatmaps",
    tag: "Tech Demo",
    src: "videos/trim.mp4",
  },
];

export default function Highlights() {
  return (
    <section className="section section-alt" id="highlights">
      <div className="container">
        <div className="section-label">Highlights</div>
        <h2 className="section-title">Video meets data</h2>
        <p className="section-subtitle">
          See how Footstats transforms match footage into quantifiable insights.
        </p>

        <div className="video-grid">
          {highlights.map((h) => (
            <VideoCard key={h.title} {...h} />
          ))}
        </div>
      </div>
    </section>
  );
}
