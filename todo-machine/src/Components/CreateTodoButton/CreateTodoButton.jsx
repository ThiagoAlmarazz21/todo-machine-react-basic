function CreateTodoButton() {

  return (
      <button
      className='create-btn'
      onClick={(event) => {
          console.log('Le diste click a CreateTodoButton')
          console.log(event)
          console.log(event.target)
        }
      }
        
      >
        Agregar tarea
      </button>
  )
}

export { CreateTodoButton }