import React from "react";
import SidebarElements from "./SidebarElements";
import SidebarLinks from "../routes/SidebarLinks";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/* <div className="sidebar-main-layout"> */}
      {/* <div className="logo">logo</div> */}
      {/* </div> */}
      <div className="sidebar-main-section">
        {SidebarLinks.map((links, i) => {
          return <SidebarElements {...links} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
