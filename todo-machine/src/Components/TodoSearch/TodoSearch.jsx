import { useContext } from "react"
import { TodoContext } from "../../Context/TodoContext"

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext)
  return (
      <input
      type="text"
      placeholder='Buscar...'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      />
  )
}

export { TodoSearch }