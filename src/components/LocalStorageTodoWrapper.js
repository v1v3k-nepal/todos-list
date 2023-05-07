import React, { useEffect, useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

 export const LocalStorageTodoWrapper = () => {

    const [todos, setTodos] = useState([]);


    useEffect(()=>{
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos)
        }, [])


    const addTodo = (todo)=>{
        const newTodos = [...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        // console.log(todos);
    }

    const deleteTodo = (id)=>{
     let userChoice = prompt("Are you sure you want to delete this todo?(Y/N)");
        if(userChoice==='Y' || userChoice==='y'){
            const newTodos = todos.filter((todo)=>todo.id!==id)
            setTodos(newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
        else if(userChoice ==='N' || userChoice==='n'){
            const newTodos = todos;
            setTodos(newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
        
    }

    const editTodo = (id)=>{
        setTodos(
            todos.map((todo)=>
                todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo)
        )
    }

    const toggleComplete = (id)=>{
        const newTodos = todos.map((todo)=>todo.id===id? {...todo, completed:!todo.completed}:todo);
        setTodos(newTodos);
        localStorage.setItem('todos',JSON.stringify(newTodos));
        // console.log(todos);
    }

    const editTask = (task, id)=>{
        const newTodos = todos.map((todo)=>todo.id === id ? {...todo, task,isEditing:!todo.isEditing}:todo);
        setTodos(newTodos);
        localStorage.setItem('todos',JSON.stringify(newTodos));
    }

  return (
    <div className='container'>
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
            
        </div>
    </div>
  )
}

// export default TodoWrapper;

