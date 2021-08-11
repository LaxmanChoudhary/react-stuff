import React, { Component } from "react";
import TodoDisplay from "./TodoDisplay.js";
import TodoForm from "./TodoForm.js";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default class Todos extends Component {
    state = {
        todos: [
            { id: 1, content: "This is the default task" },
            { id: 2, content: "Task#2 to work with" },
        ],
    };

    addTodo = (todo) => {
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos,
        });
    };

    deleteTodo = (id) => {
        let todos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({
            todos: todos,
        });
    };
    render() {
        return (
            <Container>
                <Typography
                    variant="h3"
                    color="primary"
                    align="center"
                    gutterBottom
                >
                    Todos
                </Typography>
                <TodoForm addTodo={this.addTodo} />
                <TodoDisplay
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                />
            </Container>
        );
    }
}
