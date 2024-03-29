import axios from 'axios';
import { ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type.js';
import { GETALL_TODO } from './type.js';
import { TOGGLE_TODO } from './type.js';
const API_URL =  'http://localhost:8000';
export const addNewTodo = (data) => async(dispatch) => {

    try{
        const res = await axios.post(`${API_URL}/todos`, {data});
        dispatch({type: ADD_NEW_TODO, payload: res.data});
    }
    catch(error){
        console.log("Error while calling addNewTodoAPI", error.message);
    }
}

export const getAllTodos = () => async(dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({type: GETALL_TODO, payload: res.data});
    }
    catch(error){
        console.log("Error while calling getAllTodoAPI", error.message);
    }
}
export const toggleTodo = (id) => async(dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({type: TOGGLE_TODO, payload: res.data});
    }
    catch(error){
        console.log("Error while calling ToggleTodoAPI", error.response.data);
    }
}
export const updateTodo = (id,data) => async(dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/todos/${id}`,{ data });
        dispatch({type: UPDATE_TODO, payload: res.data});
    }
    catch(error){
        console.log("Error while calling ToggleTodoAPI", error.response.data);
    }
}
export const deleteTodo = (id) => async(dispatch) => {
    try{
        const res = await axios.delete(`${API_URL}/todos/${id}`);
        dispatch({type: DELETE_TODO, payload: res.data});
    }
    catch(error){
        console.log("Error while calling deleteTodoAPI", error.response.data);
    }
}
export const toggleTab = (tab) => async(dispatch) => {
    dispatch({type: TOGGLE_TAB, selected:tab})
}