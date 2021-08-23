import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
import { dbStore } from "../firestore/firestore-config";
import { Typography } from "@material-ui/core";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  800: 1,
};

function Notes() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (id) => {
    await dbStore
      .collection("notes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("doc successfully deleted");
      })
      .catch((error) => {
        console.log("Error", error);
      });
    // await fetch("http://localhost:8000/tasks/" + id, {
    //   method: "DELETE",
    // });
    let newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    console.log("useEffect init!");
    setIsLoading(true);
    dbStore
      .collection("notes")
      .get()
      .then((docs) => {
        let ntes = [];
        docs.forEach((doc) => {
          ntes.push({ ...doc.data(), id: doc.id });
        });
        setNotes(ntes);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false))
  }, []);

  if (isLoading) {
    return <Typography variant="h5">Loading</Typography>;
  } else {
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard key={note.id} note={note} handleDelete={handleDelete} />
          ))
        ) : (
          <Typography align="center">No notes to display!</Typography>
        )}
      </Masonry>
    );
  }
}

export default Notes;
