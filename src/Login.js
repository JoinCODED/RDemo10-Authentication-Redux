import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = props => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    alert(`
    YOUR USERNAME IS "${form.username}"
    YOUR PASSWORD IS "${form.password}"
    `);
  };

  const { username, password } = form;
  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="text"
        name="username"
        value={username}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        className="form-control mr-sm-2"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
      />
      <button className="btn btn-primary my-2 my-sm-0 mr-2" type="submit">
        Login
      </button>
      <Link to="/signup" className="btn btn-success my-2 my-sm-0">
        Signup
      </Link>
    </form>
  );
};

export default Login;
