import React, { useState } from 'react';
import { Button} from 'react-bootstrap';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h5 style={{textAlign:"center",marginTop:"50px",marginBottom:"-40px"}}>QNo.8 :-  Create a Counter</h5>
            <div className="counter">
               <h4>{counter}</h4>
                <Button variant="primary" type="submit" onClick={()=>setCounter(counter + 1)}>
                    Increaments
                </Button>
                <Button variant="primary" type="submit" onClick={()=>counter>0?setCounter(counter - 1):counter}>Decreament</Button>
            </div>

        </>
    )
}

export default Counter