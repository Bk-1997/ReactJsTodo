import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value)
        {
            alert("Please add something to-do!...");
             return;
        }
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label><b>Add Todo</b></Form.Label>
            <div className="box">
                <Form.Control
                    type="text"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Add new todo" />
                <Button variant="primary p-3" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default FormTodo;