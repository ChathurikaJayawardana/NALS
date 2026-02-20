import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUpload } from "@fortawesome/free-solid-svg-icons";

import FormActions from "../../components/FormActions";
import "../../assets/styles/style.css";

const AddFlyer = () => {
  const [formData, setFormData] = useState({
    provider: "",
    flyerFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      flyerFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      provider: "",
      flyerFile: null,
    });
  };

  return (
    <div className="container-ful">
      <div className="content-header">
        <h2>ADD NEW FLYER</h2>

        <p className="sub-title">
          <span>
            <FontAwesomeIcon icon={faHome} className="home" /> - Forms
          </span>{" "}
          - General Form Elements
        </p>

        <form className="form-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>College / Provider</label>
            <select
              name="provider"
              value={formData.provider}
              onChange={handleChange}
            >
              <option value="">College / Provider</option>
              <option value="Active">AAPOLY</option>
              <option value="Pending">AIA</option>
              <option value="In Progress">ASLI</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Attach Flyer</label>

            <div className="upload-box">
              <p>Upload or Drag & Drop your file</p>

              <input type="file" accept=".pdf" onChange={handleFileChange} />

              <button type="button" className="upload-btn">
                <FontAwesomeIcon icon={faUpload} /> Select Flyer
              </button>

              <small>Allowed file extension: PDF, PNG (Max 10MB)</small>
            </div>
          </div>

          <FormActions onSave={handleSubmit} onCancel={handleCancel} />
        </form>
      </div>
    </div>
  );
};

export default AddFlyer;
