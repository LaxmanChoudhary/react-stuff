import React, { Component } from "react";

export default class TodoForm extends Component {
    state = {
        content: "",
        id: 2,
    };
    resetPlus = () => {
        let id = this.state.id;
        id++;
        this.setState({
            content: "",
            id: id,
        });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.resetPlus();
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="content"></label>
                <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        );
    }
}
