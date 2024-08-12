import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'
export const store = configureStore({
    reducer:  {
        todo: todoReducer
    }
        /*
        If you only have one reducer and want the state managed directly by this reducer without any nesting.
        If you have or anticipate having multiple reducers, it's common to combine them using keys to organize the state. This is done by passing an object with named reducers.
        */
   
})