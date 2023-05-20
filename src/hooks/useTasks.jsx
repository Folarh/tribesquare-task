import { TaskContext } from "../context/Taskcontext";
import { useContext } from "react";

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used inside of a provider");
  }

  return context;
};
