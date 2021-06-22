import React, { useState, useEffect } from "react";
import "./App.css";
import { HeaderComponent, Routes } from "./components";
import { getItem, setItem } from "./services/storage";

function App() {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    setNotes(getItem("notes", []));
  }, []);

  useEffect(() => {
    setItem("notes", notes);
  }, [notes]);

  const addNote = (title, content) => {
    let newArray = Array.from(notes);
    var note = { id: notes.length + 1, title, content };
    newArray.push(note);
    setNotes(newArray);
  };

  const deleteNote = (id) => {
    let newArray = Array.from(notes);
    newArray.splice(id - 1, 1);
    setNotes(newArray);
  };

  const updateNote = (id, title, content) => {
    let newArray = Array.from(notes);
    var note = newArray.find((n) => n.id === id);
    note.title = title;
    note.content = content;
    setNotes(newArray);
  };


  const clearNotes = () => {
    setNotes([]);
  };

  return (
    <div className="App">
      <HeaderComponent onClearClick={clearNotes} />
      <Routes
        addNote={addNote}
        updateNote={updateNote}
        deleteNote={deleteNote}
        notes={notes}
      />
    </div>
  );
}

export default App;
