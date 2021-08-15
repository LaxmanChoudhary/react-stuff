import React from "react";
import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodo } from "../features/todos/todoSlice";
import { useEffect } from "react";
import { baseUrl } from '../configs'

const TodoDisplay = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect fired");
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => dispatch(fetchTodo(data)));
  }, [dispatch]);

  const handleDelete = (id) => {
    fetch(baseUrl+ '/' +id ,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => dispatch(deleteTodo(id)))
  }

  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <ListItem
          divider
          key={todo.id}
          onClick={() => {handleDelete(todo.id)}}
        >
          <Typography>{todo.content}</Typography>
        </ListItem>
      );
    })
  ) : (
    <Typography variant="h5" align="center">
      No todos to do!
    </Typography>
  );
  return <List>{todoList}</List>;
};

export default TodoDisplay;
