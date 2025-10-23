import { useState, useEffect } from "react";

export default function CoffeePage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === "coffeeModal") {
        setShowModal(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div style={{
      fontFamily: "Georgia, serif",
      backgroundColor: "#fefaf5",
      color: "#2e2b29",
      textAlign: "center",
      padding: "60px 30px"
    }}>
      <div style={{
        backgroundColor: "#f7f1eb",
        padding: "30px",
        borderRadius: "12px",
        maxWidth: "500px",
        margin: "0 auto 40px",
        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.05)"
      }}>
        <h2>Coffee Shop Recs</h2>
        <p>
          Here are some of my favorite spots! You’ll usually find me there writing, working, or chatting!
        </p>
        <button
          className="coffee-button"
          style={{
            fontSize: "1em",
            padding: "10px 22px",
            backgroundColor: "#dfd4c7",
            color: "#2e2b29",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
          onClick={() => setShowModal(true)}
        >
          Let’s get coffee
        </button>
      </div>

      {showModal && (
        <div
          id="coffeeModal"
          style={{
            display: "block",
            position: "fixed",
            zIndex: 10,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)"
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fffaf5",
              margin: "15% auto",
              padding: "20px",
              border: "1px solid #888",
              width: "80%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              textAlign: "left"
            }}
          >
            <span
              className="close"
              style={{
                color: "#888",
                float: "right",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h3>My Favorite Cafés</h3>
            <ul style={{ paddingLeft: "20px", listStyleType: "disc", color: "#5a4a42" }}>
              <li><strong>The Caffè by Mr. Espresso</strong> (Downtown Oakland)</li>
              <li><strong>Ritual Coffee</strong> (Mission, SF)</li>
              <li><strong>Delah Coffee</strong> (SF)</li>
            </ul>
            <p style={{ marginTop: "1em", fontStyle: "italic", color: "#2e2b29" }}>
              Trying a new one every weekend while I build 👩🏽‍💻 open to recs (wifi pls)
            </p>
          </div>
        </div>
      )}

      <a
        className="back-link"
        href="/"
        style={{
          display: "block",
          marginTop: "40px",
          fontSize: "0.95em",
          color: "#5a4a42",
          textDecoration: "none"
        }}
      >
        Back to home
      </a>
    </div>
  );
}