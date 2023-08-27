
import React, { useState } from "react";
import Button from '@mui/material/Button';


function Appcounter(props){

    //state variable
    //button click handler
    //display
    
    let [counter, setCounter] = useState(props.initialValue);
    // let f1 = () => {
    //     console.log('hi');
    // }
    let increment =() => {
        setCounter(++counter);
    }
    // let decrement =() => {
    //     setCounter(++counter);
    // }
    
    return (
        <div>
            <p>{props.label} : {counter}</p>
            <Button onClick={increment}>Increment</Button>
            {/* <button onClick={decrement}>Decreement</button> */}
        </div>
    );
}
export default Appcounter;