// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import './MyComponents/App.css'
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';

import React, { useState, useEffect } from 'react';     // to use "useState hooks" to delete todos from the website 
                                                        // to use "useEffect hook" to get the todo array memory after reload
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  // to remove error when after reloading ssome todos are automatically deleted
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));   
  }




  const onDelete = (todo) => {
    console.log("Deleted: ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // console.log("deleted", todos)
                                                            // local storage means.....even after reload todos will still be there
    localStorage.setItem("todos", JSON.stringify(todos));   // setItem used to get the items of array todos and print on website
                                                            // json.stringify -- search on net  
  }




  const [todos, setTodos] = useState(initTodo);             
  useEffect(() => {                                           // used useEffect hook.....also import it before use 
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  const adder = (title,desc) => {
    let sno;
    if(todos.length===0){
      sno = 1
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);    // to add the new myTodo inside todos dict
    // console.log("Added: ", myTodo);
  }



  return (
    <>
      <div className='bg-dark'>
        <Router>
          <Header title="MyTodosList" searchbar={false}/>

            <Routes>

              <Route exact path="/" element = {
                  <>
                    <br /><br />
                    <div className='left-container flexbox-container'>
                      <div><AddTodo className="split-left leftPadder" adder={adder}/></div>
                      <div className='padder'></div>
                      <div><Todos className="split-right rightPadder" todos={todos} onDelete={onDelete}/></div>
                    </div>
                  </>
              }>
              </Route>


              <Route exact path="/about" element = {<About />} >
              </Route>
            
            </Routes>

          <Footer/>

        </Router>

      </div>
    </>
  );
}





export default App;
 