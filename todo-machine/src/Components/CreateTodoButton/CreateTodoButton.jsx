import { useContext } from "react"
import { TodoContext } from "../../Context/TodoContext"

function CreateTodoButton() {

  const { setOpenModal } = useContext(TodoContext)

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