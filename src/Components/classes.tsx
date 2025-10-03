import { useEffect, useRef } from "react";
import "../Styles/index.css";
import { LandingPage } from "./landing-page";
let animate = document.querySelector(".section-title");

export function Classes() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="dashboard">
      <section className="top-section">
        <div className="title">
          <h1 className="header">Welcome To Student Learning Portal</h1>
          <h3 className="guide">Here you'll learn with:</h3>
        </div>
      </section>
      <LandingPage />
      <div className="section-title">
        <h2
          className="section-header"
          style={{
            textAlign: "center",
            fontSize: "2rem",
            margin: "2rem 2rem 1rem 2rem",
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          Select Your Class
        </h2>
      </div>

      <section className="class-section">
        <div className="class-container" ref={containerRef}>
          <div className="class-card" style={{ gridArea: "card-1" }}>
            1
          </div>
          <div className="class-card" style={{ gridArea: "card-2" }}>
            2
          </div>
          <div className="class-card" style={{ gridArea: "card-3" }}>
            3
          </div>
          <div className="class-card" style={{ gridArea: "card-4" }}>
            4
          </div>
        </div>
        <div className="class-container reveal">
          <div className="class-card" style={{ gridArea: "card-1" }}>
            5
          </div>
          <div className="class-card" style={{ gridArea: "card-2" }}>
            6
          </div>
          <div className="class-card" style={{ gridArea: "card-3" }}>
            7
          </div>
          <div className="class-card" style={{ gridArea: "card-4" }}>
            8
          </div>
        </div>
        <div className="class-container reveal">
          <div className="class-card" style={{ gridArea: "card-1" }}>
            9
          </div>
          <div className="class-card" style={{ gridArea: "card-2" }}>
            10
          </div>
          <div className="class-card" style={{ gridArea: "card-3" }}>
            11
          </div>
          <div className="class-card" style={{ gridArea: "card-4" }}>
            12
          </div>
        </div>
      </section>
    </div>
  );
}
