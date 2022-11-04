import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addError } from "../slices/errorSlice";

export default function Form({ optionForm, updateParent }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    updateParent(data);
  };

  const dispatch = useDispatch();
  const onInvalid = (errorData) => {
    let errorsList = [];
    if (errorData.Name != null) {
      errorsList.push({
        input: "Name",
        errorMessage: errorData.Name.message,
      });
    }
    if (errorData.Description != null) {
      errorsList.push({
        input: "Description",
        errorMessage: errorData.Description.message,
      });
    }
    if (errorData.Price != null) {
      errorsList.push({
        input: "Price",
        errorMessage: errorData.Price.message,
      });
    }
    dispatch(addError(errorsList));
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        {optionForm?.inputs.length > 0
          ? optionForm.inputs.map((input, index) => {
              return (
                <div className="inputs" key={index}>
                  <label htmlFor={input.inputName}>{input.inputName}</label>
                  <br />
                  <input
                    className={errors[input.inputName] ? "input-error" : null}
                    type={input.inputValue}
                    {...register(input.inputName, { ...input.validation })}
                  ></input>
                </div>
              );
            })
          : null}{" "}
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
