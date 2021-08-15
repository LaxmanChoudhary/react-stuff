import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import TodoDisplay from "./components/TodoDisplay.js";
import TodoForm from "./components/TodoForm.js";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
          <Typography variant="h3" color="primary" align="center" gutterBottom>
            Todos
          </Typography>
          <TodoForm />
          <TodoDisplay />
        </Container>
      </div>
    );
  }
}
