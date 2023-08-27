import React, { useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Autocomplete } from "@mui/material";


function SimlpeCounter() {
    let [counter1, setCounter1] = useState(0);
    let [counter2, setCounter2] = useState()

    useEffect(() => {
        console.log('Use Effect being Used')
    }, [counter2])

    

    return (
        <div>
            <p>Counter using the UseEffect</p>
            <p>{counter1}</p>
            <Button variant="contained" onClick={() => {
                setCounter1(++counter1)
                if (counter1 >= 4 || counter1 === 5) {
                    setCounter2(++counter1)
                }
            }}>Increase</Button>
        </div>
    )
}
export default SimlpeCounter;