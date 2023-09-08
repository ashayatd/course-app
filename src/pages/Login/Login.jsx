import React from "react";
import "./Login.css";
import { useAuth } from "../../authentication/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, Sellerlogin } = useAuth();

  const handleLogin = () => {
    const userData = {
      username: username,
      password: password
    };

    Sellerlogin(userData); // Call the login function from the Auth context
    if (isLoggedIn) {
        navigate("/courses");
    }
  };

  return (
    <React.Fragment>
      <div className="loginContainer">
        <div className="login-box">
          <h1 className="login-heading">
            Seller<span>LogIn</span>
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
          <div className="loginSignup">Not a Seller?&nbsp;<Link to={'/register'}>Signup</Link></div>

          <button onClick={handleLogin} 
          class="seller-register-button">Login</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
