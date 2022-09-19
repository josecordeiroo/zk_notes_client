import { Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import React, { useState, Fragment, useEffect } from "react";

// import { push as Menu } from "react-burger-menu";

import "../../styles/notes.scss";

import ListNotes from "./list";
import NotesServices from "../../services/notes";

const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    title: "",
    body: "",
    id: "",
  });

  async function fetchNotes() {
    const response = await NotesServices.index();
    if (response.data.length >= 0) {
      setNotes(response.data.reverse());
      setCurrentNote(response.data[0]);
    }
  }

  const createNote = async () => {
    await NotesServices.create();
    fetchNotes();
  };

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id;
    });
    setCurrentNote(note);
  };

  const deleteNote = async (id) => {
    await NotesServices.delete(id);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Fragment>
      
      <ListNotes
        notes={notes}
        selectNote={selectNote}
        currentNote={currentNote}
        createNote={createNote}
        deleteNote={deleteNote}
      ></ListNotes>
    </Fragment>
  );
};

export default Notes;
