import { useEffect, useState } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import MyModal from "./UI/MyModale/MyModal";
import MyButton from "./UI/button/MyButton";
import { useTasks } from "./hooks/useTasks";
import TaskService from "./API/TaskService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortAndSearchedTasks = useTasks(tasks, filter.sort, filter.query);

  let pagesArray = getPagesArray(totalPages);

  const [fetchTasks, isTasksLoading, taskError] = useFetching(async () => {
    const response = await TaskService.getAll(limit, page);
    setTasks(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModal(false);
  };

  const soccessTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <TaskForm create={createTask} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      {taskError && <h1>Произошла ошибка</h1>}
      {isTasksLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <TaskList
          soccessTask={soccessTask}
          removeTask={removeTask}
          tasks={sortAndSearchedTasks}
          title="Список задач!"
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => setPage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
