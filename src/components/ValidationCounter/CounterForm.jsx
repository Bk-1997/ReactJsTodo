import React,{useState} from 'react';
import Counter from './Counter';
const CounterForm = () => {
    const [counter, setCounter] = useState();  
    
    const updateCounter = value =>{
        setCounter(value);
    }
    return (
        <>
            <Counter counter={counter} updateCounter={updateCounter}/>
        </>
    )
}

export default CounterForm