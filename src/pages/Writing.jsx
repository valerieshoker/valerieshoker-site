import { useEffect, useState } from "react";
import "../style.css";

export default function Writing() {
  return (
    <div style={{ fontFamily: 'Georgia, serif', backgroundColor: '#fefaf5', color: '#2e2b29', textAlign: 'center', padding: '60px 30px' }}>
      <div className="writing-header">
        <h2>My Writings</h2>
        <p>Mini essays and lists originally published on Substack, curated here for ease.</p>
      </div>

      <div className="article-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '30px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div className="article-card" style={{
          backgroundColor: '#f7f1eb',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'left',
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease'
        }}>
          <strong>The opposite of a perfect day</strong>
          <p className="article-excerpt" style={{ fontSize: '0.95em', color: '#5a4a42', marginBottom: '10px' }}>
            Some reflections on what losing my job, leaving the country with no itinerary, and walking around in mud-soaked jeans taught me about accidentally finding the perfect day.
          </p>
          <a className="read-more" href="https://valeriealoha.substack.com/p/the-opposite-of-a-perfect-day?r=y8vka" target="_blank" style={{ fontSize: '0.9em', color: '#887e76', textDecoration: 'underline' }}>
            Read on Substack:
          </a>
        </div>

        <div className="article-card" style={{
          backgroundColor: '#f7f1eb',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'left',
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease'
        }}>
          <strong>2025 books on my shelf: ongoing list of current and future reads</strong>
          <p className="article-excerpt" style={{ fontSize: '0.95em', color: '#5a4a42', marginBottom: '10px' }}>
            Just a reading list that I try to update as often as I can!
          </p>
          <a className="read-more" href="https://valeriealoha.substack.com/p/books-on-my-shelf-ongoing-list-of?r=y8vka" target="_blank" style={{ fontSize: '0.9em', color: '#887e76', textDecoration: 'underline' }}>
            Read on Substack
          </a>
        </div>
      </div>

      <a className="back-link" href="/" style={{
        display: 'block',
        marginTop: '40px',
        fontSize: '0.95em',
        color: '#5a4a42',
        textDecoration: 'none'
      }}>
        Back to home
      </a>
    </div>
  );
}
