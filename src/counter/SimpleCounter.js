import React, { useEffect } from "react";
import { useState } from "react";


function SimlpeCounter(){
    let [counter1, setCounter1] = useState(0);
    let [counter2, setCounter2] = useState()

    useEffect(()=>{
        console.log('Use Effect being Used')
    },[counter2])

    return(
        <div>
            <p>Counter using the UseEffect</p>
            <p>{counter1}</p>
            <button onClick={()=>{
                setCounter1(++counter1)
                if(counter1>=4||counter1===5){
                    setCounter2(++counter1)
                }
                }}>Increase</button>
        </div>
    )
}
export default SimlpeCounter;