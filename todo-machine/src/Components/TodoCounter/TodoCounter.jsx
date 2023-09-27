import React, { useContext } from 'react'
import { TodoContext } from '../../Context/TodoContext'
import './TodoCounter.css'

function TodoCounter() {
  const {
    completedTodos, 
    totalTodos,
  } = useContext(TodoContext)
  return (
    <h1 className='TodoCounter-title'>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1>
  )
}

export { TodoCounter }