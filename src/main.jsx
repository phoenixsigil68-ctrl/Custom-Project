import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Classes } from "./Components/classes";
import "./Styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Classes></Classes>
  </StrictMode>
);
