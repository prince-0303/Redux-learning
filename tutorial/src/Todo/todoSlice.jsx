import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : 'todos',
    initialState : [],
    reducers:{
        addTodo : (state, action) => {
            state.push({id: Date.now(), text: action.payload, completed: false})
        },
        deleteTodo : (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    },
})
export const {addTodo, deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;