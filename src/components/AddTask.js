import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


function AddTask({addTask}) {
    const [newTask,setNewTask]=useState({id:"",text:"",done:false})
    const handleChange = (e)=>{
        setNewTask({...newTask,id:uuidv4(),text:e.target.value})
        console.log(newTask)
    };
    const handleSubmit=(event)=>{
event.preventDefault();
   addTask(newTask);
   setNewTask({id:"",text:"",done:false})
    };
  return (
    <Form onSubmit={handleSubmit}  >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task</Form.Label>
      <Form.Control type="text" placeholder="Enter Task" onChange={handleChange} value={newTask.text} />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default AddTask
