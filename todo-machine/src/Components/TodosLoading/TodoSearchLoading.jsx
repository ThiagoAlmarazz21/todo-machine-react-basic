import './TodoSearchLoading.css'

function TodoSearchLoading() {
  return (
      <input
      className="disable-input"
      type="text"
      placeholder='Buscar...'
      disabled
      />
  )
}

export { TodoSearchLoading }