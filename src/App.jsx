import { useState } from "react";
import CVDisplay from "./components/CVDisplay";
import CVEntryForm from "./components/CVEntryForm";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    title: "Web Developer",
    email: "john.doe@email.com",
    phone: "+44 7123 456789",
  });

  const [entries, setEntries] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  function handleAddEntry(newEntry) {
    const entryWithId = {
      ...newEntry,
      id: Date.now(), // Simple unique ID
    };

    setEntries((prev) => [...prev, entryWithId]);
    setIsFormVisible(false);
  }

  function handleRemoveEntry(id) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }

  function handleOpenPreview() {
    setShowPreview(true);
  }

  function handleClosePreview() {
    setShowPreview(false);
  }

  // If preview mode is active, show only the preview
  if (showPreview) {
    return (
      <>
        <CVPreview personalInfo={personalInfo} entries={entries} />
        <button 
          onClick={handleClosePreview}
          style={{ 
            position: 'fixed', 
            top: '10px', 
            right: '10px',
            zIndex: 1000 
          }}
          className="btn-back"
        >
          Back to Editor
        </button>
      </>
    );
  }

  // Otherwise show the builder interface
  return (
    <div className="app">
      <header className="app-header">
        <h1>CV Builder</h1>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="btn-toggle"
        >
          {isFormVisible ? "Hide Form" : "Add Entry"}
        </button>
      </header>

      {isFormVisible && (
        <CVEntryForm
          onSubmit={handleAddEntry}
          onCancel={() => setIsFormVisible(false)}
        />
      )}

      <CVDisplay 
        personalInfo={personalInfo} 
        entries={entries}
        onOpenPreview={handleOpenPreview}
      />

      <div className="entries-list">
        <h2>Your Entries ({entries.length})</h2>
        {entries.map((entry) => (
          <div key={entry.id} className="entry-item">
            <span>
              {entry.title} - {entry.company}
            </span>
            <button onClick={() => handleRemoveEntry(entry.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;