import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FaPaperclip, FaTrash } from "react-icons/fa";

import FormActions from "../../components/FormActions";
import "../../assets/styles/style.css";

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


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleAddForm = () => {
    setForms((prev) => [...prev, { name: "", file: null }]);
  };

  const handleRemoveForm = (index) => {
    setForms((prev) => prev.filter((_, i) => i !== index));
    fileRefs.current.splice(index, 1);
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
    fileRefs.current[index]?.click();
  };

  const handleSubmit = () => {
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
          
          <div className="form-group full">
            <label>College / Provider</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
            >
              <option value="">College / Provider</option>
              <option value="ABC">ABC College</option>
              <option value="XYZ">XYZ Institute</option>
            </select>
          </div>

         
          <div className="form-group full">
            <label>Enrolment URL</label>
            <input
              type="text"
              name="enrolmentUrl"
              placeholder="Enrolment URL"
              value={formData.enrolmentUrl}
              onChange={handleChange}
            />
          </div>

         
          <div className="form-row">
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                name="username"
                placeholder="User Name"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

         
          <div className="form-group full">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

         
          <div className="related-header">
            <label>Related Forms</label>
            <button
              type="button"
              className="add-more-link"
              onClick={handleAddForm}
            >
              + Add more files
            </button>
          </div>

         
          {forms.map((form, index) => (
            <div className="related-row" key={index}>
              <div className="form-group full">
                <label>Form Name</label>
                <input
                  type="text"
                  value={form.name}
                  placeholder="Add Form Name"
                  onChange={(e) =>
                    handleFormNameChange(index, e.target.value)
                  }
                />
              </div>

              <div className="form-group full">
                <label>Add Form</label>

                <div
                  className="attach-box"
                  onClick={() => openFilePicker(index)}
                >
                  <FaPaperclip />
                  <span>
                    {form.file ? form.file.name : "Attach file"}
                  </span>
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
              {forms.length > 1 && (
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => handleRemoveForm(index)}
                  >
                    <FaTrash />
                  </button>
                )}
            </div>
          ))}

     
          <FormActions onSave={handleSubmit} onCancel={handleCancel} />
        </div>
      </div>
    </div>
  );
};

export default AddEnrolment;
