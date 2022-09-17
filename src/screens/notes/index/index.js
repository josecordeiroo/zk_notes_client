import React, { Fragment, useState } from "react";

import { Navigate } from "react-router-dom";
import HeaderLogged from "../../../components/header_logged";

import Notes from "../../../components/notes";



const NotesScreen = () => {
  const[isOpen, setIsOpen] = useState(false)

  if (!localStorage.getItem("user")) {
    return (
      <Navigate
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Fragment>
        <Notes isOpen={isOpen} setIsOpen={setIsOpen}/>
      </Fragment>
    </>
  );
};

export default NotesScreen;
