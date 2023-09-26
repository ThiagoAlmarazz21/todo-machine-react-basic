import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton'
import { TodoCounter } from '../Components/TodoCounter/TodoCounter'
import { TodoItem } from '../Components/TodoItem/TodoItem'
import { TodoList } from '../Components/TodoList/TodoList'
import { TodoSearch } from '../Components/TodoSearch/TodoSearch'

function AppUI ({
  completedTodos,
  totalTodos,
  searchValue,
  searchedTodos,
  setSearchValue,
  toCompleteTodo,
  deleteTodo
}) {
  return (
    <>
    <div className='grid-container'>

      <header className='header'>
        <TodoCounter
        total={totalTodos}
        completed={completedTodos}
        />
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
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className='create-btn-container'>
              <CreateTodoButton />
          </div>
          <div className='card-container'>
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
    </>
  )
}

export { AppUI }