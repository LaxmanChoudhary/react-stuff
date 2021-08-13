import { Avatar, Divider, IconButton, makeStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, purple, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if(note.category === 'reminder'){
        return purple[500]
      }
      if(note.category === 'todo'){
        return yellow[700]
      }
      if(note.category === 'work'){
        return green[500]
      }
      return blue[500]
    }
  }
})

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <Card elevation={3}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        title={note.title}
        subheader={note.category}
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        <Typography variant="body2">{note.content}</Typography>
      </CardContent>
    </Card>
    // <Grid item xs={12} sm={6} md={4} key={note.id}>
    //   <Typography>{note.title}</Typography>
    //   <Typography>{note.content}</Typography>
    // </Grid>
  );
}
