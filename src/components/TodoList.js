import React from "react";

export default function TodoList({ listTodo, handleEdit, handleDelete,  }) {
  return (
    <ul className="allTodos">
      {listTodo.map((t) => (
        <li className="singleTodo">
          <div className="TaskName">
            <span key={t.id}>{t.singleTask}</span>
          </div>
          <div className="act-buttons">
            <button onClick={() => handleEdit(t.id)}>Edit</button>
            <button id="Delete" onClick={() => handleDelete(t.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
