import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, title, soccessTask, removeTask }) => {
  if (!tasks.length) {
    return <h1 style={{ textAlign: "center" }}>Список задач пуст!</h1>;
  }
  return (
    <div className="tasksList">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {tasks.map((task, index) => (
        <TaskItem
          soccessTask={soccessTask}
          removeTask={removeTask}
          number={index + 1}
          task={task}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
