import { Typography } from "@mui/material";
import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import {
  RiMenu2Fill,
  RiSearchLine,
  RiSettings3Line,
  RiNotification3Line,
} from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* <div className="notification-section"> */}
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_99GhY47_keXcr6ArpSAsN-9OZVETQpQExg&usqp=CAU"
          className="logo"
          alt="React Image"
        />
      </div>

      <div className="profile-section">
        <div>
          <AiTwotoneSetting />
          <Typography>Admin</Typography>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Header;

{
  /* <div className="header-conatiner-content-1">
        <a>
          <RiMenu2Fill size={20} />
        </a>
        <div className="search-header">
          <input type="text" placeholder="Search here" />
          <span>
            <RiSearchLine />
          </span>
        </div>
      </div>
      <div className="header-conatiner-content-2">
        <div className="notification-header">
          <a>
            <RiSettings3Line size={22} />
          </a>
          <a>
            <RiNotification3Line size={22} />
          </a>
          <a>
            <RxAvatar size={22} />
          </a>
        </div>
      </div> */
}
