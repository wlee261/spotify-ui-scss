import React, { useState } from "react";
import "../scss/components/_sidebarItem.scss";
import ToolTip from "./ToolTip";

const SideBarItem = ({ icon, tooltipText }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="sidebar-item--container"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {typeof icon === "object" ? (
        <div className="sidebar-item--icon">{icon}</div>
      ) : (
        <img className="sidebar-item--album" src={icon} alt="album cover" />
      )}
      {isHovered && <ToolTip text={tooltipText} />}
    </div>
  );
};

export default SideBarItem;
