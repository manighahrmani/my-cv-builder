import CVEntry from "./CVEntry";

function CVSection({ title, entries }) {
  if (entries.length === 0) return null;

  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {entries.map((entry) => (
        <CVEntry key={entry.id} entry={entry} />
      ))}
    </section>
  );
}

export default CVSection;