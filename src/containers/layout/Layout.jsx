import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-section">
      <div className="sidebar-main-layout">
        <Sidebar />
      </div>
      <div className="main-body-section">
        <div className="header-container">
          <Header />
        </div>
        <div className="children-container">
          <Outlet />
        </div>
        <div className="footer-container">{/* footer */}</div>
      </div>
    </div>
  );
};

export default Layout;
