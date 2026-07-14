import { blogPosts } from "../blog/posts";

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-label">Blog</div>
        <h2 className="section-title">Academy insights from Shenzhen & Hong Kong</h2>
        <p className="section-subtitle">
          Stories, analysis, and guides from the football academies we work with across the Greater
          Bay Area.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <a key={post.slug} href={`/#/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-author">{post.author}</span>
                <span className="blog-read-more">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10m0 0L9 4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
