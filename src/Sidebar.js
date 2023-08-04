import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItems=(topic)=>{
    return(
      <div className="sidebar-recent-items">
      <span className="sidebar-topic-name">#{topic}</span>
    </div>
    )
  }
  return (
    <div>
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1690927666654-07c9e5d62696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
        <Avatar className="sidebar-avatar" />
        <h2>Mayank Gupta</h2>
        <h4>mynk1997@gmail.com</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-number">432</p>
        </div>
        <div className="sidebar-stat">
          <p>Impressions</p>
          <p className="sidebar-number">12</p>{" "}
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItems("react")}
        {recentItems("programming")}
        {recentItems("frontend")}
        {recentItems("clone")}
        {recentItems("javascript")}

      </div>
    </div>
  );
};

export default Sidebar;
