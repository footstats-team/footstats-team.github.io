import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar-logo">
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
            <path
              d="M10 20c2-6 6-8 12-8"
              stroke="#00e676"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="22" cy="12" r="3" fill="#00e676" />
            <path
              d="M14 22c-1-2-1-5 0-7"
              stroke="#00e676"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <span>Footstats</span>
        </a>

        <button
          className={`hamburger ${open ? "hamburger-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${open ? "navbar-links-open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#analytics" onClick={() => setOpen(false)}>
              Data
            </a>
          </li>
          <li>
            <a href="#highlights" onClick={() => setOpen(false)}>
              Highlights
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-cta" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
