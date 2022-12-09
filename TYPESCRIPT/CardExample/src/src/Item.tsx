import React from "react";
import { ListUsers } from "../interfaces/listUsers.interface";

export default function Item(props: { getData: ListUsers }) {
  return (
    <div className="card-white">
      <h4>{props.getData.name}</h4>
      <h5>{props.getData.email}</h5>
    </div>
  );
}
