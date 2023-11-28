import { useEffect, useState } from "react";
import "../styles/App.css";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import MyModal from "../UI/MyModale/MyModal";
import { useTasks } from "../hooks/useTasks";
import TaskService from "../API/TaskService";
import Loader from "../UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../UI/pagination/Pagination";
import AddButton from "../UI/button/AddButton";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortAndSearchedTasks = useTasks(tasks, filter.sort, filter.query);

  const [fetchTasks, isTasksLoading, taskError] = useFetching(async () => {
    const response = await TaskService.getAll(limit, page);
    setTasks(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchTasks();
  }, [page]);

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

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <AddButton style={{marginTop:'80px'}} onClick={() => setModal(true)}>Создать задачу</AddButton>
      <MyModal visible={modal} setVisible={setModal}>
        <TaskForm create={createTask} />
      </MyModal>

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
          title="Список задач"
        />
      )}
      <Pagination totalPages={totalPages} changePage={changePage} page={page} />
    </div>
  );
}

export default Tasks;
