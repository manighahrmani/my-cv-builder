import { useState } from "react";

function CVEntryForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    type: "work",
    title: "",
    company: "",
    date: "",
    location: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company/School is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit(formData);

    setFormData({
      type: "work",
      title: "",
      company: "",
      date: "",
      location: "",
      description: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="cv-form">
      <h3>Add New Entry</h3>

      <div className="form-group">
        <label htmlFor="type">Entry Type</label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <option value="work">Work Experience</option>
          <option value="education">Education</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="title">
          {formData.type === "work" ? "Job Title" : "Degree/Qualification"} *
        </label>
        <input
          id="title"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="e.g., Frontend Developer"
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="company">
          {formData.type === "work" ? "Company" : "School/University"} *
        </label>
        <input
          id="company"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          placeholder="e.g., Tech Solutions Ltd"
        />
        {errors.company && <span className="error">{errors.company}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date Period</label>
        <input
          id="date"
          value={formData.date}
          onChange={(e) => handleChange("date", e.target.value)}
          placeholder="e.g., 2023 - Present"
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={formData.location}
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="e.g., London, UK"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Describe your role and responsibilities..."
          rows="4"
        />
      </div>

      <div className="button-group">
        <button type="submit">Add Entry</button>
        <button type="button" onClick={onCancel} className="btn-cancel">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CVEntryForm;