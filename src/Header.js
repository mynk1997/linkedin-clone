import {
  Home,
  Message,
  NotificationAdd,
  Notifications,
  Search,
  SupervisorAccount,
  Work,
} from "@mui/icons-material";
import React from "react";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSclice";
import { auth } from "./firebase";

const Header = () => {
  const user=useSelector(selectUser);
  console.log(user);
  const dispatch=useDispatch();
  const userLogout=()=>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt=""
        />
        <div className="header-search">
          <Search />
          <input type="text" className="" placeholder="Search"></input>
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={Work} title="Jobs" />
        <HeaderOptions Icon={Message} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions
          avatar="true"
          title="Me"
          onClick={userLogout}
        />
      </div>
    </div>
  );
};

export default Header;
