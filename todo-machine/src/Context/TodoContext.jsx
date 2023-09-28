import { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = createContext()

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TASK_APP_V1', [])
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)

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

  return (
    <TodoContext.Provider value={{ 
      loading,
      error,
      completedTodos, 
      totalTodos,
      searchValue,
      searchedTodos,
      setSearchValue,
      toCompleteTodo,
      deleteTodo,
      openModal,
      setOpenModal
     }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }