import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName) 
    
        let parsedItem;
    
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
    
        setLoading(false)
      }
      catch(error) {
        setLoading(false)
        setError(true)
      }
    }, 2000);
  }, [])

  // 👇FUNCION PARA ACTUALIZAR EL ESTADO Y AL MISMO TIEMPO localStorage()👇
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }

// localStorage.removeItem('TASK_APP_V1')

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Sacar la basura', completed: false},
//   {text: 'Lavar los platos', completed: true},
//   {text: 'Tomar awita', completed: false},
//   {text: 'LALALA', completed: false},
// ]

// localStorage.setItem('TASK_APP_V1', JSON.stringify(defaultTodos))
