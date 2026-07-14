import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNav = (hash: string) => {
    setOpen(false);
    if (isHome) {
      // On the home page — smooth scroll to section
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // On another page — go to home page first
      void navigate(`/#${hash.replace("#", "")}`);
    }
  };

  const handleBlog = () => {
    setOpen(false);
    void navigate("/blog");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a
          href="#/"
          className="navbar-logo"
          onClick={() => {
            setOpen(false);
            void navigate("/");
          }}
        >
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
          {isHome && (
            <>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#features");
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#analytics"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#analytics");
                  }}
                >
                  Data
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#highlights");
                  }}
                >
                  Highlights
                </a>
              </li>
            </>
          )}
          <li>
            <a
              href="#/blog"
              onClick={(e) => {
                e.preventDefault();
                handleBlog();
              }}
              className={location.pathname.startsWith("/blog") ? "nav-active" : ""}
            >
              Blog
            </a>
          </li>
          {isHome && (
            <li>
              <a
                href="#contact"
                className="navbar-cta"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
              >
                Get Started
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
