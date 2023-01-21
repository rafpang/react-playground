import React from "react";

export default function TodoForm({
  handleSubmit,
  singleTask,
  setSingleTask,
  editId,
}) {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={singleTask}
        onChange={(e) => setSingleTask(e.target.value)}
      />
      <button type="submit">{editId !== 0 ? "Edit" : "Add"}</button>
    </form>
  );
}
