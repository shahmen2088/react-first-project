import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import './SimpleForm.module.css';

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
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <MyInput
            className="input"
            type="text"
            id="name"
            value={name}
            onChange={handleName}
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <MyInput
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
          <MyInput
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
