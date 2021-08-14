import React, { Component } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

export default class TodoForm extends Component {
    state = {
        content: "",
        id: 3,
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
            [e.target.id]: e.target.value,
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
                <TextField
                    fullWidth
                    id="content"
                    label="Anything?"
                    value={this.state.content}
                    onChange={this.handleChange}
                    InputProps = {{
                        endAdornment: (
                            <InputAdornment position="end">
                                <AddCircleIcon color="primary"/>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        );
    }
}
