import {
  TextField,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import { useState } from "react";

const CreateNote = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("todo");

  const useStyles = makeStyles({
    field: {
      display: "block",
      marginBottom: 20,
    },
  });
  const classes = useStyles();
  const addTask = (newTask) => {
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTask),
    }).then(() => props.history.push("/"));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addTask({ title, category, content });
    }
  };
  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          fullWidth
          id="title"
          label="title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <TextField
          className={classes.field}
          fullWidth
          multiline
          rows={3}
          id="content"
          label="details"
          variant="outlined"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <FormControl className={classes.field}>
          <FormLabel>Type of note</FormLabel>
          <RadioGroup
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="work" control={<Radio />} label="work" />
            <FormControlLabel value="todo" control={<Radio />} label="todo" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="reminder"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateNote;
