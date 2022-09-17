import React, { Fragment } from "react";

import { Navigate } from "react-router-dom";

const Notes = () => {
  if (!localStorage.getItem("user")) {
    return (
      <Navigate
        to={{
          pathname: "/login"
        }}
      />
    );
  }

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export default Notes;
