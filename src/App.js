import React from "react";
import Tasks from "./pages/Tasks";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SimpleForm from "./components/form/SimpleForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SimpleForm />}>
        <Route path="dashboard" element={<SimpleForm />} />
      </Route>
    )
  );

  return (
   <RouterProvider router={router} />
  );
}

export default App;
