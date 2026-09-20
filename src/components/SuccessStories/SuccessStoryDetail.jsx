import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SuccessStoryDetail.css";
import DOMPurify from "dompurify";

const SuccessStoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://admin.skyphoriadigital.com/wp-json/wp/v2/success-stories/${id}?_embed`)
      .then(res => {
        setStory(res.data);
      })
      .catch(() => setStory(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="story-detail-loading">Loading...</div>;
  if (!story) return <div className="story-detail-error">Story not found.</div>;

  // Extract fields as in your grid
  const { title, content, _embedded, acf = {} } = story;
  const percent = acf.percent || acf.growth_percent || "";
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
    <div className="story-detail-bg">
    <section className="story-detail-section">
      <div
        className="story-detail-header"
        style={{ backgroundImage: `url(${featuredImageUrl})` }}
      >
        <h1 className="story-detail-title">{title?.rendered}</h1>
        {percent && (<div className="story-detail-percent">{percent}</div>)}
        {desc && (<div className="story-detail-desc">{desc}</div>)}
        {tags.length > 0 && (
          <div className="story-detail-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="story-detail-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div
        className="story-detail-content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content?.rendered) }}
      />
    </section>
    </div>
  );
};

export default SuccessStoryDetail;
