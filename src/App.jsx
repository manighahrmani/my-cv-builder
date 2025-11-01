import React, { useState } from "react";

function CVHeader() {
  return (
    <header>
      <h1>Sarah Johnson</h1>
      <h2>Frontend Developer</h2>
      <p>sarah@email.com | 07123-456789</p>
    </header>
  );
}

function CVSection({ sectionTitle, children }) {
  return (
    <section>
      <h2>{sectionTitle}</h2>
      {children}
    </section>
  );
}

function CVEntry({
  title,
  company,
  date,
  location,
  description = "No description provided"
}) {
  return (
    <article className="cv-entry">
      <header>
        <h3>{title}</h3>
        <p className="cv-meta">{company} — {date}</p>
        <p className="cv-meta">{location}</p>
      </header>
      <p>{description}</p>
    </article>
  );
}

function CVEntryForm() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    date: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("CV Entry:", formData);

    // Reset form after submission
    setFormData({
      title: "",
      company: "",
      location: "",
      date: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Job Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Frontend Developer"
        />
      </div>

      <div>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g., Tech Solutions Ltd"
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., London, UK"
        />
      </div>

      <div>
        <label htmlFor="date">Employment Period</label>
        <input
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="e.g., 2023-Present"
        />
      </div>

      <button type="submit">Add Entry</button>
    </form>
  );
}

function App() {
  return (
    <div className="cv-container">
      <CVHeader />

      <CVSection sectionTitle="Work Experience">
        <CVEntry
          title="Frontend Developer"
          company="Tech Solutions Ltd"
          date="2023 - Present"
          location="London, UK"
          description="Developed web apps using React and CSS."
        />
        <CVEntry
          title="Junior Developer"
          company="StartUp UK"
          date="2022 - 2023"
          location="Cambridge, UK"
          description="Built responsive websites."
        />
      </CVSection>

      <CVSection sectionTitle="Education">
        <CVEntry
          title="BSc Computer Science"
          company="University of Portsmouth"
          date="2018 - 2022"
          location="Portsmouth, UK"
          description="Graduated with honours."
        />
      </CVSection>

      <CVEntryForm></CVEntryForm>
    </div>
  );
}

export default App;
