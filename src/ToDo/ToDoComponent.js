
import React from "react";
import  { useState } from "react";
import ToDoList from "./ToDoList";
import swapArrayElement from './ArrayUtil'
import Button from '@mui/material/Button';


function ToDoComponent(){
  
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const addToDoHandler = () =>{
        let tempTasks = [...tasks];
        let newTask = {task: taskInput, state:'NOT_STARTED'};
        tempTasks.push(newTask);
        setTasks(tempTasks);
        setTaskInput('');
    }
{/* Striking of the task when comlpete method*/}

    // const handleComplete = (index) =>{
    //     let tempTasks = [...tasks];
    //     let curTask = tempTasks[index];
    //     curTask.state = 'COMPLETED';
    //     setTasks(tempTasks);
    // }
{/* Deleting of the task when comlpete method*/}
    const handleComplete = (index) =>{
        let tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }
    const moveUp = (index) => {        
        if (index > 0) {
            setTasks(swapArrayElement(tasks, index, 'UP'));
        }
    }
    const moveDown = (index) => {
        if (index >=0 && index<tasks.length-1) {
            setTasks(swapArrayElement(tasks, index, 'DOWN'));
            
        }
    }
    
    return(
        <div>
            <h2>To Do Application</h2>
            <input value={taskInput} onChange={(event)=>{
                setTaskInput(event.target.value);
            }}></input>
            <Button size="small" variant="contained" onClick={addToDoHandler}>Save</Button>
            <ToDoList toDos={tasks} handleComplete={handleComplete} moveUp={moveUp} moveDown={moveDown} ></ToDoList>
        </div>
    )
   
}

export default ToDoComponent;