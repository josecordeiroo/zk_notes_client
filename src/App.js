import React, { Fragment } from "react";
import "./App.scss";
import { Notification, Section } from "rbx";
import Header from "./components/header";

const App = () => (
  <Fragment>
    <Header/>
    <Section>
      <Notification color="success">Zk Notes</Notification>
    </Section>
  </Fragment>
);

export default App;
