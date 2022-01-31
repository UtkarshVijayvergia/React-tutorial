import React, {useState} from 'react';
import './AddTodo.css';



export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submitter = (e) => {
        e.preventDefault();       // prevent window from reloading (as its a submit type btn)
        if(!title || !desc){
            alert("Title or Description can not be blank");
        }
        else {
            props.adder(title, desc);
            setTitle("");           // to set the title input field as default after adding todo
            setDesc("");            // to set the description input field as default after adding todo
        }
    }


  return (
    <><br /><br />
        <div className="text-light container text-padder">
            <h3 className='my-3 text-center'>Add New Todo</h3>
            <br />
            <form onSubmit={submitter}>
                
            <div className="mb-3 bg-dark text-light sizer">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}}  className="form-control" id="desc" size="60" placeholder='Add Todo Title'/>
                                                                {/*  setTitle is a useState const made above  */}  
                </div>
                
                <div className="mb-3 bg-dark text-light sizer">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                  <input type="text" value={desc} onChange={(e)=> {setDesc(e.target.value)}}  className="form-control" id="desc" size="60" placeholder='Add Todo Description'/>
                </div>
                
                {/* <div className="mb-3 form-check bg-dark text-light">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}

                <br />
                
                <center>
                    <button type="submit" className="btn btn-success">Add Todo</button>
                </center>

            </form>
            <br />
        </div>
    </>
  );
};
