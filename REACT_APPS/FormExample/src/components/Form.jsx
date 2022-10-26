import React from "react";
import { useForm } from "react-hook-form";
export default function Form({ addProduct }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    addProduct(data);
  };
  return (
    <div>
      <h1>Form</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Name">Name</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <label htmlFor="Description">Description</label>
        <input type="text" {...register("description")} />
        <label htmlFor="Precio">Precio</label>
        <input type="number" {...register("precio")} />
        <br />
        <br />
        <input className="button" type="submit" />
      </form>
    </div>
  );
}
