import React, { useState } from "react";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [singleTask, setSingleTask] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const [editId, setEditId] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (editId !== 0) {
      const editTodo = listTodo.find((i) => i.id === editId);
      const updatedTodos = listTodo.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, singleTask })
          : { id: t.id, singleTask: t.singleTask }
      );
      setListTodo(updatedTodos);
      setEditId(0);
      setSingleTask("");
      return;
    }
    if (singleTask !== "") {
      setListTodo([
        { id: `${singleTask}-${Date.now()}`, singleTask: singleTask },
        ...listTodo,
      ]);
      setSingleTask("");
    }
  }

  function handleDelete(id) {
    const restTodo = listTodo.filter((t) => t.id !== id);
    setListTodo(restTodo);
  }
  function handleEdit(id) {
    const editTodo = listTodo.find((t) => t.id === id);
    setSingleTask(editTodo.singleTask);
    setEditId(id);
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1>To do List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          singleTask={singleTask}
          setSingleTask={setSingleTask}
          editId={editId}
        />
        <TodoList
          listTodo={listTodo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
