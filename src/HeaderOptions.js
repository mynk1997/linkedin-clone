import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSclice";

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  const user=useSelector(selectUser)
  return (
    <div onClick={onClick} className="header-options">
      {Icon && <Icon className="header-options-icon" />}
      {avatar && <Avatar className="header-options-icon" src={user?.photoUrl} >{user?.displayName[0]}</Avatar>}
      <h3 className="header-title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
