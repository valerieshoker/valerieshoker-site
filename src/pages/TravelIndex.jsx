// src/pages/TravelIndex.jsx
import { Link } from "react-router-dom";
import { travelSpots } from "../data/travelSpots";
import "../style.css";

const REGIONS = [
  { key: "na",   title: "North America", banner: "/images/banners/na1.jpg",   objectY: "47%", speed: 38 },
  { key: "eu",   title: "Europe",        banner: "/images/banners/eu.jpg",    objectY: "6%", speed: 44 },
  { key: "asia", title: "Asia",          banner: "/images/banners/asia2.jpg", objectY: "80%", speed: 40 },
];

function Belt({ spots, speed = 40 }) {
  const loop = [...spots, ...spots]; 
  return (
    <div className="belt">
      <div className="belt-track" style={{ ["--belt-speed"]: `${speed}s` }}>
        {loop.map((s, i) => (
          <Link key={s.slug + "-" + i} to={`/travel/${s.slug}`} className="belt-card">
            <div className="belt-title">{s.label}</div>
            {s.country && <div className="belt-sub">{s.country}</div>}
            {s.short && <p className="belt-teaser">{s.short}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function TravelIndex() {
  return (
    <div className="index-wrapper">
      <h1 className="page-title">All Travel Guides</h1>

      {REGIONS.map((r) => {
        const spots = travelSpots.filter((s) => s.region === r.key);
        if (!spots.length) return null;
        return (
          <section key={r.key} className="region">
            {/* ✅ Banner OUTSIDE the belt (static) */}
            <div className="region-banner">
              <img
                src={r.banner}
                alt={`${r.title} banner`}
                loading="lazy"
                className="banner-img"
                style={{ objectPosition: `center ${r.objectY || "50%"}` }}
              />
              <div className="region-overlay">
                <h2>{r.title}</h2>
                <p>rolling recs →</p>
              </div>
            </div>

            <Belt spots={spots} speed={r.speed} />
          </section>
        );
      })}
    </div>
  );
}
