import React, { useState } from "react";
import { ListUsers } from "../interfaces/listUsers.interface";
import Item from "./Item";

export default function CardUser(props: { users: ListUsers[] }) {
  const [getData, setData] = useState<ListUsers>();
  function setValue(value: ListUsers) {
    setData(value);
  }
  return (
    <div className="cardList">
      {props.users?.map((element: ListUsers, index) => {
        return (
          <button
            className="card"
            key={index}
            onClick={(e) => setValue(element)}
          >
            <h4>{element.name}</h4>
            <h5>{element.email}</h5>
          </button>
        );
      })}
      <div className="showData">
        {getData != null ? <Item getData={getData}></Item> : null}
      </div>
    </div>
  );
}
