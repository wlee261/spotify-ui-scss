import React from "react";
import "../scss/components/_sidebar.scss";

import iuCover from "../assets/iu_cover.jpeg";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";

import SideBarItem from "./SideBarItem";

const navigationIcons = [
  <AiOutlineHome size={35} />,
  <AiOutlineSearch size={35} />,
];

const navigationTooltips = ["Home", "Search"];

const albumIcons = [
  iuCover,
  iuCover,
  iuCover,
  iuCover,
  iuCover,
  iuCover,
  iuCover,
  iuCover,
  iuCover,
  iuCover,
  iuCover,
  iuCover,
];

const albumTooltips = [
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
  "IU Celebrity",
];

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <SideBarSection
        icons={navigationIcons}
        tooltipTexts={navigationTooltips}
      />
      <SideBarSection icons={albumIcons} tooltipTexts={albumTooltips} />
    </div>
  );
};

export default SideBar;

const SideBarSection = ({ icons, tooltipTexts }) => {
  return (
    <div className="sidebar-section">
      {icons?.map((icon, index) => {
        return (
          <SideBarItem
            key={index}
            icon={icon}
            tooltipText={tooltipTexts[index]}
          />
        );
      })}
    </div>
  );
};
