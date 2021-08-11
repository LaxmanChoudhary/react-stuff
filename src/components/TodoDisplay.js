import React from "react";
import Typography from "@material-ui/core/Typography";
import { List, ListItem } from "@material-ui/core";

const TodoDisplay = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map((todo) => {
            return (
                <ListItem
                    divider
                    key={todo.id}
                    onClick={() => {
                        deleteTodo(todo.id);
                    }}
                >
                    <Typography>{todo.content}</Typography>
                </ListItem>
            );
        })
    ) : (
        <Typography variant="h5" align="center">No todos to do!</Typography>
    );
    return (
        <List>{todoList}</List>
    );
};

export default TodoDisplay;
