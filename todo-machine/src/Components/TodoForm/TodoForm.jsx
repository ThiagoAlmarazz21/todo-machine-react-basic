import React, { useContext, useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../../Context/TodoContext';

function TodoForm() {

   const {
    addTodo,
    setOpenModal,
   } = useContext(TodoContext)

  //  ESTADO LOCAL PARA RECIBIR EL NUEVO TODO
   const [newTodoValue, setNewTodoValue] = useState('')

   const onSumbit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  
   const onCancel = () => {
    setOpenModal(false)
   }

   const onChange = (event) => {
    setNewTodoValue(event.target.value)
   }

  return (
    <form onSubmit={onSumbit}>
      <label>Escribe tu nueva tarea</label>
      <textarea value={newTodoValue} onChange={onChange} required placeholder='Escribe la tarea...'></textarea>
      <div className='TodoForm-button-container'>
      <button type='button' className='TodoForm-btn TodoForm-btn-cancel' onClick={onCancel}>Cancelar</button>
      <button className='TodoForm-btn TodoForm-btn-add'>Añadir</button>
      </div>
    </form>
  )
}

export default TodoForm