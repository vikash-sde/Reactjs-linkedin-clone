import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGAjDXIMzV7Ig/profile-displayphoto-shrink_200_200/0/1615268128311?e=1632355200&v=beta&t=NS-OqRRZJL8m4HXmQlbGwoCQ2gOCl3LEUJW9OB8ODD4" />
        <h2>Vikash Gupta</h2>
        <h4>vikash@gamil.com</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who view your profile</p>
          <p className="sidebar-statNumber">2,489</p>
        </div>
        <div className="sidebar-stat">
          <p>Views of your post</p>
          <p className="sidebar-statNumber">2,639</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>reactjs</p>
        </div>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>programming</p>
        </div>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>softwareengineering</p>
        </div>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>design</p>
        </div>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>developer</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
