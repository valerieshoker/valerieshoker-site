// src/pages/TravelGuide.jsx
import { useParams, Link } from "react-router-dom";
import { getSpotBySlug } from "../data/travelSpots";
import "../style.css";

const PINTEREST_URL = "https://www.pinterest.com/valeries0";

export default function TravelGuide() {
  const { slug = "" } = useParams();
  const spot = getSpotBySlug(slug); 

  return (
    <div className="guide-wrapper">
      <h1>
        You’re early{spot ? ` — ${spot.label}` : ""} ✨
      </h1>
      <p className="lede">This guide isn’t published yet, but it’s brewing.</p>
      <p>
        In the meantime, check out my travel guides on Pinterest:&nbsp;
        <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">
          pinterest.com/valeries0 →
        </a>
      </p>
      <nav className="guide-nav" style={{ marginTop: 16 }}>
        <Link to="/travel" className="back">← Back to travel</Link>
      </nav>
    </div>
  );
}
