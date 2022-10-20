import React from "react";

export default function CardMemes({ item: { title, link, up_votes } }) {
  return (
    <div className="card">
      <img src={link} />
    </div>
  );
}
