import React from "react";
import "../scss/components/_sidebar.scss";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <SideBarSection />
      <SideBarSection />
    </div>
  );
};

export default SideBar;

const SideBarSection = ({ icons }) => {
  return <div className="sidebar-section">Section</div>;
};
