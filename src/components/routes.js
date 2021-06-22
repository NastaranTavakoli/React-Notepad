import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Home, Edit, Add } from "../pages";

export function Routes({
  notes,
  updateNote,
  addNote,
  deleteNote,
}) {
  return (
    <Container style={{ margin: "20px" }}>
      <Switch>
        <Route exact path="/">
          <Home
            items={notes}
            deleteHandler={deleteNote}
          />
        </Route>
        <Route exact path="/add">
          <Add addHandler={addNote} id={notes.length + 1} />
        </Route>
        <Route path="/edit/:id">
          <Edit editHandler={updateNote} />
        </Route>
        <Route>404 not found. This is not the page you are looking for.</Route>
      </Switch>
    </Container>
  );
}
