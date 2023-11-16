import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import cl from "./SimpleForm.module.css";
import MyButton from "../../UI/button/MyButton";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className='success'
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1 className={cl.message}>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className={cl.message}
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1 className={cl.message}>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className={cl.myForm}>
      {/* Calling to the methods */}
      
      <form className={cl.formInner}>
        <div>
          <h1 style={{color: '#333'}}>Авторизация</h1>
        </div>
        <div>
          <label className={cl.myLabel} htmlFor="name">
            Name
          </label>
          <MyInput
            className={cl.myInput}
            type="text"
            id="name"
            value={name}
            onChange={handleName}
          />
        </div>
        <div>
          <label className={cl.myLabel} htmlFor="email">
            Email
          </label>
          <MyInput
            className={cl.myInput}
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label className={cl.myLabel} htmlFor="password">
            Password
          </label>
          <MyInput
            className={cl.myInput}
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button onClick={handleSubmit} className={cl.myBtn} type="submit">
          Войти
        </button>
        <div className={cl.message}>
        {errorMessage()}
        {successMessage()}
      </div>
      </form>
    </div>
  );
};

export default SimpleForm;
