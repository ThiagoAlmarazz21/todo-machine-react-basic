import { useState } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import { AppUI } from './AppUI'
import './App.css'

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Sacar la basura', completed: false},
//   {text: 'Lavar los platos', completed: true},
//   {text: 'Tomar awita', completed: false},
//   {text: 'LALALA', completed: false},
// ]

// localStorage.setItem('TASK_APP_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TASK_APP_V1')

function App() {
  const [todos, saveTodos] = useLocalStorage('TASK_APP_V1', [])
  const [searchValue, setSearchValue] = useState('')
  const [] = useState()

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )

  const toCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };

  return(
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      toCompleteTodo={toCompleteTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App