import React,{useState} from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo";
import FormTodo from "./FormTodo";
import MyFile from "../../mycomponents/MyFile";

const MainTodo = () => {
    const [todos,setTodos] = useState([
        {
          text: "This is a sampe todo",
          isDone: false
        }
      ])
    
      // create a function add to Todo List
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
    
      // marked Todo List
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      // create a function to remove the Todo List
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    
      // updating todo list
      const updateTodoItem = (index) => {
        const newTodoItems = [...todos];
        const item = newTodoItems[index];
        let newItem = prompt(`Update ${item.text}?`, item.text);
        let todoObj = { text: newItem, isDone: false };
        newTodoItems.splice(index, 1, todoObj);
        if (newItem === null || newItem === "") {
        return;
        } else {
        item.text = newItem;
        }
        setTodos(newTodoItems);
        };
    return (
        <>
            <div className="app">
                <div className="container">
                  <MyFile />
                    <h1 className="text-center mb-4">TODO LIST</h1>
                    <FormTodo addTodo={addTodo} />
                    <div>
                        {todos.map((todo, index) => (
                            <Card className="mt-2">
                                <Card.Body>
                                    <Todo
                                        key={index}
                                        index={index}
                                        todo={todo}
                                        markTodo={markTodo}
                                        removeTodo={removeTodo}
                                        addTodo={addTodo}
                                        updateTodoItem={updateTodoItem}
                                    />
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div></>
    )
}

export default MainTodo