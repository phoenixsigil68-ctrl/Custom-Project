import { useEffect, useRef } from "react";
import { LandingPage } from "./landing-page";

export function Classes() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = root.querySelectorAll<HTMLDivElement>(".class-card");
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            card.classList.add("visible");
          } else {
            card.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((card: HTMLDivElement) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dashboard" ref={rootRef}>
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
        <div className="class-container">
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
