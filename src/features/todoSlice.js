import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todoList')) || [],
    // todos:[
    //     {
    //         id: 1,
    //         text: 'First todo',
    //         completed: false                                                   
    //     }
    // ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state = initialState, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === id ? {...todo, text: newText } : todo
            );
        },
        toggleComplete: (state, action) => {
            
            state.todos = state.todos.map(
                (todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            )
        }
    }
})

export const {addTodo, removeTodo, editTodo, toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;