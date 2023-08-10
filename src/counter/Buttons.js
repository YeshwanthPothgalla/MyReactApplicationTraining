// import Display from "./Display";
import React from "react";
function Buttons(props){

    

    return(
        <div>
            <button onClick={props.increment} disabled={!(props.counter<4)}>Increement</button>
            <button onClick={props.decrement} disabled={props.counter===0}>Decreement</button>
        </div>
    )
}

export default Buttons;