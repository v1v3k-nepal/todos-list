import { faCheckCircle, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Todo = ({todoObj,editTodo,deleteTodo,toggleComplete}) => {

    // console.log(task);
    
  return ( 
      <div className={`${todoObj.completed? 'completed': 'todo'}`}>
          <p onClick={()=>{toggleComplete(todoObj.id)}}>{todoObj.task}</p>
          <div className='icons'>
              <FontAwesomeIcon icon={faCheckCircle} className={`${todoObj.completed? '':'hide-checked-icon'}`}/>
              <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{editTodo(todoObj.id)}}/>
              <FontAwesomeIcon icon={faTrash} onClick={()=>{deleteTodo(todoObj.id)}}/>
          </div>
      </div>
  )
}

// className={`${todoObj.completed? 'completed': 'todo'}`}
// onClick={()=>{toggleComplete(todoObj.id)}}
