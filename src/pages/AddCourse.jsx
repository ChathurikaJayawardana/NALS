import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import FormActions from "../components/FormActions";
import "./AddCourse.css";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    courseId: "",
    tradingName: "",
    courseName: "",
    cricosCode: "",
    totalFee: "",
    duration: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      courseId: "",
      tradingName: "",
      courseName: "",
      cricosCode: "",
      totalFee: "",
      duration: "",
      state: "",
    });
  };

  return (
    <div className="container-full">
      <div className="content-header">
        <h2>ADD NEW COURSE</h2>
        <p className="sub-title">
          <span>
            <FontAwesomeIcon icon={faHome} className="home" /> - Forms
          </span>{" "}
          - General Form Elements
        </p>

        <form className="form-content" onSubmit={handleSubmit}>
          <div className="form-group full">
            <label>Course ID</label>
            <input
              type="text"
              name="courseId"
              value={formData.courseId}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Trading Name</label>
            <input
              type="text"
              name="tradingName"
              value={formData.tradingName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Course Name</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>CRICOS Code</label>
              <input
                type="text"
                name="cricosCode"
                value={formData.cricosCode}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Total Fee</label>
              <input
                type="text"
                name="totalFee"
                value={formData.totalFee}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="NSW">NSW</option>
                <option value="VIC">VIC</option>
                <option value="QLD">QLD</option>
                <option value="WA">WA</option>
                <option value="SA">SA</option>
                <option value="TAS">TAS</option>
                <option value="NT">NT</option>
                <option value="ACT">ACT</option>
              </select>
            </div>
          </div>

          {/* ✅ Buttons */}
<FormActions onSave={handleSubmit} onCancel={handleCancel} />

        </form>
      </div>
    </div>
  );
};

export default AddCourse;
