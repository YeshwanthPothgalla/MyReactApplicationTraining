
import React from "react";

function ToDoList(props){
    return(<div>
        <p>Tasks To Be Completed:</p><p>*Use move up and move down button to Prioritize the taks*</p>
        {
            props.toDos.map((todo, index)=>{
                return(<div key={index}> 
                <hr></hr>
                {todo.state === 'COMPLETED'? <p><s>{todo.task}</s></p> : <p>{todo.task}</p>}
               
                <button onClick={()=>{props.moveUp(index)}} disabled={index===0}>Move Up</button>
                <button onClick={()=>{props.handleComplete(index)}}>Completed</button>
                <button onClick={()=>{props.moveDown(index)}} disabled={index === props.toDos.length -1}>Move Down</button>

                </div>)
            })
        }
    </div>)
}

export default ToDoList;