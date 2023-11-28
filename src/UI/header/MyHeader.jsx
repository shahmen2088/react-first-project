import React, { useContext } from "react";
import { useEffect } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import cl from "./MyHeader.module.css";
import { AuthContext } from "../../context";

const MyHeader = () => {
  const location = useLocation();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    console.log("Current location is ", location);
  }, [location]);
  return (
    <header className={cl.siteHeader}>
      <div className={cl.siteInnerHeader}>
        <h1>
          <Link href="#">TO DO LIST</Link>
        </h1>
      </div>
      {isAuth ? (
        <nav className={cl.siteNavigation}>
          <Link className={cl.siteNavigationItem} to="/auth" onClick={logOut}>
            ВЫЙТИ
          </Link>
          <Link className={cl.siteNavigationItem} to="/main">
            СПИСОК ЗАДАЧ
          </Link>
        </nav>
      ) : (
        <nav className={cl.siteNavigation}></nav>
      )}
      <Outlet />
    </header>
  );
};

export default MyHeader;
