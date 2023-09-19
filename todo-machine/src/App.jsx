import './App.css'
import { CreateTodoButton } from './Components/CreateTodoButton'
import { TodoCounter } from './Components/TodoCounter'
import { TodoItem } from './Components/TodoItem'
import { TodoList } from './Components/TodoList'
import { TodoSearch } from './Components/TodoSearch'


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Sacar la basura', completed: false},
  {text: 'Lavar los platos', completed: true},
  {text: 'Tomar awita', completed: false},
  {text: 'Tomar awita', completed: false},
  {text: 'Tomar awita', completed: false},
  {text: 'Tomar awita', completed: false},
]

function App() {
  return (
    <>
    <div className='grid-container'>

      <header className='header'>
        <TodoCounter total={2} completed={1} />
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
            <TodoSearch />
          </div>
          <div className='create-btn-container'>
              <CreateTodoButton />
          </div>
          <div className='card-container'>
            <TodoList>
              {defaultTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
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

export default App