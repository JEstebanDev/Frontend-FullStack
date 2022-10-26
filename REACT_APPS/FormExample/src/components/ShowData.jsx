import React from "react";

export default function ShowData({ List }) {
  return (
    <div>
      <h1>List product</h1>
      {List ? (
        List.map((produc, index) => (
          <div key={index}>
            <ul>
              <li>{produc.name}</li>
              <li>{produc.description}</li>
              <li>{produc.precio}</li>
            </ul>
          </div>
        ))
      ) : (
        <h2>Empty</h2>
      )}
    </div>
  );
}
