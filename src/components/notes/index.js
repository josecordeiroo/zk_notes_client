import { Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import React, { useState, Fragment, useEffect } from "react";

import { push as Menu } from "react-burger-menu";

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
    if (response.data.length >= 1) {
      setNotes(response.data.reverse());
      setCurrentNote(response.data[0]);
    }
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id;
    });
    setCurrentNote(note);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Fragment className="notesStyle">
      <ColumnGroup>
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurguerIcon={false}
          customCrossIcon={false}
        >
          <ColumnGroup>
            <Column size={10} offset={1}>
              Search...
            </Column>

            <ListNotes
              notes={notes}
              selectNote={selectNote}
              currentNote={currentNote}
            ></ListNotes>
          </ColumnGroup>
        </Menu>
        <Column size={12} className="notes-editor" id="notes-editor">
          Editor...
        </Column>
      </ColumnGroup>
    </Fragment>
  );
};

export default Notes;
