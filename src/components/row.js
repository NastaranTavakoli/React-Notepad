import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Segment, Header, Icon } from "semantic-ui-react";

export function Row({ id, text, onDeleteClick }) {
  const history = useHistory();
  return (
    <Segment clearing color="yellow" secondary>
      <Header floated="left">
        <Header.Subheader>{id}</Header.Subheader>
        <span>{text}</span>
      </Header>
      <Button
        icon
        floated="right"
        onClick={() => onDeleteClick(id)}
        color="red"
      >
        <Icon name="delete" />
      </Button>
      <Button
        floated="right"
        onClick={() => history.push(`/edit/${id}/`)}
        color="yellow"
      >
        Edit
      </Button>
    </Segment>
  );
}
