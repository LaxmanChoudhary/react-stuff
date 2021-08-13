import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  800: 1,
};

function Notes() {
  const [notes, setNotes] = useState([]);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/tasks/" + id , {
      method: 'DELETE'
    })
    let newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </Masonry>
  );
}

export default Notes;
