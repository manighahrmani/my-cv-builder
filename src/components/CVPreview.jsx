import React from "react";
import CVHeader from "./CVHeader";
import CVSection from "./CVSection";

function CVPreview({ personalInfo, entries }) {
    // Group entries by type
    const workEntries =
        entries.filter((e) => e.type === "work");
    const educationEntries =
        entries.filter((e) => e.type === "education");

    return (
        <div className="cv-preview-page">
            <div className="cv-preview-content">
                <CVHeader personalInfo={personalInfo} />
                <CVSection
                    title="Work Experience"
                    entries={workEntries}
                />
                <CVSection
                    title="Education"
                    entries={educationEntries}
                />
            </div>
        </div>
    );
}

export default CVPreview;