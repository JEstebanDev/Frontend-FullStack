import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { removeTodoList } from "../utils/Api";
export default function CardTodo({ item }) {
  const navigation = useNavigate();

  const remove = (id) => {
    removeTodoList(id).then((result) => {
      if (result == 200) {
        Swal.fire({
          position: "top-end",
          width: "300px",
          icon: "success",
          title: "Your task has been delete it!",
          showConfirmButton: false,
          timer: 700,
        });
      }
    });
  };
  return (
    <div className="card">
      <div className="check">
        <h3>Task {item.id}</h3>
        {item.completed ? (
          <i className="ri-checkbox-circle-fill  purple-color"></i>
        ) : (
          <i className="ri-close-circle-fill red-color"></i>
        )}
      </div>
      <div className="task">
        <p>{item.title}</p>
      </div>

      <div className="options">
        <button
          className="editButton"
          onClick={() => navigation("/edit/" + item.id)}
        >
          Edit
        </button>
        <button className="deleteButton" onClick={() => remove(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
