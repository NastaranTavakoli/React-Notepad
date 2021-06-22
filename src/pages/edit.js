import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Header, Icon, Form, Button } from "semantic-ui-react";
import { getItem } from "../services/storage";

export function Edit({ editHandler }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const notes = getItem("notes", []);
    const currentItem = notes[id - 1];
    if (currentItem) {
      setTitle(currentItem.title);
      setContent(currentItem.content);
    } else {
      history.push("/");
    }
  }, [id]);

  let hasErrors = false;

  const onEditClick = () => {
    if (!title.trim()) {
      hasErrors = true;
      toast.error("Title is required!");
    }
    if (!content.trim()) {
      hasErrors = true;
      toast.error("Content is required!");
    }
    if (!hasErrors) {
      editHandler(parseInt(id), title, content);
      history.push("/");
    }
  };

  return (
    <div className="page-style">
      <Header as="h2">
        <Icon name="edit" />
        <Header.Content>Edit Note</Header.Content>
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
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Content: </label>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </Form.Field>
        <Button onClick={onEditClick} color="yellow">
          Update
        </Button>
        <Button onClick={() => history.push("/")} color="red">
          Cancel
        </Button>
        <ToastContainer position="bottom-right" />
      </Form>
    </div>
  );
}
