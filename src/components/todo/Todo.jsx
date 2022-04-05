import React,{useState} from "react";
import { Button, Modal} from 'react-bootstrap';
function Todo({ todo, index, markTodo, removeTodo,updateTodoItem }) {
    const [show,setShow] = useState(false);
    return (
        <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>
                <Button variant="outline-danger" onClick={() => removeTodo(index)} className="ms-1">
                <i class="fa fa-trash" aria-hidden="true"></i>
                </Button>
                <Button variant="outline-success" className="ms-1" onClick={() => updateTodoItem(index)}>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Button>
                <Button variant="outline-info" className="ms-1" onClick={()=>setShow(!show)}>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </Button>
            </div>

            {/* Modal Open */}
            <Modal show={show}>
                <Modal.Header className="m-auto">Todo Item View</Modal.Header>
                <Modal.Body>
                    <h4>{todo.text}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>setShow(!show)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Todo;