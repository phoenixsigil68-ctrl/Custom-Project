import { useEffect, useRef } from "react";
import { LandingPage } from "./landing-page";
import { data } from "../lib/data";
import { Link } from "react-router-dom";

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
          <Link
            to="/class/ધોરણ ૧"
            className="class-card"
            style={{ gridArea: "card-1", textDecoration: "none" }}
          >
            1
          </Link>
          <Link
            to="/class/ધોરણ ૯"
            className="class-card"
            style={{ gridArea: "card-2", textDecoration: "none" }}
          >
            2
          </Link>
          <Link
            to="/class/ધોરણ ૧૦"
            className="class-card"
            style={{ gridArea: "card-3", textDecoration: "none" }}
          >
            3
          </Link>
          <Link
            to="/class/ધોરણ ૧૧"
            className="class-card"
            style={{ gridArea: "card-4", textDecoration: "none" }}
          >
            4
          </Link>
        </div>
        <div className="class-container reveal">
          <Link
            className="class-card"
            style={{ gridArea: "card-1", textDecoration: "none" }}
            to="#"
          >
            5
          </Link>
          <Link
            className="class-card"
            style={{ gridArea: "card-2", textDecoration: "none" }}
            to="#"
          >
            6
          </Link>
          <Link
            className="class-card"
            style={{ gridArea: "card-3", textDecoration: "none" }}
            to="#"
          >
            7
          </Link>
          <Link
            className="class-card"
            style={{ gridArea: "card-4", textDecoration: "none" }}
            to="#"
          >
            8
          </Link>
        </div>
        <div className="class-container reveal">
          <Link
            className="class-card"
            style={{ gridArea: "card-1", textDecoration: "none" }}
            to="#"
          >
            9
          </Link>
          <Link
            className="class-card"
            style={{ gridArea: "card-2", textDecoration: "none" }}
            to="#"
          >
            10
          </Link>
          <Link
            className="class-card"
            style={{ gridArea: "card-3", textDecoration: "none" }}
            to="#"
          >
            11
          </Link>
          <Link
            className="class-card"
            style={{ gridArea: "card-4", textDecoration: "none" }}
            to="#"
          >
            12
          </Link>
        </div>
      </section>
    </div>
  );
}
