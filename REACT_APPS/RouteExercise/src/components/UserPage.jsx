import React from "react";

export default function UserPage() {
  return (
    <div className="card">
      <div className="item">
        <img
          src="https://i.pinimg.com/originals/8f/e2/1b/8fe21bf856c4a5e811c9fb9a500831c7.jpg"
          alt=""
          width="160px"
        />
        <div className="description">
          <span>Country:</span>
          <strong>Colombia</strong>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGFOAjpXqDlTTy-j-wc1xXR6DL-9SVs4fgIUBleDycMSYlYdIKwmJnMR2j1RzLEOSvto&usqp=CAU"
            alt=""
            height="20
            px"
            width="20px"
          />
          <br />
          <span>Name:</span>
          <strong>Esteban</strong>
          <br />
          <span>Last name:</span>
          <strong>Castaño</strong>
          <br />
          <span>Age:</span>
          <strong>23</strong>
        </div>
      </div>
    </div>
  );
}
