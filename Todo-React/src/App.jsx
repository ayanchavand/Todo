import * as React from 'react';
import { useState, useEffect } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import axios from 'axios'


export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get('/api/common')
        console.log(res.data)
        setTodos(res.data.todoList)
      }
      catch (error){
        console.error(error.message)
      }
    }
    fetchTodo()
  }, [])

  const addTodo = async (newTodo) => {
    try{
      setTodos((prevTodos) => {
       const updatedList =  [...prevTodos, newTodo]
       axios.put('/api/common', updatedList)

       return updatedList
      })
    } catch (error){
      console.error("Couldn't update!")
    }
  }

  return (
    <>
      <TodoList todos ={todos} />
      <TodoForm addTodo={addTodo}/>
    </>
  ) 
}
