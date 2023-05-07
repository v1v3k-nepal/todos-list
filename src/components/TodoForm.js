import React, { useState } from 'react'

export const TodoForm = (props) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(value){
            props.addTodo(value);
            setValue('');
        }
        // console.log(value);
    }

  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
        <input className='todo-input' type="text" placeholder='What is the Task Today ?' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
