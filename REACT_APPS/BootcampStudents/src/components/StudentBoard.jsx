import React from "react";
import StudentCard from "./StudentCard";

export default function StudentBoard(props) {
  return props.listStudents.map(function (item, i) {
    //Alway put the key in top level
    return <StudentCard key={i} item={item}></StudentCard>;
  });
}
