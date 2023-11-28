import React from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";

const TaskForm = ({ create }) => {
  const [task, setTask] = useState({ title: "", body: "" });

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
        ...task, id: Math.round(Date.now())
    };
    create(newTask);
    setTask({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        type="text"
        placeholder="Название задачи"
      />
      <MyInput
        value={task.body}
        onChange={(e) => setTask({ ...task, body: e.target.value })}
        type="text"
        placeholder="Описание задачи"
      />
      <MyButton onClick={addNewTask}>Создать задачу</MyButton>
    </form>
  );
};

export default TaskForm;
