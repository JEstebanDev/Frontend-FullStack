import React, { useState } from "react";
import CardTodo from "../components/cardTodo";
import getTodoList from "../utils/Api";

export default function TodoList() {
  const result = getTodoList();
  const list = result.slice(1, 33);
  return (
    <div className="listCards animate__animated animate__fadeIn">
      {list.map(function (item, i) {
        return <CardTodo key={i} item={item} />;
      })}
    </div>
  );
}
