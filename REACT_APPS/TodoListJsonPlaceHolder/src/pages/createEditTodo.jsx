import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { editTodoList, getTodoListById, setTodoList } from "../utils/Api";

export default function CreateEditTodo() {
  const navigation = useNavigate();
  const { id } = useParams();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (id != null) {
    const result = getTodoListById(id);
    setValue("id", result.id);
    setValue("task", result.title);
    setValue("completed", result.completed);
  } else {
    setValue("id", null);
    setValue("task", null);
    setValue("completed", "true");
  }
  const onSubmit = (data) => {
    if (id != null) {
      editTodoList(data).then((response) => {
        console.log(response);
        if (response == 200) {
          Swal.fire("Pefect!", "Your task has been update it!", "success");
          navigation("/list");
        }
      });
    } else {
      setTodoList(data).then((result) => {
        Swal.fire("Pefect!", "Your task has been save it!", "success");
        navigation("/list");
      });
    }
  };

  return (
    <div className="card info-form animate__animated animate__bounceIn">
      <h3>
        {id ? "Edit" : "Create"} a todo task <i className="ri-add-box-fill"></i>
      </h3>
      <form aria-label="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          data-testid="idtask"
          className="inputs"
          placeholder="id user"
          {...register("id", { required: true })}
        />
        {errors.id && <span data-testid="message">This field is required</span>}
        <textarea
          data-testid="textodo"
          type="text"
          className="inputs"
          placeholder="write your task"
          {...register("task", { required: true })}
        />
        {errors.task && (
          <span data-testid="message">This field is required</span>
        )}
        <br />
        <select className="inputs" {...register("completed")}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />
        <br />
        {id == null ? (
          <input
            data-testid="submit"
            className="button editButton"
            value="Submit"
            type="submit"
          />
        ) : (
          <input className="button editButton" value="Edit" type="submit" />
        )}
      </form>
    </div>
  );
}
