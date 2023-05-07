import React, { useState } from 'react'

export const EditTodoForm = (props) => {

    const [value, setValue] = useState(props.todoObj.task);

    const handleSubmit = (e)=>{
        e.preventDefault();

        props.editTask(value, props.todoObj.id);
        // setValue(value);        
        // console.log(props.todoObj.id);
    }

  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
        <input className='todo-input' id='edit-todo-input' type="text" placeholder='Update Task' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm;
