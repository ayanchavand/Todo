import * as React from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList';


export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }
  return (
    <>
      <TodoList todoTask ={todos} />
      <TodoForm addTodo={addTodo}/>
    </>
  ) 
}
