import React from "react";
import { Header, Icon, Segment, Button, Container } from "semantic-ui-react";

export function HeaderComponent({ onClearClick }) {
  return (
    <div>
      <Segment clearing inverted color="yellow">
        <Container>
          <Header as="h2" floated="left">
            <Icon name="file text" />
            Notepad
            <Header.Subheader>Manage your notes with Notepad</Header.Subheader>
          </Header>
          <Button
            size="big"
            onClick={onClearClick}
            animated="vertical"
            color="orange"
            floated="right"
            verticalAlign="middle"
          >
            <Button.Content visible>Clear all Notes!</Button.Content>
            <Button.Content hidden>
              <Icon name="erase" />
            </Button.Content>
          </Button>
        </Container>
      </Segment>
    </div>
  );
}
