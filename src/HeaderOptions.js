import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";

const HeaderOptions = ({ avatar, Icon, title }) => {
  return (
    <div className="header-options">
      {Icon && <Icon className="header-options-icon" />}
      {avatar && <Avatar className="header-options-icon" src={avatar} />}
      <h3 className="header-title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
