import React from "react";
import MyButton from "../UI/button/MyButton";

const TaskItem = (props) => {


    return (
        <div className="task">
        <div className="task__content">
          <strong>{props.number}. {props.task.title}</strong>
          <div>{props.task.body}</div>
        </div>
        <div className="task__btn">
          <MyButton onClick={() => props.soccessTask(props.task)}>Выполнить</MyButton>
          <MyButton onClick={()=> props.removeTask(props.task)}>Удалить</MyButton>
        </div>
      </div>
    )
}

export default TaskItem;