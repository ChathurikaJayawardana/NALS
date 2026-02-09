import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FaPaperclip, FaPlus, FaTrash } from "react-icons/fa";

import FormActions from "../components/FormActions";
import "./AddCourse.css";

const AddEnrolment = () => {
  const [formData, setFormData] = useState({
    college: "",
    enrolmentUrl: "",
    username: "",
    password: "",
    email: "",
  });

  const [forms, setForms] = useState([{ name: "", file: null }]);
  const fileRefs = useRef([]);

  /* ---------- normal input handling ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* ---------- related forms logic ---------- */
  const handleAddForm = () => {
    setForms([...forms, { name: "", file: null }]);
  };

  const handleRemoveForm = (index) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  const handleFormNameChange = (index, value) => {
    const updated = [...forms];
    updated[index].name = value;
    setForms(updated);
  };

  const handleFileChange = (index, file) => {
    const updated = [...forms];
    updated[index].file = file;
    setForms(updated);
  };

  const openFilePicker = (index) => {
    if (fileRefs.current[index]) {
      fileRefs.current[index].click();
    }
  };

  /* ---------- save / cancel ---------- */
  const handleSubmit = () => {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    forms.forEach((f, i) => {
      data.append(`forms[${i}][name]`, f.name);
      data.append(`forms[${i}][file]`, f.file);
    });

    console.log("Submitting enrolment:", { formData, forms });
    alert("Enrolment details saved!");
  };

  const handleCancel = () => {
    setFormData({
      college: "",
      enrolmentUrl: "",
      username: "",
      password: "",
      email: "",
    });
    setForms([{ name: "", file: null }]);
  };

  return (
    <div className="container-full">
      <div className="content-header">
        <h2>ADD ENROLMENT DETAILS</h2>

        <p className="sub-title">
          <span>
            <FontAwesomeIcon icon={faHome} className="home" /> - Forms
          </span>{" "}
          - General Form Elements
        </p>

        <div className="form-content">
          {/* College */}
          <div className="form-group full">
            <label>College / Provider</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
            >
              <option value="">Select College</option>
              <option value="ABC">ABC College</option>
              <option value="XYZ">XYZ Institute</option>
            </select>
          </div>

          {/* URL */}
          <div className="form-group full">
            <label>Enrolment URL</label>
            <input
              type="text"
              name="enrolmentUrl"
              value={formData.enrolmentUrl}
              onChange={handleChange}
              placeholder="https://www.example.com"
            />
          </div>

          {/* Username / Password */}
          <div className="form-row">
            <div className="form-group">
              <label>Enrolment User Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Enrolment Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group full">
            <label>Enrolment Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Related Forms Header */}
          <div className="form-group full related-header">
            <label>Related Forms</label>
            <button type="button" className="btn-add" onClick={handleAddForm}>
              <FaPlus /> Add Forms
            </button>
          </div>

          {/* Related Forms Rows */}
          {forms.map((form, index) => (
            <div className="form-row" key={index}>
              {/* Form Name */}
              <div className="form-group">
                <label>Form Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    handleFormNameChange(index, e.target.value)
                  }
                  placeholder="Eg: Application Form"
                />
              </div>

              {/* Attach File */}
              <div className="form-group attach-group">
                <label>Attach Form</label>

                <div
                  className={`attach-box ${form.file ? "has-file" : ""}`}
                  onClick={() => openFilePicker(index)}
                >
                  <div className="attach-icon">
                    <FaPaperclip />
                  </div>

                  <div className="attach-text">
                    <span className="attach-title">
                      {form.file
                        ? form.file.name
                        : "Click to attach file"}
                    </span>
                    <span className="attach-sub">
                      PDF, DOC, DOCX (Max 5MB)
                    </span>
                  </div>
                </div>

                <input
                  type="file"
                  hidden
                  ref={(el) => (fileRefs.current[index] = el)}
                  onChange={(e) =>
                    handleFileChange(index, e.target.files[0])
                  }
                />
              </div>

              {/* Remove Button */}
              {forms.length > 1 && (
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => handleRemoveForm(index)}
                >
                  <FaTrash />
                </button>
              )}
            </div>
          ))}

          {/* Buttons */}
          <FormActions onSave={handleSubmit} onCancel={handleCancel} />
        </div>
      </div>
    </div>
  );
};

export default AddEnrolment;
