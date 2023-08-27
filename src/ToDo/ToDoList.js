import Button from '@mui/material/Button';
import React from "react";
import IconButton from '@mui/material/IconButton';

function ToDoList(props){
    return(<div>
        <p>Tasks To Be Completed:</p><p>*Use move up and move down button to Prioritize the taks*</p>
        {
            props.toDos.map((todo, index)=>{
                return(<div key={index}> 
                <hr></hr>
                {todo.state === 'COMPLETED'? <p><s>{todo.task}</s></p> : <p>{todo.task}</p>}
               
                <IconButton aria-lable="up" variant ="outlined" size="small" color="primary" onClick={()=>{props.moveUp(index)}} disabled={index===0}>Move Up</IconButton>
                <IconButton variant ="outlined" size="small" color="success" onClick={()=>{props.handleComplete(index)}}>Completed</IconButton>
                <IconButton variant ="outlined" size="small" color="primary" onClick={()=>{props.moveDown(index)}} disabled={index === props.toDos.length -1}>Move Down</IconButton>

                </div>)
            })
        }
    </div>)
}

export default ToDoList;