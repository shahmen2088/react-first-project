import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyHeader from "./UI/header/MyHeader";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
