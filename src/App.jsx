import "./App.css";
import { useState } from "react";

import AddTask from "./components/AddTask";

import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="app">
      <h1>Task Manager</h1>
      <div className="task-app">
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
