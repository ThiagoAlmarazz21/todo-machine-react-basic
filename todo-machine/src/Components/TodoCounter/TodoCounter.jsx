import React from 'react'
import './TodoCounter.css'

function TodoCounter({ total, completed }) {
  return (
    total == completed ?
    <h1 className='TodoCounter-title'>¡Felicidades, has completado todas tus tareas!</h1>
    :

    <h1 className='TodoCounter-title'>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>
  )
}

export { TodoCounter }