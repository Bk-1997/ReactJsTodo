import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Counter = ({ counter, updateCounter }) => {
    const [value, setValue] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            if (isNaN(value)) {
                document.getElementById('error').innerHTML = "Please Enter a Number!...";
            }
            else {
                updateCounter(value);
            }
        }
        else
        {
            document.getElementById('error').innerHTML = "Please fill this Field!...";
        }
        setValue("")
    }
    return (
        <>
            <div className="CounterForm">
                <Form onSubmit={handleSubmit}>
                    <Form.Label><b>Counter Value = {counter}</b></Form.Label>
                    <div className="box">
                        <Form.Control
                            type="text"
                            className="input"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Enter Counter Value" />
                        <Button variant="primary p-3" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
                {!counter && <p id="error"></p>}
            </div>
        </>
    )
}

export default Counter