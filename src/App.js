import React from "react";
import Tasks from "./pages/Tasks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SimpleForm from "./components/form/SimpleForm";
import MyHeader from "./UI/header/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <Routes>
        <Route path="auth" element={<SimpleForm />} />
        <Route path="main" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
