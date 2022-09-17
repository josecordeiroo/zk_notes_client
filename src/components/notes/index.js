import { Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import React, { useState, Fragment } from "react";

import { slide as Menu } from "react-burger-menu";

import "../../styles/notes.scss";

const Notes = (props) => {
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
          </ColumnGroup>
          <p>List</p>
        </Menu>
        <Column size={12} className="notes-editor" id="notes-editor">
          Editor...
        </Column>
      </ColumnGroup>
    </Fragment>
  );
};

export default Notes;
