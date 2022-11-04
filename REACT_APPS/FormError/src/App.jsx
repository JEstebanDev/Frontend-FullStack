import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CardList from "./components/CardList";
import Errors from "./components/Errors";

import Form from "./components/Form";
import { addError } from "./slices/errorSlice";

function App() {
  const [value, setValue] = useState({});
  const [AttemptsList, setAttemptsList] = useState([]);

  const handleSubmit = (value) => {
    setValue(value);
  };
  useEffect(() => {
    const isNotEmpty = () => {
      return Object.keys(value).length !== 0;
    };

    if (isNotEmpty(value)) {
      setAttemptsList((prev) => [...prev, value]);
    }
  }, [value]);

  const optionForm = {
    inputs: [
      {
        inputValue: "text",
        inputName: "Name",
        validation: {
          maxLength: {
            value: 10,
            message: "too long",
          },
          minLength: {
            value: 3,
            message: "too short",
          },
          required: "required",
        },
      },
      {
        inputValue: "text",
        inputName: "Description",
        validation: {
          maxLength: {
            value: 20,
            message: "too long",
          },
          minLength: {
            value: 5,
            message: "too short",
          },
          required: "required",
        },
      },
      {
        inputValue: "text",
        inputName: "Price",
        validation: {
          validateNumber: {
            value: true,
            message: "too long",
          },
          required: "required",
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="form">
        <Form optionForm={optionForm} updateParent={handleSubmit}></Form>
      </div>
      <CardList
        className="cards"
        items={AttemptsList}
        inputs={optionForm.inputs}
      ></CardList>
      <div className="errors">
        <Errors></Errors>
      </div>
    </div>
  );
}

export default App;
