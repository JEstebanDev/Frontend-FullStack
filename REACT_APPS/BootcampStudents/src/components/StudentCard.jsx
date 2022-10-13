import React from "react";

export default function StudentCard(props) {
  return props.listStudents.map(function (item, i) {
    return (
      <div className="card" key={i}>
        <li>
          <strong>Name: </strong>
          <span>{item.name}</span>
        </li>
        <li>
          <strong>Role: </strong>
          <span>{item.role}</span>
        </li>
        <li>
          <strong>Country: </strong>
          <img src={item.srcCountry} width="22" height="14" />
          <span>{item.country}</span>
        </li>
      </div>
    );
  });
}
