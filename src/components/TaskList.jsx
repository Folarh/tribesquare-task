import React, { useState } from "react";

// material icon
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTaskContext } from "../hooks/useTasks";
export default function TaskList() {
  const { tasks, deleteTask } = useTaskContext();

  return (
    <div className="tasklist">
      <ul>
        {tasks.map((task) => (
          <li className="main-tasks" key={task.id}>
            <p>{task.status}</p>
            <p>{task.title}</p>
            <DeleteOutlineIcon
              className="icon-delete"
              onClick={() => deleteTask(task.id)}
            />

            <EditIcon className="icon-add" />
          </li>
        ))}
      </ul>
    </div>
  );
}
