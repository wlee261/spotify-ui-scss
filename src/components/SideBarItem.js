import React from "react";
import "../scss/components/_sidebarItem.scss";

const SideBarItem = ({ icon }) => {
  return (
    <div className="sidebar-item--container">
      {typeof icon === "object" ? (
        <div className="sidebar-item--icon">{icon}</div>
      ) : (
        <img className="sidebar-item--album" src={icon} alt="album cover" />
      )}
    </div>
  );
};

export default SideBarItem;
