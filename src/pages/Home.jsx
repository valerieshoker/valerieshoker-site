import { useEffect, useRef } from "react";
import "../style.css"; // Make sure the path is correct

const hotspots = [
  { shape: "rect", coords: [200, 160, 460, 610], href: "/projects", label: "Projects" },
  { shape: "circle", coords: [650, 185, 74], href: "/about", label: "About" },
  { shape: "circle", coords: [825, 355, 76], href: "/travel", label: "Travel" },
  { shape: "rect", coords: [650, 430, 750, 500], href: "/contact", label: "Contact" },
  { shape: "rect", coords: [530, 415, 580, 480], href: "/writing", label: "Writing" },
  { shape: "rect", coords: [750, 600, 950, 680], href: "/fun", label: "Cat Zone" }
];

export default function Home() {
  const overlayRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const overlay = overlayRef.current;
    if (!img || !overlay) return;

    function updateOverlayPosition() {
      overlay.style.top = img.offsetTop + "px";
      overlay.style.left = img.offsetLeft + "px";
      overlay.style.width = img.offsetWidth + "px";
      overlay.style.height = img.offsetHeight + "px";
    }

    overlay.style.position = "absolute";
    overlay.style.pointerEvents = "none";
    overlay.style.zIndex = "10";
    updateOverlayPosition();

    window.addEventListener("resize", updateOverlayPosition);
    return () => window.removeEventListener("resize", updateOverlayPosition);
  }, []);

  return (
    <div className="container">
      <img ref={imgRef} src="/images/livingroom2.jpg" alt="Homepage Map" className="homepage-img" />
      <div id="hotspots" ref={overlayRef}>
        {hotspots.map((h, i) => {
          const style = {
            position: "absolute",
            pointerEvents: "auto",
            textIndent: "-9999px",
          };

          if (h.shape === "rect") {
            const [x1, y1, x2, y2] = h.coords;
            Object.assign(style, {
              left: `${x1}px`,
              top: `${y1}px`,
              width: `${x2 - x1}px`,
              height: `${y2 - y1}px`,
            });
          } else if (h.shape === "circle") {
            const [cx, cy, r] = h.coords;
            Object.assign(style, {
              left: `${cx - r}px`,
              top: `${cy - r}px`,
              width: `${r * 2}px`,
              height: `${r * 2}px`,
              borderRadius: "50%",
            });
          }

          return (
            <a key={i} href={h.href} style={style} className="hotspot">
              {h.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
