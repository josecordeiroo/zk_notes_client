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

  const createNote = async (note) => {
    await NotesServices.create(note);
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

  const updateNote = async (id, params) => {
    await NotesServices.patch(id, params);
    fetchNotes();
  };

  const searchNote = async (query) => {
    const response = await NotesServices.search(query)
    setNotes(response.data)
  }

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
        updateNote={updateNote}
        searchNote={searchNote}
        fetchNotes={fetchNotes}
      ></ListNotes>
    </Fragment>
  );
};

export default Notes;
