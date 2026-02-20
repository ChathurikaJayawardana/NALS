import { useState } from "react";
import "../../assets/styles/style.css";
import ProfilePic from "../../assets/img/profile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faIdBadge,
  faBuilding,
  faBriefcase,
  faEdit,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Sanduni Jayawardhana",
    email: "nikee.sanduni@gmail.com",
    mobile: "+94 770850062",
    employeeId: "AUSSL0014",
    department: "IT",
    position: "Client Support Officer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Profile saved:", formData);
    setIsEditing(false);
  };

  return (
    <div className="container-full profile-page dashboard-style">
      <div className="row-align">
        <div className="profile-header-card">
          <div className="profile-info">
            <img src={ProfilePic} alt="Profile" className="profile-avatar" />
            <h3>{formData.fullName}</h3>
            <span className="role-badge">Employee</span>
          </div>
        </div>

        <div className="profile-form-card">
          <div className="profile-header-top">
            <div
              className="header-top"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4 className="box-title text-info mb-0">
                <FontAwesomeIcon icon={faUser} /> General Information
              </h4>

              <button
                type="button"
                className="btn-edit"
                onClick={() => setIsEditing(!isEditing)}
              >
                <FontAwesomeIcon icon={faEdit} />
                {isEditing ? " Cancel" : " Edit Profile"}
              </button>
            </div>
            <hr />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faEnvelope} /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faUser} /> Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faPhone} /> Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faIdBadge} /> Employee ID
              </label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faBuilding} /> Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faBriefcase} /> Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          {isEditing && (
            <button type="button" className="btn-save" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>
      </div>

      <div className="account-settings-card">
        <h4 className="box-title text-info mb-0">
          <FontAwesomeIcon icon={faGear} /> Account Settings
        </h4>
        <hr />

        <div className="settings-item">
          <div>
            <strong>Password</strong>
            <p>Change your account password</p>
          </div>
          <button type="button">Change Password</button>
        </div>

        <div className="settings-item">
          <div>
            <strong>Two-Factor Authentication</strong>
            <p>Add an extra layer of security</p>
          </div>
          <button type="button">Enable 2FA</button>
        </div>

        <div className="settings-item">
          <div>
            <strong>Activity Notifications</strong>
            <p>Get notified about your time tracking</p>
          </div>
          <button type="button">Configure</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
