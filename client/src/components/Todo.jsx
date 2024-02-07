import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";
import { useState } from "react";



const Todo = ({todo}) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    
    return (
        <li
            className="task"
            onClick={ () => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : '',
                color: todo.done ? '#cdffcd' : '#557C55'
            }}
           
        >
            <span style={{ display: editing ? 'none' : ''}}>{todo.data}</span>
            <form
                style={{ display: editing ? 'inline' : 'none'}}
                onSubmit={onFormSubmit}
            
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <FaTrash>
                <i className="fas fa-trash" />
                </FaTrash>
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <FaPen>
                <i className="fas fa-pen" />
                </FaPen>
            </span>
        </li>
        
    )
}

export default Todo;