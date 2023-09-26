import React from 'react'
import './TodoItem.css'

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <div className={`card ${completed && 'completed'}`}>

      <li>
        
        <span onClick={onComplete}>
          <i
          className={`bx bx-check ${completed && 'icon-active'}`}
          ></i>
        </span>

        <p className={`${completed && 'completed'}`}>{text}</p>

        <span onClick={onDelete}>
          <i
          className='bx bx-x'
          ></i>
        </span>

      </li>
      
    </div>
  )
}

export { TodoItem }