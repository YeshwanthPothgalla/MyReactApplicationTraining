import { useState } from "react";
import React from "react";
import Buttons from './Buttons'
import '@fontsource/roboto/300.css';
// import { fontGrid } from "@mui/material/styles/cssUtils";

function Display(){
    let [counter, setCounter] = useState(6);
    // const [text, setText] = useState("");

    const increment = () => {
        setCounter(++counter);
    }
    const decrement = () => {
        setCounter(--counter);
    }

    // const handleTextChange = (event) => {
    //     setText(event.target.value);
      
    // };
     

    return(
        <div>
            <p>Counter is: {counter}</p>
            <Buttons increment={increment} decrement={decrement} counter={counter}></Buttons>
            <hr></hr>
            {/* <div>
            <label htmlFor="textbox">Please Enter The Task: </label>
            <input type="text" id="textbox" value={text} onChange={handleTextChange}/>
            <button >Save Task</button>
            </div> */}
            {/* <label>To Do Tasks List </label> */}
            
        
        </div>
    )
}

export default Display;