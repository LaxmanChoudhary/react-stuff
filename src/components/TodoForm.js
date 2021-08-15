import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import { baseUrl } from "../configs";

const TodoForm = () => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(baseUrl, {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({content})
    })
      .then(res => res.json())
      .then(data => dispatch(addTodo(data)))
    setContent('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id="content"
        label="Anything?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddCircleIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default TodoForm