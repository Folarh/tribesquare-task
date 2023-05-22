import React, { useState, useEffect } from "react";
import { useTaskContext } from "../hooks/useTasks";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Modal({ modal, setModal }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("not-ncompleted");
  const { addTask, editTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    //updating tasks
    if (title.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: title,
        status: status,
      };
      addTask(newTask);
      setTitle("");
      setModal(false);
    }
  };

  return (
    <>
      {modal && (
        <div className="modal-backdrop">
          <div className="modal" data-aos="slide-up">
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  placeholder="Add abtask description"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                status
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="not-ncompleted">Not-completed</option>
                  <option value="completed">Completed</option>
                </select>
              </label>
              <div className="btn">
                <button className="green">Add Task</button>
                <button className="red" onClick={() => setModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
