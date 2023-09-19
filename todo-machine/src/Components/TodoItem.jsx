import React from 'react'
import './TodoItem.css'

function TodoItem({ text, completed }) {
  return (
    <div className='card'>

      <li>
        
        <span>
          <i className={`bx bx-check ${completed && 'icon-active'}`}></i>
        </span>

        <p className={`${completed && 'completed'}`}>{text}</p>

        <span>
          <i className='bx bx-x'></i>
        </span>

      </li>
      
    </div>
  )
}

export { TodoItem }