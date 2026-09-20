import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import DOMPurify from "dompurify";
import "./BlogPage.css";

export default function BlogPage() {
  const POSTS_PER_LOAD = 6;
  const [posts, setPosts] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_LOAD);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://admin.skyphoriadigital.com/wp-json/wp/v2/blogs?_embed&per_page=100"
        );
        const data = await response.json();

        if (data.length > 0) {
          setFeatured(data[0]);
          setPosts(data.slice(1));
        }
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };
    fetchPosts();
  }, []);

  const getFeaturedImage = (post) => {
    if (
      post &&
      post._embedded &&
      post._embedded["wp:featuredmedia"] &&
      post._embedded["wp:featuredmedia"][0].source_url
    ) {
      return post._embedded["wp:featuredmedia"][0].source_url;
    }
    return null;
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_LOAD);
  };

  if (!featured) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-page">
      {/* Featured Post */}
      <section className="featured-post">
        <div className="featured-wrapper">
          <Link to={`/blog/${featured.slug}`} className="featured-content" style={{ textDecoration: 'none' }}>
            <div className="post-date">{formatDate(featured.date)}</div>
            <div
              className="post-title"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(featured.title.rendered) }}
            ></div>
          </Link>
          <Link to={`/blog/${featured.slug}`} className="read-story">
            READ FULL STORY
          </Link>
        </div>
        <div className="featured-image">
          {getFeaturedImage(featured) && (
            <img src={getFeaturedImage(featured)} alt={featured.title.rendered} />
          )}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="recent-posts">
        {posts.slice(0, visibleCount).map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className="recent-post">
            {getFeaturedImage(post) && (
              <img src={getFeaturedImage(post)} alt={post.title.rendered} />
            )}
            <div className="post-info">
              <div className="post-date">{formatDate(post.date)}</div>
              <div
                className="post-title"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title.rendered) }}
              ></div>
            </div>
          </Link>
        ))}
      </section>

      {visibleCount < posts.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
