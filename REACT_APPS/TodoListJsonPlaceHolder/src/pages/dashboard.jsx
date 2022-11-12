import React from "react";
import { Link, Outlet } from "react-router-dom";
import icon from "../assets/vite.svg";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={icon} width="50px" />
          <h3>TODO List</h3>
        </div>
        <div className="nav-links">
          <Link to={`/list`}>
            Dashboard <i className="ri-list-check"></i>
          </Link>
          <Link to={`/create`}>
            Create a todo <i className="ri-add-circle-fill"></i>
          </Link>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
