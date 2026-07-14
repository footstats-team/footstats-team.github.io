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

  // Parse markdown-ish content into JSX
  const renderContent = (markdown: string) => {
    return markdown
      .split("\n\n")
      .filter(Boolean)
      .map((block, i) => {
        const trimmed = block.trim();

        // Headers
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="blog-post-h3">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="blog-post-h2">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h1 key={i} className="blog-post-h1">
              {trimmed.replace("# ", "")}
            </h1>
          );
        }

        // Blockquote
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={i} className="blog-post-quote">
              {trimmed.replace(/^>\s?/gm, "").split("\n").join(" ")}
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
                      <th key={j}>{h}</th>
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
                          <td key={ci}>{cell.trim()}</td>
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
                <li key={li}>{item.replace(/^-\s+/, "")}</li>
              ))}
            </ul>
          );
        }

        // Ordered list
        if (/^\d+\.\s/.test(trimmed)) {
          return (
            <ol key={i} className="blog-post-ol">
              {trimmed.split("\n").map((item, li) => (
                <li key={li}>{item.replace(/^\d+\.\s+/, "")}</li>
              ))}
            </ol>
          );
        }

        // Horizontal rule
        if (trimmed === "---") {
          return <hr key={i} className="blog-post-hr" />;
        }

        // Paragraph
        return (
          <p key={i} className="blog-post-p">
            {trimmed}
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
