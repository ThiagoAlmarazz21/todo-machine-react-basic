import React from 'react'
import './TodoList.css'

function TodoList(props) {
  return (
    <div className='list'>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}

export { TodoList }