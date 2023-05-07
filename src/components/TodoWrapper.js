import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

 export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo)=>{
        setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}])
        // console.log(todos);
    }

    const deleteTodo = (id)=>{
     let userChoice = prompt("Are you sure you want to delete this todo?(Y/N)");
        if(userChoice==='Y' || userChoice==='y'){
            setTodos(todos.filter((todo)=>todo.id!==id))
        }
        else if(userChoice ==='N' || userChoice==='n'){
            setTodos(todos);
        }
        
    }

    const editTodo = (id)=>{
        setTodos(
            todos.map((todo)=>
                todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo)
        )
    }

    const toggleComplete = (id)=>{
        setTodos(
            todos.map((todo)=>
                todo.id===id? {...todo, completed:!todo.completed}:todo
            )
        );
        console.log(todos);
    }

    const editTask = (task, id)=>{
        setTodos(
            todos.map((todo)=>
                todo.id === id ? {...todo, task,isEditing:!todo.isEditing}:todo
            )
        )
    }

  return (
    <div className='todo-wrapper'>
        <h1>Get Things Done !!</h1>
        <TodoForm addTodo = {addTodo}/>

            {todos.map((todoObj)=>{
                return(
                    todoObj.isEditing ? <EditTodoForm todoObj={todoObj} editTask={editTask} key = {todoObj.id}/>:
                <Todo
                    todoObj={todoObj}
                    key = {todoObj.id}
                    task = {todoObj.task}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleComplete={toggleComplete}/>);                
         })       
        }

        {/* <Todo/> */}
        
    </div>
  )
}

// export default TodoWrapper;
