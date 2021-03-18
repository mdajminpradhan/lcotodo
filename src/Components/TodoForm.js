import React, {useState, useContext} from 'react'
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form
} from 'reactstrap'
import { v4 as uuidv4, v4 } from 'uuid';
import {TodoContext} from '../Context/TodoContext'
import {ADD_TODO} from '../Context/action.types'

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext)

    const handleSubmit = (event) => {
        event.preventDefault();

        if(todoString === ""){
            return alert('Please enter your todo');
        }

        const todo = {
            todoString,
            id: v4()
        }

        // console.log(todo);

        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next TODO"
                    value={todoString}
                    onChange={event => setTodoString(event.target.value)}
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="warning">Add TODO</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm
