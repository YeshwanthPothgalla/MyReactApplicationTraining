// import Display from "./Display";
import React from "react";
import Button from '@mui/material/Button';

function Buttons(props){

    

    return(
        <div>
            <Button onClick={props.increment} disabled ={!(props.counter<4)}>Increement</Button>
            <Button onClick={props.decrement} disabled={props.counter===0}>Decreement</Button>
        </div>
    )
}

export default Buttons;