import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUpload } from "@fortawesome/free-solid-svg-icons";

import FormActions from "../components/FormActions";
import "./AddCourse.css";

const AddAgreement = () => {
  const [formData, setFormData] = useState({
    agreementName: "",
    startDate: "",
    expireDate: "",
    renewalDate: "",
    status: "",
    remark: "",
    agreementFile: null,
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
      agreementFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      agreementName: "",
      startDate: "",
      expireDate: "",
      renewalDate: "",
      status: "",
      remark: "",
      agreementFile: null,
    });
  };

  return (
    <div className="container-full">
      <div className="content-header">
        <h2>ADD NEW AGREEMENT</h2>

         <p className="sub-title">
          <span>
            <FontAwesomeIcon icon={faHome} className="home" /> - Forms
          </span>{" "}
          - General Form Elements
        </p>

        <form className="form-content" onSubmit={handleSubmit}>
          {/* Agreement Name */}
          <div className="form-group full">
            <label>Agreement Name</label>
            <input
              type="text"
              name="agreementName"
              value={formData.agreementName}
              onChange={handleChange}
            />
          </div>

          {/* Dates */}
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Expire Date</label>
              <input
                type="date"
                name="expireDate"
                value={formData.expireDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Renewal + Status */}
          <div className="form-row">
            <div className="form-group">
              <label>Renewal Date</label>
              <input
                type="date"
                name="renewalDate"
                value={formData.renewalDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>
          </div>

          {/* Remark */}
          <div className="form-group full">
            <label>Remark</label>
            <textarea
              name="remark"
              rows="3"
              value={formData.remark}
              onChange={handleChange}
            />
          </div>

          {/* File Upload */}
          <div className="form-group full">
            <label>Attach Agreement (PDF)</label>

            <div className="upload-box">
              <p>Upload or Drag & Drop your file</p>

              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
              />

              <button type="button" className="upload-btn">
                <FontAwesomeIcon icon={faUpload} /> Select Agreement
              </button>

              <small>Allowed file extension: PDF (Max 10MB)</small>
            </div>
          </div>

          {/* Buttons */}
          <FormActions onSave={handleSubmit} onCancel={handleCancel} />
        </form>
      </div>
    </div>
  );
};

export default AddAgreement;
