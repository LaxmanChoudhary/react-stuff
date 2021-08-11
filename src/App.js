import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "This is the default task" }
    ]
  }

  addTodo = (todo) => {
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos,
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: todos,
    })
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

