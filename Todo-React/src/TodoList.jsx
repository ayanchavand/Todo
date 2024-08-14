import React from "react";

export default function TodoList({todoTask}){
    return (
      <>
      <ul>
        {todoTask.map((todo, index) => (<TodoItem key={index} todoValue={todo}/>))}
      </ul>
      </>
    )
}

function TodoItem({todoValue}){
    return <li>{todoValue}</li>
}