import Tasks from "../pages/Tasks";
import SimpleForm from "../components/form/SimpleForm";
import TaskIdPage from "../pages/TaskIdPage";
import Error from "../pages/Error";

export const privetaRoutes = [
  { path: "/main", element: Tasks },
  { path: "/tasks/:id", element: TaskIdPage },
  { path: "*", element: Error },
];

export const publicRoutes = [
  { path: "/auth", element: SimpleForm },
  { path: "*", element: Error },
];
