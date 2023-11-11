import { useState } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import MyModal from "./UI/MyModale/MyModal";
import MyButton from "./UI/button/MyButton";
import { useTasks } from "./hooks/useTasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortAndSearchedTasks = useTasks(tasks, filter.sort, filter.query);

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
      <TaskList
        soccessTask={soccessTask}
        removeTask={removeTask}
        tasks={sortAndSearchedTasks}
        title="Список задач!"
      />
    </div>
  );
};

export default App;
