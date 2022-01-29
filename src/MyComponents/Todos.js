import React from 'react';
import { TodoItem } from './TodoItem';


export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length===0? "No Todos to Display":                   // if else condn when all the todos deleted message will be diplayed
        props.todos.map((todo)=>{
          return <TodoItem todo = {todo} onDelete={props.onDelete}/>
        })
      }
    </div>
  );
};
