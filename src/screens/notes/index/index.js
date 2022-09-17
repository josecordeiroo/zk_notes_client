import React, { Fragment } from "react";

import { Navigate } from "react-router-dom";
import HeaderLogged from "../../../components/header_logged";

import Notes from "../../../components/notes";

const NotesScreen = () => {
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
      <HeaderLogged />
      <Fragment>
        <Notes />
      </Fragment>
    </>
  );
};

export default NotesScreen;
