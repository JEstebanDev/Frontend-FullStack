import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "../slices/errorSlice";

export default function Errors() {
  const errors = useSelector((store) => store.error);

  const dispatch = useDispatch();

  return (
    <div className="input-error">
      {errors.list.length > 0
        ? errors.list.map((item, index) => {
            return (
              <div className="card" key={index}>
                <span>
                  The {item.input.toLowerCase()} is {item.errorMessage}
                </span>
                <button onClick={() => dispatch(removeError(index))}>X</button>
              </div>
            );
          })
        : null}
    </div>
  );
}
