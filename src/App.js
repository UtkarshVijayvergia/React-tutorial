// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, {useState} from 'react';   // to delete todos from the website 



function App() {

  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(todos.filter( (e) => {
      return e!==todo;
    }))
  }



  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Push on Github",
      desc: "Push your first react app code on github today"  
    },
    {
      sno:2,
      title: "Open Source contribution",
      desc: "Find an open source project and contribute"  
    },
    {
      sno: 3,
      title: "title3",
      desc: "desc3"  
    },
  ])



  return (
    <>
      <Header title="MyTodosList" searchbar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}





export default App;
