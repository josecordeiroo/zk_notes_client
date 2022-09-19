import { Icon, Title } from "rbx";
import React, { Fragment, useState } from "react";
import Moment from "moment";

import { Modal, Button, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen } from "@fortawesome/free-solid-svg-icons";

import CreateNote from "../modals/create_note"
import EditNote from "../modals/edit_note"
import DeleteNote from "../modals/delete_note"
import ShowNote from "../modals/show_note"

const ListNotes = (props) => {
  const [createShow, setCreateShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [note, setNote] = useState({
    "title": "",
    "body": ""
  })

  const handleShow = {
    create: (note) => {
      setNote(note)
      setCreateShow(true)
    },
    edit: (note) => {
      setNote(note)
      setEditShow(true)
    },
    delete: (note) => {
      setNote(note)
      setDeleteShow(true)
    },
    show: (note) => {
      setNote(note)
      setViewShow(true)
    }
    
  } 
    
    

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
          onClick={() => props.createNote()}
        >
          Criar nota
        </button>
      </div>
      <div className="boxNotes">
        {props.notes.map((item, key) => (
          <div className="boxNote" key={key} onClick={() => handleShow.show(item)}>
            <div className="boxTop">
              <button onClick={() => setEditShow(true)}>
                <FontAwesomeIcon icon={faFilePen} color="success" />
              </button>
              <button onClick={() => props.deleteNote(item._id)}>
                <FontAwesomeIcon icon={faTrash} color="red" />
              </button>
            </div>
            <div className="boxInfos">
              <Title as="p">{item.title}</Title>
              {item.body.length >= 30 ? (
                <p>{item.body.substring(0, 200)}... (clique para ver mais)</p>
              ) : (
                <p>{item.body}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <CreateNote note={note} show={createShow} setShow={setCreateShow} />
      <EditNote note={note} show={editShow} setShow={setEditShow} />
      <DeleteNote note={note} show={deleteShow} setShow={setDeleteShow} />
      <ShowNote note={note} show={viewShow} setShow={setViewShow} />
      
    </>
  );
};

export default ListNotes;
