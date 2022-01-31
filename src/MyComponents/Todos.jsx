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
      <div className="container text-light sizer_todos" style={myStyle}><br />
        <h3 className='text-center qwerty'>Todos List</h3>
        <div className='content'>
          <div className='text-padder'>
            {props.todos.length===0
              ?         // if
              <center>
                <br /><br /><br /><br /><br /><br /><br />
                No Todos to Display
              </center>                   // if else condn when all the todos deleted message will be diplayed
              :         // else
              props.todos.map((todo)=>{
                return <TodoItem className="sizer_todos " todo = {todo} key={todo.sno} onDelete={props.onDelete}/> // key for better code & no console error when inspect
              })
            }
          </div>
        </div>
      </div><br /><br /><br />
    </>
  );
};
