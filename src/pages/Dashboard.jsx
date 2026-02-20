import React from "react";
import "../assets/styles/style.css";
import dashboard from "../assets/img/dashboard.svg";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="welcome-image">
        <img src={dashboard} alt="Welcome Illustration" />
      </div>

      <div className="welcome-content">
        <h2>Welcome to Nikee Migration & Business Group</h2>
        <p>
          Your trusted partner in global migration and business success.
With over 29 years of excellence, we continue to guide individuals and businesses toward new opportunities in Australia and beyond.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;