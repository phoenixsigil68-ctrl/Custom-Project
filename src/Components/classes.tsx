import { useEffect, useRef } from "react";
import { LandingPage } from "./landing-page";
import { data } from "../lib/data";

export function Classes() {
  let section = document.querySelectorAll(".section-title");
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    // Animate class-cards
    const cards = root.querySelectorAll<HTMLDivElement>(".class-card");
    const cardObserver = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            card.classList.add("visible");
            observer.unobserve(card); // Stop observing after first reveal
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((card) => cardObserver.observe(card));

    // Animate section-title only once when in viewport
    const sectionTitle = root.querySelector<HTMLDivElement>(".section-title");
    let titleObserver: IntersectionObserver | undefined;
    if (sectionTitle) {
      titleObserver = new window.IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              sectionTitle.classList.add("reveal");
              observer.unobserve(sectionTitle);
            }
          });
        },
        { threshold: 0.3 }
      );
      titleObserver.observe(sectionTitle);
    }
    return () => {
      cardObserver.disconnect();
      if (titleObserver) titleObserver.disconnect();
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const classNameValue = e.currentTarget.dataset.item;
    const found = data.find((item) => item.className === classNameValue);
    if (found) {
      console.log(`Subjects: ${found.subjects.join(", ")}`);
    } else {
      console.log("Content is not available");
    }
  };

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
          <div
            className="class-card"
            style={{ gridArea: "card-1" }}
            data-item="ધોરણ ૧"
            onClick={handleCardClick}
          >
            1
          </div>
          <div
            className="class-card"
            style={{ gridArea: "card-2" }}
            data-item="ધોરણ ૯"
            onClick={handleCardClick}
          >
            2
          </div>
          <div
            className="class-card"
            style={{ gridArea: "card-3" }}
            data-item="ધોરણ ૩"
            onClick={handleCardClick}
          >
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
