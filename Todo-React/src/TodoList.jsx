import React from "react";

 export default function TodoList({todoTask}){
    return (
      <>
      <ul>
        <li>{todoTask}</li>
      </ul>
      </>
    )
}