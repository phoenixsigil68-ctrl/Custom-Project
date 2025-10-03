import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import "../Styles/landing-page.css";
import "../Styles/index.css";
import { Video, Bot, BadgeQuestionMark } from "lucide-react";

export function LandingPage() {
  return (
    <div className="landing-page">
      <div className="e-study">
        <svg width="48" height="48" className="logo">
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff6a00" />
              <stop offset="100%" stopColor="#ee0979" />
            </linearGradient>
          </defs>
          <Video size={48} stroke="url(#logo-gradient)" />
        </svg>
        <h2 style={{ textAlign: "center" }}>
          Study with video lectures and materials
        </h2>
        <p style={{ textAlign: "justify" }}>
          Here you'll study with video lectures and materials created by us. You
          can access various classes with almost every chapter included.
        </p>
      </div>
      <div className="AI">
        <svg width="48" height="48" className="logo">
          <defs>
            <linearGradient id="logo-gradient2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#43cea2" />
              <stop offset="100%" stopColor="#185a9d" />
            </linearGradient>
          </defs>
          <Bot size={48} stroke="url(#logo-gradient2)" />
        </svg>
        <h2 style={{ textAlign: "center" }}>AI Powered Learning</h2>
        <p style={{ textAlign: "justify" }}>
          Learn with our latest AI chatbot model which will help you learning
          across multiple languages with personalized assistance.
        </p>
      </div>
      <div className="quiz">
        <svg width="48" height="48" className="logo">
          <defs>
            <linearGradient id="logo-gradient3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f7971e" />
              <stop offset="100%" stopColor="#ffd200" />
            </linearGradient>
          </defs>
          <BadgeQuestionMark size={48} stroke="url(#logo-gradient3)" />
        </svg>
        <h2 style={{ textAlign: "center" }}>
          Test your knowledge with our Quiz Tools
        </h2>
        <p style={{ textAlign: "justify" }}>
          Assess your understanding with our interactive quizzes designed to
          reinforce your learning and track your progress.
        </p>
      </div>
    </div>
  );
}
