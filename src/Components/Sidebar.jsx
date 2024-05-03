import React from "react";
import "../Styles/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <div className="logo">
          <img src="street suite logo-04.png" alt="Logo" />
        </div>
        <li className="menu-item">
          <img src="alerts-icon.png" alt="Alerts" />
          <span className="label">Alerts</span>
        </li>
        <li className="menu-item">
          <img src="training-icon.png" alt="Training" />
          <span className="label">Training</span>
        </li>
        <li className="menu-item">
          <img src="automation-icon.png" alt="Automation" />
          <span className="label">Automation</span>
        </li>
        <li className="menu-item">
          <img src="portfolio-icon.png" alt="Portfolio" />
          <span className="label">Portfolio</span>
        </li>
        <li className="menu-item">
          <img src="trading-icon.png" alt="Trading" />
          <span className="label">Trading</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
