import React from "react";
import { Route, Routes } from "react-router-dom";
import { privetaRoutes, publicRoutes } from "../router/routes";

const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privetaRoutes.map((rout) => (
        <Route key={rout.path} path={rout.path} element={<rout.element />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((rout) => (
        <Route key={rout.path} path={rout.path} element={<rout.element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
