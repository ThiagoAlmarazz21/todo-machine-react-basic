import { useContext } from 'react'
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton'
import { TodoCounter } from '../Components/TodoCounter/TodoCounter'
import { TodoItem } from '../Components/TodoItem/TodoItem'
import { TodoList } from '../Components/TodoList/TodoList'
import { TodoSearch } from '../Components/TodoSearch/TodoSearch'
import { TodosError } from '../Components/TodosError/TodosError'
import { TodosLoading } from '../Components/TodosLoading/TodosLoading'
import { TodoSearchLoading } from '../Components/TodosLoading/TodoSearchLoading'
import { Modal } from '../Components/Modal/Modal'
import { TodoContext } from '../Context/TodoContext'
import TodoForm from '../Components/TodoForm/TodoForm'

function AppUI () {

  const {
    loading,
    error,
    searchedTodos,
    toCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)

  return (
    <>
      <div className='grid-container'>

        <header className='header'>
          {loading
            ?
            <h2>Cargando TODOs...</h2>
            :
            <TodoCounter />}

        </header>

        <section className='sidebar'>
          <div className='title'>
            <h1>Task App</h1>
          </div>
          <div className='menu'>
            <ul>
              <li className='inicio'><a href="/"><i className='bx bx-home-alt-2'></i> Inicio</a></li>
              <li><a href="/"><i className='bx bx-user'></i> Perfil</a></li>
              <li><a href="/"><i className='bx bx-log-out-circle' ></i> LogOut</a></li>
            </ul>
          </div>
        </section>

        <main className='main'>

          <div className='main-container'> 

            <div className='input-search-container'>
              {loading ? <TodoSearchLoading /> : <TodoSearch />}
            </div>

            <div className='create-btn-container'>
                {(!loading && searchedTodos == 0) && <h2>¡Crea tu primer tarea!</h2>}
                {loading ? '' : <CreateTodoButton setOpenModal={setOpenModal}/>}
            </div>

            <div className='card-container'>

              {error && <TodosError />}
              {loading && <TodosLoading />}

              <TodoList>

                {searchedTodos.map(todo => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    onComplete={() => toCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    completed={todo.completed}/>
                ))}

              </TodoList>

            </div>

          </div>

        </main>

      </div>
      
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal}/>
        </Modal>
      )}                                              

    </>
  )
}

export { AppUI }