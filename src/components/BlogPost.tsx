import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../blog/posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section" style={{ paddingTop: "calc(var(--nav-height) + 80px)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Post not found</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 32px" }}>
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/blog")}>
            ← Back to Blog
          </button>
        </div>
      </section>
    );
  }

  // Render inline formatting (**bold**, *italic*)
  const renderInline = (text: string) => {
    const parts: Array<{ type: "text" | "bold" | "italic"; value: string }> = [];
    let remaining = text;
    const regex = /(\*\*|\*)(.+?)\1/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(remaining)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: "text", value: remaining.slice(lastIndex, match.index) });
      }
      const isBold = match[1] === "**";
      parts.push({ type: isBold ? "bold" : "italic", value: match[2] });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < remaining.length) {
      parts.push({ type: "text", value: remaining.slice(lastIndex) });
    }

    if (parts.length === 0) {
      return text;
    }

    return parts.map((part, i) => {
      if (part.type === "bold") return <strong key={i}>{part.value}</strong>;
      if (part.type === "italic") return <em key={i}>{part.value}</em>;
      return part.value;
    });
  };

  // Parse markdown-ish content into JSX
  const renderContent = (markdown: string) => {
    return markdown
      .split("\n\n")
      .filter(Boolean)
      .map((block, i) => {
        const trimmed = block.trim();

        // Headers
        // Headers (###### down to #)
        const headerMatch = trimmed.match(/^(#{1,6})\s(.+)$/);
        if (headerMatch) {
          const level = headerMatch[1].length;
          const text = headerMatch[2];
          const className = `blog-post-h${level}`;
          switch (level) {
            case 1:
              return (
                <h1 key={i} className={className}>
                  {renderInline(text)}
                </h1>
              );
            case 2:
              return (
                <h2 key={i} className={className}>
                  {renderInline(text)}
                </h2>
              );
            case 3:
              return (
                <h3 key={i} className={className}>
                  {renderInline(text)}
                </h3>
              );
            case 4:
              return (
                <h4 key={i} className={className}>
                  {renderInline(text)}
                </h4>
              );
            case 5:
              return (
                <h5 key={i} className={className}>
                  {renderInline(text)}
                </h5>
              );
            case 6:
              return (
                <h6 key={i} className={className}>
                  {renderInline(text)}
                </h6>
              );
          }
        }

        // Blockquote
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={i} className="blog-post-quote">
              {renderInline(trimmed.replace(/^>\s?/gm, "").split("\n").join(" "))}
            </blockquote>
          );
        }

        // Table
        if (trimmed.includes("|---")) {
          const lines = trimmed.split("\n");
          const headers = lines[0]
            .split("|")
            .filter(Boolean)
            .map((h) => h.trim());
          const bodyLines = lines.slice(2).filter((l) => l.trim());
          return (
            <div key={i} className="table-scroll" style={{ margin: "20px 0" }}>
              <table className="data-table">
                <thead>
                  <tr>
                    {headers.map((h, j) => (
                      <th key={j}>{renderInline(h)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyLines.map((line, ri) => (
                    <tr key={ri}>
                      {line
                        .split("|")
                        .filter(Boolean)
                        .map((cell, ci) => (
                          <td key={ci}>{renderInline(cell.trim())}</td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // Unordered list
        if (trimmed.startsWith("- ")) {
          return (
            <ul key={i} className="blog-post-ul">
              {trimmed.split("\n").map((item, li) => (
                <li key={li}>{renderInline(item.replace(/^-\s+/, ""))}</li>
              ))}
            </ul>
          );
        }

        // Ordered list
        if (/^\d+\.\s/.test(trimmed)) {
          return (
            <ol key={i} className="blog-post-ol">
              {trimmed.split("\n").map((item, li) => (
                <li key={li}>{renderInline(item.replace(/^\d+\.\s+/, ""))}</li>
              ))}
            </ol>
          );
        }

        // Embedded video
        const videoMatch = trimmed.match(/^<<video:(.+)>>$/);
        if (videoMatch) {
          return (
            <div key={i} className="blog-post-video-wrapper">
              <video
                className="blog-post-video"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={`${import.meta.env.BASE_URL}${videoMatch[1]}`} type="video/mp4" />
              </video>
            </div>
          );
        }

        // Horizontal rule
        if (trimmed === "---") {
          return <hr key={i} className="blog-post-hr" />;
        }

        // Paragraph
        return (
          <p key={i} className="blog-post-p">
            {renderInline(trimmed)}
          </p>
        );
      });
  };

  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-height) + 60px)" }}>
      <div className="container">
        <button className="blog-back-btn" onClick={() => navigate("/blog")}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 8H3m0 0l4 4M3 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Blog
        </button>

        <article className="blog-post-article">
          <div className="blog-post-header">
            <div className="blog-card-meta">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-excerpt">{post.excerpt}</p>
            <div className="blog-post-author">
              <div className="blog-post-author-avatar">{post.author.charAt(0)}</div>
              <div>
                <span className="blog-post-author-name">{post.author}</span>
                <span className="blog-post-author-date">{post.date}</span>
              </div>
            </div>
          </div>

          <div className="blog-post-body">{renderContent(post.content)}</div>
        </article>
      </div>
    </section>
  );
}
