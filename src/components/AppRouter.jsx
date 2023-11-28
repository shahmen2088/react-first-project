import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privetaRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
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
