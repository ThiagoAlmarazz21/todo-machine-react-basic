function CreateTodoButton({ setOpenModal }) {

  return (
    <button
    className='create-btn'
    onClick={() => setOpenModal(true)}
    >
      Agregar tarea
    </button>
  )
}

export { CreateTodoButton }