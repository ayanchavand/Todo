import * as React from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList';


export default function App() {
  const [Todo, setTodo] = useState("")

  const addTodo = (todo) => {
    setTodo(todo)
  }
  return (
    <>
      <TodoList todoTask ={Todo} />
      <TodoForm addTodo={addTodo}/>
    </>
  ) 
}
