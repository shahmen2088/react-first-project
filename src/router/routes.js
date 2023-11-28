import Tasks from "../pages/Tasks";
import SimpleForm from "../components/form/SimpleForm";
import TaskIdPage from "../pages/TaskIdPage";
import Error from "../pages/Error";

export const privetaRoutes = [
  { path: "*", element: Tasks },
  { path: "/tasks/:id", element: TaskIdPage },
];

export const publicRoutes = [
  { path: "/", element: SimpleForm },
  { path: "/auth", element: SimpleForm },
  // { path: "*", element: Error },
];
