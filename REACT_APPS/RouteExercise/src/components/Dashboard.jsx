import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <h1>FullStackBootCamp</h1>
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      <Link to={"userPage"}>Go to user</Link>
      <Outlet />
    </div>
  );
}
