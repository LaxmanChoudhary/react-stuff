import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <li key={todo.id} onClick={() => {deleteTodo(todo.id)}}>{ todo.content }</li>
            )
        })
    ) : (
        <p>No todos to do!</p>
    );
    return(
        <div className="todo-display">
            <ul>
                { todoList }
            </ul>
        </div>
    )
}

export default Todos;
