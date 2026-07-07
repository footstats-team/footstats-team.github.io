export default function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="section-label">Get in Touch</div>
        <h2>Let data power your academy</h2>
        <p>
          Whether you're interested in a demo, partnering with us, or just want to learn more — we'd
          love to hear from you.
        </p>
        <div className="cta-actions">
          {/* Email */}
          <a href="mailto:foostatsinfo@gmail.com" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 4l6 4 6-4M2 4v8a1 1 0 001 1h10a1 1 0 001-1V4M2 4l6 4 6-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            foostatsinfo@gmail.com
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/85256029830"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 8a6 6 0 0 1 12 0 6 6 0 0 1-6 6c-.8 0-1.6-.2-2.3-.5L2 14l1.5-3.3A6 6 0 0 1 2 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6h4m-4 2h2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            WhatsApp +852 5602 9830
          </a>

          {/* WeChat */}
          <div className="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2C4.7 2 2 4.2 2 6.8c0 1.4.7 2.7 1.8 3.6L3 13l2.6-1.3c.7.2 1.5.4 2.4.4h.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="5.5" cy="6.5" r=".8" fill="currentColor" />
              <circle cx="8.5" cy="6.5" r=".8" fill="currentColor" />
            </svg>
            WeChat: federll
          </div>
        </div>
      </div>
    </section>
  );
}
