import React, { useState } from "react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //stops refresh
  };

  const register = (event) => {
    event.preventDefault(); //stops refresh
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input value={email} type="email" onChange={event => setEmail(event.target.value)}/>
          <h5>Password</h5>
          <input type="password" onChange={event => setPassword(event.target.value)} />
          <Link to="/songs">
          <button> FAN LOGIN </button>
        </Link>
        <Link to="/songs">
          <button> ADMIN LOGIN </button>
        </Link>
        </form>
        <p>By signing-in you agree to Selina Production's Conditions</p>
      </div>
    </div>
  );
}

export default Login;
