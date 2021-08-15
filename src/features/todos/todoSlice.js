import { createSlice } from "@reduxjs/toolkit";

// Creating a slice requires a string 'name' to identify the slice,
// an initial state value, and one or more reducer functions
// to define how the state can be updated. Once a slice is created,
// we can export the generated Redux action creators and the reducer function for the whole slice.
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    // without payload actions
    fetchTodo: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, fetchTodo } = todoSlice.actions;
export default todoSlice.reducer;
