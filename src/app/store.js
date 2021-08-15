import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todos/todoSlice'

// create a redux store
export default configureStore({
  // help in combine reduces
  // pass all reducers at once in reducers' object
  reducer: {
    todos: todoReducer
  }
})