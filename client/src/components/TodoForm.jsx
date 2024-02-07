import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addNewTodo } from "../redux/actions";
const TodoForm = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));
        
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input 
            placeholder="Enter To-Do here.."
            className="input"
            onChange={onInputChange}
            />
        </form>
    )
    
}
export default TodoForm;