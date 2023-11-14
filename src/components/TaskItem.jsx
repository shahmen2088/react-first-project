import React from "react";
import MyButton from "../UI/button/MyButton";

const TaskItem = (props) => {
  return (
    <div className="task">
      <div className="task__content">
        <h3 className="task__title">Название задачи:</h3>
        <p className="task__description">
          <b>{props.task.id}. {props.task.title}</b>
        </p>
        <h4 className="task__title">Описание задачи:</h4>
        <p className="task__description"><em>{props.task.body}</em></p>
      </div>
      <div className="task__btn">
        <MyButton onClick={() => props.soccessTask(props.task)}>
          Выполнить
        </MyButton>
        <MyButton onClick={() => props.removeTask(props.task)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default TaskItem;
