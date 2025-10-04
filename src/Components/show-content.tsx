import { data } from "../lib/data";

export function ShowContent() {
  const classNameValue = localStorage.getItem("foundClass");
  const found = data.find((item) => item.className === classNameValue);
  if (found) {
    console.log(`Subjects: ${found.subjects.join(", ")}`);
  } else {
    console.log("Content is not available");
  }

  return (
    <div className="list">
      <h1>Available Classes and Subjects</h1>
      <ul></ul>
    </div>
  );
}
