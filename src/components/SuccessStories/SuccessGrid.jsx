import React, { useEffect, useState } from "react";
import "./SuccessGrid.css";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

const PAGE_SIZE = 9;

const SuccessStoriesGrid = () => {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1); // Track pagination
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there are more items

  useEffect(() => {
    // Initial load (first 9)
    fetchStories(1, true);
  }, []);

  const fetchStories = (pageToFetch = 1, replace = false) => {
    setLoading(true);
    axios
      .get(
        `https://admin.skyphoriadigital.com/wp-json/wp/v2/success-stories?per_page=${PAGE_SIZE}&page=${pageToFetch}&_embed`
      )
      .then(res => {
        if (replace) {
          setStories(res.data);
        } else {
          setStories(prev => [...prev, ...res.data]);
        }
        // If less than PAGE_SIZE, it's the last page.
        setHasMore(res.data.length === PAGE_SIZE);
        setPage(pageToFetch);
      })
      .catch(() => {
        setHasMore(false); // Prevent infinite try if error (like no more pages)
      })
      .finally(() => setLoading(false));
  };

  const handleLoadMore = () => {
    fetchStories(page + 1);
  };

  return (
    <section className="stories-section">
      <div className="stories-grid">
        {stories.map(story => {
          const {
            id,
            title,
            _embedded,
            acf = {},
          } = story;

          const percent = acf.percentage || acf.growth_percentage || "";
          const desc = acf.desc || acf.description || "";
          let tags = acf.tags || "";

          if (typeof tags === "string") {
            tags = tags.split(",").map(t => t.trim()).filter(Boolean);
          } else if (!Array.isArray(tags)) {
            tags = [];
          }

          const featuredMedia = _embedded?.["wp:featuredmedia"]?.[0];
          const featuredImageUrl = featuredMedia?.source_url || "";

          return (
            <Link to={`/success-story/${id}`}
              className="story-card"
              style={{
                backgroundImage: `url(${featuredImageUrl})`,
              }}
            >
              <div className="story-card__title">
                {title?.rendered || "No Title"}
              </div>
              <div className="story-card__overlay">
                <div className="story-card__main">
                  <span className="story-card__percent">{percent || "No %"}</span>
                  <span className="story-card__desc">{desc || "No Description"}</span>
                </div>
                <div className="story-card__bottom">
                  {tags.length > 0
                    ? tags.map((tag, index) => (
                      <span className="story-card__tag" key={index}>{tag}</span>
                    ))
                    : <span className="story-card__tag">No Tags</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {(hasMore || loading) && (
        <div className="load-more-wrap">
          <button className="load-more-btn" 
                  onClick={handleLoadMore} 
                  disabled={loading}>
            {loading && <span className="spinner" aria-hidden="true"></span>}
            {loading ? "LOADING..." : "LOAD MORE"}
          </button>
        </div>
      )}
    </section>
  );
};

export default SuccessStoriesGrid;
