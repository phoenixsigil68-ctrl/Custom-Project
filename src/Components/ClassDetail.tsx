import { useParams } from "react-router-dom";
import { data } from "../lib/data";
import "../Styles/subject.css";
import React from "react";
import { Pi, Atom, Book, BookHeart, SpellCheck2 } from "lucide-react";

export function ClassDetail() {
  const { className } = useParams();
  const found = data.find((item) => item.className === className);

  if (!found) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
        Class not found.
      </div>
    );
  }

  let gridNumber = Array.from(
    { length: found.subjects.length },
    (_, i) => i + 1
  );

  let iconNumber = [
    {
      subject: "ગણિત",
      icon: Pi,
    },
    {
      subject: "વિજ્ઞાન",
      icon: Atom,
    },
    {
      subject: "સામાજિક વિજ્ઞાન",
      icon: Book,
    },
    {
      subject: "ગુજરાતી",
      icon: BookHeart,
    },
    {
      subject: "અંગ્રેજી",
      icon: SpellCheck2,
    },
  ];

  iconNumber.forEach((icon) => {
    found.subjects.forEach((subject, index) => {
      if (icon.subject === subject) {
        return icon.icon;
      }
    });
  });

  let subjectFound = found.subjects.map((subject, i) => (
    <div className="subjects">
      <div className="icons">
        {iconNumber.find((icon) => icon.subject === subject)?.icon ? (
          <span>
            {React.createElement(
              iconNumber.find((icon) => icon.subject === subject)!.icon,
              { size: 40 } // adjust size as needed
            )}
          </span>
        ) : (
          "not found"
        )}
      </div>
      <div
        className="subjects-name"
        style={{ gridArea: `subject-${gridNumber[i]}` }}
      >
        <h2
          style={{
            textAlign: "center",
            background: "linear-gradient(90deg, #ee0979, #ff6a00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "black", // fallback for browsers that don't support background-clip
          }}
        >
          {subject}
        </h2>
      </div>
    </div>
  ));
  return (
    <div>
      <div
        style={{
          maxWidth: 600,
          margin: "2rem auto",
          background: "var(--bg-light)",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "2rem",
        }}
        className="header"
      >
        <h1 style={{ textAlign: "center", color: "var(--primary)" }}>
          {found.className}
        </h1>
      </div>
      <div className="subject-container">{subjectFound}</div>
    </div>
  );
}
