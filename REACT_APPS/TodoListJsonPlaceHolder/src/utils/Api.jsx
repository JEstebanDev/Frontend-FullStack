import axios from "axios";
import { useEffect, useState } from "react";

export default function getTodoList() {
  const [ListTodo, setListTodo] = useState([]);
  useEffect(() => {
    return () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
          setListTodo(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  }, []);
  return ListTodo;
}

export function getTodoListById(id) {
  const [ValueEdit, setValueEdit] = useState({});
  useEffect(() => {
    return () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(function (response) {
          setValueEdit(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  }, []);
  return ValueEdit;
}

export function setTodoList(data) {
  const promise = axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    data
  );

  return promise.then((response) => response.data);
}

export function editTodoList(data) {
  const promise = axios.put(
    "https://jsonplaceholder.typicode.com/todos/" + data.id,
    data
  );
  return promise.then((response) => response.status);
}

export function removeTodoList(id) {
  const promise = axios.delete(
    "https://jsonplaceholder.typicode.com/todos/" + id
  );
  return promise.then((response) => response.status);
}
