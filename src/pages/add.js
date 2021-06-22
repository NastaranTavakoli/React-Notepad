import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  getSessionItem,
  setSessionItem,
  removeSessionItem,
} from "../services/storage";
import { ToastContainer, toast } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import { Header, Icon } from "semantic-ui-react";

export function Add({ id, addHandler }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  let hasErrors = false;

  useEffect(() => {
    setTitle(getSessionItem("title", ""));
    setContent(getSessionItem("content", ""));
  }, []);

  const onAddClick = () => {
    if (!title.trim()) {
      hasErrors = true;
      toast.error("Title is required!");
    }
    if (!content.trim()) {
      hasErrors = true;
      toast.error("Content is required!");
    }
    if (!hasErrors) {
      addHandler(title, content);
      removeSessionItem("title");
      removeSessionItem("content");
      history.push("/");
    }
  };

  const onCancelClick = () => {
    removeSessionItem("title");
    removeSessionItem("content");
    history.push("/");
  };

  return (
    <div className="page-style">
      <Header as="h2">
        <Icon name="add square" />
        <Header.Content>Add Note</Header.Content>
      </Header>
      <Form>
        <Form.Field>
          <label>Id: {id}</label>
        </Form.Field>
        <Form.Field>
          <label>Title: </label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSessionItem("title", e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Content: </label>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setSessionItem("content", e.target.value);
            }}
          />
        </Form.Field>
        <Button onClick={onAddClick} color="yellow">
          Save
        </Button>
        <Button onClick={onCancelClick} color="red">
          Cancel
        </Button>
      </Form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
