import React from "react";

function CVHeader({ personalInfo }) {
  return (
    <header className="cv-header">
      <h1>{personalInfo.name || "Your Name"}</h1>
      <h2>{personalInfo.title || "Your Title"}</h2>
      <p>
        {personalInfo.email || "email@example.com"} |
        {personalInfo.phone || "+44 1234 567890"}
      </p>
    </header>
  );
}

export default CVHeader;