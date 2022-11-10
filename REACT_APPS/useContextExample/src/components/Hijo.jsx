import React, { useContext } from "react";
import { userContext } from "../App";

export default function Hijo() {
  const user = useContext(userContext);
  return (
    <div>
      <h1>Hijo Components</h1>
      {user && (
        <h3>
          {user.username} - {user.password}
        </h3>
      )}
    </div>
  );
}
