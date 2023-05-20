import React, { useState } from "react";
import { useTaskContext } from "../hooks/useTasks";
import Modal from "../components/Modal";

export default function AddTask() {
  const [modal, setModal] = useState(false);
  const { tasks } = useTaskContext();
  return (
    <div className="main">
      <div className="add-task">
        <p>
          {tasks.length} <b>Task(s)</b>
        </p>

        <button onClick={() => setModal(true)}>Add Task</button>
        <select name="tasks" id="tasks">
          <option value="all">All</option>
          <option value="not-completed">not-completed</option>
          <option value="completed">completed</option>
        </select>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

<section className="add-task"></section>;
