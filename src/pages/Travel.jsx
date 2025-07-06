import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Travel() {
  useEffect(() => {
    const map = L.map("map").setView([20, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const travelSpots = [
      { lat: 21.3069, lon: -157.8583, label: "Hawaii" },
      { lat: 47.6062, lon: -122.3321, label: "Seattle", link: "/travelpages/seattle.html" },
      { lat: 45.5152, lon: -122.6784, label: "Portland", link: "/travelpages/portland.html" },
      { lat: 37.7749, lon: -122.4194, label: "San Francisco", link: "/travelpages/sf.html" },
      { lat: 34.0522, lon: -118.2437, label: "Los Angeles", link: "/travelpages/la.html" },
      { lat: 32.7767, lon: -96.797, label: "Dallas", link: "/travelpages/dallas.html" },
      { lat: 41.8781, lon: -87.6298, label: "Chicago", link: "/travelpages/chicago.html" },
      { lat: 40.7128, lon: -74.006, label: "New York City", link: "/travelpages/nyc.html" },
      { lat: 51.5074, lon: -0.1278, label: "London", link: "/travelpages/london.html" },
      { lat: 48.8566, lon: 2.3522, label: "Paris", link: "/travelpages/paris.html" },
      { lat: 43.7102, lon: 7.262, label: "Nice", link: "/travelpages/nice.html" },
      { lat: 43.7384, lon: 7.4246, label: "Monaco", link: "/travelpages/monaco.html" },
      { lat: 41.3851, lon: 2.1734, label: "Barcelona", link: "/travelpages/barca.html" },
      { lat: 40.4168, lon: -3.7038, label: "Madrid", link: "/travelpages/madrid.html" },
      { lat: 38.7169, lon: -9.1399, label: "Lisbon", link: "/travelpages/lisbon.html" },
      { lat: 52.3676, lon: 4.9041, label: "Amsterdam", link: "/travelpages/ams.html" },
      { lat: 50.8503, lon: 4.3517, label: "Brussels", link: "/travelpages/brussels.html" },
      { lat: 51.0924, lon: 4.3645, label: "Boom", link: "/travelpages/boom.html" },
      { lat: 50.1109, lon: 8.6821, label: "Frankfurt", link: "/travelpages/frankfurt.html" },
      { lat: 48.1351, lon: 11.582, label: "Munich", link: "/travelpages/munich.html" },
      { lat: 52.52, lon: 13.405, label: "Berlin", link: "/travelpages/berlin.html" },
      { lat: 47.3769, lon: 8.5417, label: "Zurich", link: "/travelpages/zurich.html" },
      { lat: 46.2044, lon: 6.1432, label: "Geneva", link: "/travelpages/geneva.html" },
      { lat: 37.9838, lon: 23.7275, label: "Athens", link: "/travelpages/athens.html" },
      { lat: 36.3932, lon: 25.4615, label: "Santorini", link: "/travelpages/santorini.html" },
      { lat: 1.3521, lon: 103.8198, label: "Singapore", link: "/travelpages/singapore.html" },
      { lat: 3.139, lon: 101.6869, label: "Kuala Lumpur", link: "/travelpages/kl.html" },
      { lat: -8.3405, lon: 115.092, label: "Bali", link: "/travelpages/bali.html" },
      { lat: 25.0329, lon: 121.5654, label: "Taipei", link: "/travelpages/taipei.html" },
      { lat: 37.5665, lon: 126.978, label: "Seoul", link: "/travelpages/seoul.html" },
      { lat: 35.6895, lon: 139.6917, label: "Tokyo", link: "/travelpages/tokyo.html" },
      { lat: 35.0116, lon: 135.7681, label: "Kyoto", link: "/travelpages/kyoto.html" },
      { lat: 34.6851, lon: 135.8048, label: "Nara", link: "/travelpages/nara.html" },
    ];

    travelSpots.forEach((spot) => {
      const popupContent = `<b>${spot.label}</b>` +
        (spot.link ? `<br><a href="${spot.link}">Travel guide</a>` : "");
      L.marker([spot.lat, spot.lon])
        .addTo(map)
        .bindPopup(popupContent);
    });
  }, []);

  return (
    <div className="page-wrapper travel-wrapper" style={{ maxWidth: "900px", margin: "80px auto", padding: "40px", fontFamily: "Georgia, serif", lineHeight: 1.6, textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5em" }}>🌍 Travel</h1>
      <p style={{ fontSize: "1.1em", marginBottom: "30px" }}>An interactive travel map is coming soon — pins, guides, photos, and everything in between.</p>
      <div id="map" style={{ width: "100%", height: "500px", borderRadius: "12px", margin: "40px 0" }}></div>
      <p style={{ fontSize: "0.95em", color: "#666" }}>Each pin will link to personal travel guides, journal notes, and literary inspirations. Think Substack essays, Polaroid snapshots, and digital washi-taped scrapbooks.</p>
      <p style={{ marginTop: "60px", fontSize: "1em", fontStyle: "italic", color: "#8b7c72" }}>Stay tuned. This one's big.</p>
      <a href="/" style={{ display: "block", marginTop: "40px", fontSize: "0.95em", color: "#5a4a42", textDecoration: "none" }}>← Back to home</a>
    </div>
  );
}
