import { createContext, useEffect, useReducer, useState } from "react";

const initialState = {
  tasks: [],
};
//creating a context
export const TaskContext = createContext();

// reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  // dispatch function
  const [state, dispatch] = useReducer(
    taskReducer,
    JSON.parse(localStorage.getItem("save-task")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("save-task", JSON.stringify(state));
  }, [state]);
  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const editTask = (task) => {
    dispatch({ type: "EDIT_TASK", payload: task });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  return (
    <TaskContext.Provider
      value={{
        ...state,
        addTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
