import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";

const SidebarElements = (props) => {
  const navigate = useNavigate();
  const { title, path, icon } = props;

  const handleChangeRoute = () => {
    navigate(path);
  };
  return (
    <ListItem
      component={NavLink}
      to={title !== "test" && path}
      className={title !== "test" ? "active-link" : "normal-link"}
      onClick={handleChangeRoute}
      // style={{ marginLeft: 20 }}
    >
      <ListItemText
        primary={title}
        className="list-item"
        style={{ marginLeft: 20, textAlign: "center" }}
      />
    </ListItem>
  );
};

export default SidebarElements;
