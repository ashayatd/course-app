import React from "react";
import { useAuth } from "../../../authentication/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import './Userlogin.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, userlogin } = useAuth();

  const handleLogin = () => {
    const userData = {
      username: username,
      password: password
    };

    userlogin(userData); // Call the login function from the Auth context
    if (isLoggedIn) {
        navigate("/courses");
    }
  };

  return (
    <React.Fragment>
      <div className="loginContainer">
        <div className="login-box">
          <h1 className="login-heading">
          Log<span>in</span>
          </h1>
          <div className="lable-input">
            <label className="lables">Username*</label>
            <input
              className="login-inputs"
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="lable-input">
            <label className="lables">Password*</label>
            <input
              className="login-inputs"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loginSignup">Dont have account?&nbsp;<Link to={'/sellerregister'}>Signup</Link></div>

          <button onClick={handleLogin} 
          class="seller-register-button">Login</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
