import React from "react";

export default function CardList({ items, inputs }) {
  return (
    <div>
      {items.length > 0
        ? items.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.Name}</h2>
                <h2>{item.Description}</h2>
                <h2>{item.Price}</h2>
              </div>
            );
          })
        : null}
    </div>
  );
}
