import { Button, Column, Title, List, Tag } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import React, { Fragment } from "react";
import Moment from "moment";

const ListNotes = (props) => {
  return (
    <Fragment>
      <ColumnGroup breakpoint="mobile">
        <Column size={6} offset={1}>
          <Title size={6}>{props.notes.length} notas</Title>
        </Column>
      </ColumnGroup>
      <Button
        state="active"
        color="custom-purple"
        outlined
        size="small"
        onClick={() => props.createNote()}
      >
        Nova Nota
      </Button>
      <List>
        {props.notes.map((item, key) => (
          <List.Item
            key={key}
            onClick={() => props.selectNote(item._id)}
            active={item == props.currentNote}
          >
            <Tag rounded color="light">
              {Moment(item.created_at).format("DD/MM")}
            </Tag>
            <Title size={6}>
              {item.title.replace(/(<([^>]+)>)/gi, "").substring(0, 15)}
            </Title>
            <Title size={6} subtitle spaced={false}>
              {item.body.replace(/(<([^>]+)>)/gi, "").substring(0, 30)}
            </Title>

            <ColumnGroup breakpoint="mobile">
              <Column size={10}></Column>
            </ColumnGroup>
          </List.Item>
        ))}
      </List>
    </Fragment>
  );
};

export default ListNotes;
