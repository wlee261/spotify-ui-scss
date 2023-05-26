import React from "react";
import "../scss/components/_tooltip.scss";

const ToolTip = ({ text }) => {
  return <span className="tooltip">{text}</span>;
};

export default ToolTip;
