import { useState } from "react";

function TodoSearch({ searchValue, setSearchValue }) {

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