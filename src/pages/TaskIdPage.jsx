import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import TaskService from "../API/TaskService";
import Loader from "../UI/Loader/Loader";

const TaskIdPage = () => {
  const params = useParams();
  const [task, setTask] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchingTaskById, isLoading, error] = useFetching(async () => {
    const response = await TaskService.getById(params.id);
    setTask(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await TaskService.getCommentsByTaskId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchingTaskById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1 style={{ marginTop: "100px" }}>
        Вы открыли страницу задачи с ID = {params.id}
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {task.id}. {task.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskIdPage;
