import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import FormActions from "../../components/FormActions";
import "../../assets/styles/style.css";

const AddCollege = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    providerId: "",
    tradingName: "",
    instituteName: "",
    cricosCode: "",
    websiteLink: "",
    hasAgreement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgreementChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      hasAgreement: value,
    }));

    
    if (value === "Yes") {
      navigate("/addagreement", { state: formData });
    }
  };


  const handleSave = () => {
    if (formData.hasAgreement === "Yes") return;

    console.log("Saved College:", formData);
    alert("College saved successfully!");
  };

  const handleCancel = () => {
    setFormData({
      providerId: "",
      tradingName: "",
      instituteName: "",
      cricosCode: "",
      websiteLink: "",
      hasAgreement: "",
    });
  };

  return (
    <div className="container-full">
      <div className="content-header">
        <h2>ADD NEW COLLEGE</h2>

        <p className="sub-title">
          <span>
            <FontAwesomeIcon icon={faHome} className="home" /> - Forms
          </span>{" "}
          - General Form Elements
        </p>

        <div className="form-content">
          <div className="form-group full">
            <label>College / Provider ID</label>
            <input
              type="text"
              name="providerId"
              placeholder="College / Provider ID"
              value={formData.providerId}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Trading Name</label>
            <input
              type="text"
              name="tradingName"
              placeholder="Trading Name"
              value={formData.tradingName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Institute Name</label>
            <input
              type="text"
              name="instituteName"
              placeholder="Institute Name"
              value={formData.instituteName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>CRICOS Code</label>
              <input
                type="text"
                name="cricosCode"
                placeholder="CRICOS Code"
                value={formData.cricosCode}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Website Link</label>
              <input
                type="text"
                name="websiteLink"
                placeholder="Website Link"
                value={formData.websiteLink}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full radio-inline">
  <label className="radio-main-label">
    Is there an agreement in place with this college?
  </label>

  <div className="radio-group">
    <label className="radio-option">
      <input
        type="radio"
        name="hasAgreement"
        value="Yes"
        checked={formData.hasAgreement === "Yes"}
        onChange={handleAgreementChange}
      />
      Yes
    </label>

    <label className="radio-option">
      <input
        type="radio"
        name="hasAgreement"
        value="No"
        checked={formData.hasAgreement === "No"}
        onChange={handleAgreementChange}
      />
      No
    </label>
  </div>
</div>


        
          <FormActions onSave={handleSave} onCancel={handleCancel} />
        </div>
      </div>
    </div>
  );
};

export default AddCollege;
