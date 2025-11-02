import React from "react";
import CVHeader from "./CVHeader";
import CVSection from "./CVSection";

function CVDisplay({ personalInfo, entries }) {
    // Group entries by type
    const workEntries =
        entries.filter((e) => e.type === "work");
    const educationEntries =
        entries.filter((e) => e.type === "education");

    return (
        <div className="cv-display">
            <CVHeader personalInfo={personalInfo} />
            <CVSection
                title="Work Experience"
                entries={workEntries}
            />
            <CVSection
                title="Education"
                entries={educationEntries}
            />
            <button onClick={() => window.print()}>
                Print CV
            </button>
        </div>
    );
}

export default CVDisplay;