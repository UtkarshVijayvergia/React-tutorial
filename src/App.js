// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';



function App() {

  let todos = [
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
  ]



  return (
    <>
      <Header title="MyTodosList" searchbar={false}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}





export default App;
