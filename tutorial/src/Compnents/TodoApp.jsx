import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "../Todo/todoSlice"

const Todo = () => {
    const [text, setText] = useState("")
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    console.log(todos)

    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text))
            setText('')
        }
    }

    return (
        <div>
            <h1>Todo</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
