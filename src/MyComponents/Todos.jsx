import React from 'react';
import { TodoItem } from './TodoItem';
import './Todos.css';


export const Todos = (props) => {
  // styling in jsx
  let myStyle = {
    minHeight: "67vh",
  }
  return (
    <>
      <div className="container text-light" style={myStyle}>
        <h3 className='text-center'>Todos List</h3>
        <br />
        {props.todos.length===0
          ?         // if
          "No Todos to Display"                   // if else condn when all the todos deleted message will be diplayed
          :         // else
          props.todos.map((todo)=>{
            return <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> // key for better code & no console error when inspect
          })
        }
      </div>
    </>
  );
};
