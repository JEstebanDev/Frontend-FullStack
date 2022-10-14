import React from "react";

export default function StudentCard({
  item: { name, role, srcCountry, location },
}) {
  return (
    <div className="card animate__animated animate__tada animate__repeat-2">
      <li>
        <strong>Name: </strong>
        <span>{name}</span>
      </li>
      <li>
        <strong>Role: </strong>
        <span>{role}</span>
      </li>
      <li>
        <strong>Location: </strong>
        <img src={srcCountry} width="22" height="14" />
        <span>{location}</span>
      </li>
    </div>
  );
}
