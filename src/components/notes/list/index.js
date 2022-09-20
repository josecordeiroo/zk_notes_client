import { Icon, Title } from "rbx";
import React, { Fragment, useState } from "react";
import Moment from "moment";

import { Modal, Button, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen, faMagnifyingGlass, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

import CreateNote from "../modals/create_note";
import EditNote from "../modals/edit_note";
import DeleteNote from "../modals/delete_note";
import ShowNote from "../modals/show_note";

const ListNotes = (props) => {
  const [createShow, setCreateShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    body: "",
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [search, setSearch] = useState("");

  const handleShow = (note, action) => {
    setTitle(note.title);
    setBody(note.body);
    setId(note._id);

    action === "setViewShow"
      ? setViewShow(true)
      : action === "setCreateShow"
      ? setCreateShow(true)
      : action === "setEditShow"
      ? setEditShow(true)
      : setDeleteShow(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.searchNote(search);
    }
  };

  return (
    <>
      <div className="headerNotes">
        <div className="headerTexts">
          <h1>Seja bem vindo as suas notas, Zeca</h1>
          {props.notes.length == 0 ? (
            <p size={6}>Você não possui notas ainda. Clique em criar nota.</p>
          ) : props.notes.length == 1 ? (
            <p size={6}>{props.notes.length} nota criada até o momento.</p>
          ) : (
            <p size={6}>{props.notes.length} notas criadas até o momento.</p>
          )}
        </div>
        <button
          state="active"
          color="custom-purple"
          outlined
          size="small"
          onClick={() => handleShow(note, "setCreateShow")}
        >
          Criar nota
        </button>

        <div>
          
            <label>Pesquisar Nota:</label>
            <input
              placeholder="Digite título ou conteúdo"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => props.searchNote(search)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button
              variant="success"
              onClick={() => {
                props.fetchNotes();
                setSearch("");
              }}
            >
              <FontAwesomeIcon icon={faSquareXmark} />
            </button>
         
        </div>
      </div>
      <div className="boxNotes">
        {props.notes.map((item, key) => (
          <button className="boxNote" key={key}>
            <div className="boxTop">
              <button onClick={() => handleShow(item, "setEditShow")}>
                <FontAwesomeIcon icon={faFilePen} color="success" />
              </button>
              <button onClick={() => handleShow(item)}>
                <FontAwesomeIcon icon={faTrash} color="red" />
              </button>
            </div>
            <div
              className="boxInfos"
              onClick={() => handleShow(item, "setViewShow")}
            >
              <Title as="p">{item.title}</Title>
              {item.body.length >= 30 ? (
                <p>{item.body.substring(0, 200)}... (clique para ver mais)</p>
              ) : (
                <p>{item.body}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      <CreateNote
        createNote={props.createNote}
        show={createShow}
        setShow={setCreateShow}
      />
      <EditNote
        updateNote={props.updateNote}
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        id={id}
        show={editShow}
        setShow={setEditShow}
      />
      <DeleteNote
        deleteNote={props.deleteNote}
        id={id}
        show={deleteShow}
        setShow={setDeleteShow}
      />
      <ShowNote
        title={title}
        body={body}
        show={viewShow}
        setShow={setViewShow}
      />
    </>
  );
};

export default ListNotes;
