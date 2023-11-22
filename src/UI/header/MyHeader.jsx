import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, Outlet, Link } from "react-router-dom";
import cl from "./MyHeader.module.css";



const MyHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
      <nav className={cl.siteNavigation}>
        <Link className={cl.siteNavigationItem} to="/auth">ВХОД|РЕГИСТРАЦИЯ</Link> 
        <Link className={cl.siteNavigationItem} to="/main">СПИСОК ЗАДАЧ</Link>
      </nav>
      <Outlet />
    </header>
  );
};

export default MyHeader;


