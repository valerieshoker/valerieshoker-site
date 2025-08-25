
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate, Link } from "react-router-dom";
import { travelSpots } from "../data/travelSpots";
import "../style.css";

export default function GlobePage() {
  const mapRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (mapRef.current) return; 

    const map = L.map("map", { zoomControl: true, worldCopyJump: true })
      .setView([20, 0], 2);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    const DefaultIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    travelSpots.forEach((spot) => {
      const popupHtml = `
        <div class="popup">
          <strong>${spot.label}</strong>
          ${spot.country ? `<div class="country">${spot.country}</div>` : ""}
          ${spot.short ? `<div class="teaser">${spot.short}</div>` : ""}
          <a class="popup-link" data-slug="${spot.slug}" href="/travel/${spot.slug}">Open guide →</a>
        </div>`;

      L.marker([spot.lat, spot.lon]).addTo(map).bindPopup(popupHtml);
    });

    map.on("popupopen", (e) => {
      const node = e?.popup?.getElement();
      if (!node) return;
      const link = node.querySelector(".popup-link");
      if (!link) return;
      link.addEventListener("click", (evt) => {
        evt.preventDefault();
        const slug = link.getAttribute("data-slug");
        if (slug) navigate(`/travel/${slug}`);
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [navigate]);

  return (
    <div className="travel-wrapper">
      <header className="travel-hero">
        <h1>Globe</h1>
        <p>Pins → guides → memories.</p>
      </header>

      <div id="map" className="map" />

      <section className="travel-grid">
        <h2>All Guides</h2>
        <div className="cards">
          {travelSpots.map((s) => (
            <Link key={s.slug} to={`/travel/${s.slug}`} className="card">
              <div className="card-title">{s.label}</div>
              {s.country && <div className="card-sub">{s.country}</div>}
              {s.short && <p className="card-teaser">{s.short}</p>}
            </Link>
          ))}
        </div>
      </section>

      <footer className="travel-foot">
        <Link to="/" className="back">← Back to home</Link>
      </footer>
    </div>
  );
}
