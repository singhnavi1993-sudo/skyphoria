import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "./BlogDetail.css"; // Create for custom styles

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(
        `https://admin.skyphoriadigital.com/wp-json/wp/v2/blogs?slug=${slug}&_embed`
      );
      const data = await res.json();
      if (data && data.length > 0) setBlog(data[0]);
    };
    fetchBlog();
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getImageUrl = (post) =>
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

  if (!blog) return <div>Loading...</div>;

  return (
    
    <div className="blog-detail-page">
      <div className="detail-header">
        <div className="detail-date">{formatDate(blog.date)}</div>
        <h1
          className="detail-title"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.title.rendered) }}
        />
        {blog.categories && blog.categories.length > 0 && (
          <div className="blog-category"> {/* optional: render category name if needed */} </div>
        )}
      </div>
      {getImageUrl(blog) && (
        <img
          className="detail-hero-img"
          src={getImageUrl(blog)}
          alt={blog.title.rendered}
        />
      )}
      <div
        className="detail-content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content.rendered) }}
      />
    </div>
  );
}
