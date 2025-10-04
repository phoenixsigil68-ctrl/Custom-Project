import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Classes } from "./Components/classes";
import { ClassDetail } from "./Components/ClassDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Classes />} />
        <Route path="/class/:className" element={<ClassDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
