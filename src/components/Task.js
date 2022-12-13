import React,{useState} from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Task({task,deleteTask,finishTask,updateTask}) {
 const [textOfUpdatedTask,setUpdateTask]= useState('')

    const handleClick=()=>{
        deleteTask(task.id)
    };
    const  handleDone=()=>{
        finishTask(task.id)
    };
    const handleChange =(e)=>{
      let newText=e.target.value
      setUpdateTask(newText)
      console.log(textOfUpdatedTask)

    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit =(e)=>{
      e.preventDefault();
      updateTask(task.id,textOfUpdatedTask);
      handleClose();
    }
  
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title style={{textDecoration: task.done ? 'line-through':'none'}}>{task.text}</Card.Title>
      <Button variant="danger" onClick={handleClick}>Delete</Button>
      <Button variant="primary" onClick={handleShow}>
        update
      </Button>
     <Form.Group className="mb-3" controlId="formBasicCheckox">
      <Form.Check type="checkbox" label="done-undeone" onClick={handleDone} />
     </Form.Group>
    </Card.Body>
  </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder={task.text} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default Task
