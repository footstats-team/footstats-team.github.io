import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNav = (hash: string) => {
    if (isHome) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      void navigate(`/#${hash.replace("#", "")}`);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
            <path
              d="M10 20c2-6 6-8 12-8"
              stroke="#00e676"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="22" cy="12" r="3" fill="#00e676" />
          </svg>
          <span>Footstats</span>
        </div>

        <p>© {new Date().getFullYear()} Footstats. All rights reserved.</p>

        <ul className="footer-links">
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
                void navigate("/blog");
              }}
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
