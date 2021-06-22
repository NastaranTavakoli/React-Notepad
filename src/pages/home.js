import React from "react";
import { List } from "../components";
import { useHistory } from "react-router-dom";
import { Button, Container, Message, Icon } from "semantic-ui-react";

export function Home({ items, deleteHandler }) {
  const history = useHistory();
  let displayValue;
  items.length === 0 ? (displayValue = "block") : (displayValue = "none");
  return (
    <Container>
      <div>
        <h1>Notes</h1>
        <div style={{ display: displayValue }}>
          <Message warning>
            <Message.Header>You don't have any notes!</Message.Header>
            <p>Please add your first Note</p>
          </Message>
        </div>
        <List items={items} onDeleteClick={deleteHandler} />
        <Button
          icon
          labelPosition="right"
          onClick={() => history.push("/add")}
          color="yellow"
        >
          Add Note
          <Icon name="add" />
        </Button>
      </div>
    </Container>
  );
}
