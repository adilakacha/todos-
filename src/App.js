import Task from './components/Task';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import React,{useState} from 'react';

function App() {
  const initTable=[
  {id:"1",text:"washing",done:false},
  {id:"2",text:"going to",done:false},
];
const [todos,setTodos]=useState(initTable)

const addTask=(task)=>{
  let newTodos=[...todos,task]
  setTodos (newTodos);
};
const deleteTask=(taskId)=>{
let tableAfterDelete=todos.filter((elt)=>elt.id!==taskId)
setTodos (tableAfterDelete);
};
const finishTask=(id)=>{
  let doneUndoneTable=todos.map((elt)=>{
    if(elt.id===id){
      if (elt.done === true){
        return {...elt, done: false};
      }
      if (elt.done === false){
         return {...elt, done: true};
    }
  } else { return elt; }

  });
  setTodos(doneUndoneTable);
};
const updateTask=(id,text)=>{
let newTable=todos.map((elt)=>{
  if (elt.id===id){
    return{...elt,text:text}
  }else { return elt}
})
setTodos(newTable);
};

  return (
  <div>
  <AddTask addTask={addTask}  />
  {todos.map((task)=>(
    <Task 
    key={task.id} 
    task={task} 
    deleteTask={deleteTask}
    finishTask={finishTask}  
    updateTask={updateTask}
    />))
  }
  </div>
  );
}

export default App;
