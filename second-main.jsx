import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Classes } from "./src/Components/classes";
import { ShowContent } from "./src/Components/show-content";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShowContent></ShowContent>
  </StrictMode>
);
