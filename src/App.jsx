import { useState } from "react";
import CVHeader from "./components/CVHeader";
import CVSection from "./components/CVSection";
import CVEntryForm from "./components/CVEntryForm";
import "./App.css";

function App() {
  const [personalInfo] = useState({
    name: "Sarah Johnson",
    title: "Frontend Developer",
    email: "sarah.johnson@email.com",
    phone: "+44 7123 456789",
  });

  const [entries, setEntries] = useState([
    {
      id: 1,
      type: "work",
      title: "Frontend Developer",
      company: "Tech Solutions Ltd",
      date: "2023 - Present",
      location: "London, UK",
      description:
        "Developed responsive web applications using React, JavaScript, and CSS. Collaborated with designers and backend developers to deliver high-quality products.",
    },
    {
      id: 2,
      type: "education",
      title: "BSc Computer Science",
      company: "University of Portsmouth",
      date: "2019 - 2023",
      location: "Portsmouth, UK",
      description:
        "Graduated with First Class Honours. Specialized in web development and software engineering.",
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleAddEntry(newEntry) {
    const entryWithId = {
      ...newEntry,
      id: Date.now(),
    };
    setEntries((prev) => [...prev, entryWithId]);
    setIsFormVisible(false);
  }

  function handleRemoveEntry(id) {
    if (window.confirm("Are you sure you want to remove this entry?")) {
      setEntries((prev) => prev.filter((entry) => entry.id !== id));
    }
  }

  const workEntries = entries.filter((e) => e.type === "work");
  const educationEntries = entries.filter((e) => e.type === "education");

  return (
    <div className="app">
      <header className="app-header">
        <h1>CV Builder</h1>
        <button onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Hide Form" : "Add Entry"}
        </button>
      </header>

      {isFormVisible && (
        <CVEntryForm
          onSubmit={handleAddEntry}
          onCancel={() => setIsFormVisible(false)}
        />
      )}

      <div className="cv-display">
        <CVHeader personalInfo={personalInfo} />
        <CVSection title="Work Experience" entries={workEntries} />
        <CVSection title="Education" entries={educationEntries} />
      </div>

      {entries.length > 0 && (
        <div className="entries-list">
          <h2>Your Entries ({entries.length})</h2>
          {entries.map((entry) => (
            <div key={entry.id} className="entry-item">
              <div>
                <strong>{entry.title}</strong>
                <p style={{ margin: 0, color: "#6b7280" }}>{entry.company}</p>
              </div>
              <button onClick={() => handleRemoveEntry(entry.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;