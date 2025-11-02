function CVEntry({ entry }) {
  return (
    <article className="cv-entry">
      <div className="entry-header">
        <h3>{entry.title}</h3>
        <span className="company">{entry.company}</span>
      </div>
      <p className="date-location">
        {entry.date} | {entry.location}
      </p>
      <p className="description">{entry.description}</p>
    </article>
  );
}

export default CVEntry;