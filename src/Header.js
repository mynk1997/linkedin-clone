import { Home, Message, NotificationAdd, Notifications, Search, SupervisorAccount, Work } from "@mui/icons-material";
import React from "react";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" />
        <div className="header-search">
          <Search />
          <input type="text" className="" placeholder="Search"></input>
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions Icon={Home} title="Home"/>
        <HeaderOptions Icon={SupervisorAccount} title="My Network"/>
        <HeaderOptions Icon={Work} title="Jobs"/>
        <HeaderOptions Icon={Message} title="Messaging"/>
        <HeaderOptions Icon={Notifications} title="Notifications"/>
        <HeaderOptions avatar="https://media.licdn.com/dms/image/C4E03AQFRA1QDFMaYZw/profile-displayphoto-shrink_100_100/0/1551001097020?e=1696464000&v=beta&t=HDp6W74pXhreUcMowP-NIL0DiIdB5e5fFaQafJf8jYI" title="Me"/>
      </div>
    </div>
  );
};

export default Header;
