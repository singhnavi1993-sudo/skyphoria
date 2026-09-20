import React, { useEffect, useState } from 'react';
import './BlogSection.css';
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WP_API = "https://admin.skyphoriadigital.com/wp-json/wp/v2/blogs?per_page=3&_embed";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(WP_API)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  // React Slick settings with item count based on breakpoint
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  // Render carousel for <=600px, otherwise grid
  const isMobile = window.innerWidth <= 600;

  return (
    <section className="blog-section">
      <div className="blog-heading">
        <span className="blog-label">BLOG</span>
        <h2>
          Stay ahead with expert marketing<br />
          insights and strategies
        </h2>
      </div>

      {isMobile ? (
        <Slider {...sliderSettings} className="blog-cards-row">
          {posts.map(post => {
            const image =
              post._embedded && post._embedded['wp:featuredmedia']
                ? post._embedded['wp:featuredmedia'][0].source_url
                : 'https://via.placeholder.com/600x400?text=No+Image';

            return (
              <Link key={post.id} to={`/blog/${post.slug}`} className="blog-link">
                <div className="blog-card">
                  <div
                    className="blog-card-image"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className="blog-card-details">
                    <div className="blog-card-date">
                      {new Date(post.date).toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </div>
                    <div
                      className="blog-card-title"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      ) : (
        <div className="blog-cards-row">
          {posts.map(post => {
            const image =
              post._embedded && post._embedded['wp:featuredmedia']
                ? post._embedded['wp:featuredmedia'][0].source_url
                : 'https://via.placeholder.com/600x400?text=No+Image';

            return (
              <Link key={post.id} to={`/blog/${post.slug}`} className="blog-link">
                <div className="blog-card">
                  <div
                    className="blog-card-image"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className="blog-card-details">
                    <div className="blog-card-date">
                      {new Date(post.date).toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </div>
                    <div
                      className="blog-card-title"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
