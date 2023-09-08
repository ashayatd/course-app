import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authentication/AuthContext";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const [cartcount, setCartcount] = useState(0);
  const { isLoggedIn, user, logout } = useAuth();

  const handleLogin = () => {
    Navigate("/Login");
  };
  const showmoneypage = ()=>{
    Navigate('/buycoin');
  }

  const opendashboard = () => {
    console.log("user", user);
    if (user.role === "seller") {
      Navigate("/sellerdashboard");
    } else {
      Navigate("/userdashboard");
    }
  };
  const handleLogout = () => {
    Navigate("/courses");
    logout();
  };
  const showcart = () => {};

  return (
    <header className="header-container">
      <div className="left-part">
        <Link to={"/"}> Home </Link>
      </div>
      <div className="right-part">
        {isLoggedIn ? (
          <>
            <span>
              Welcome, {user.role}, {user.Fullname}
            </span>
            <div>
              <button className="button-66" onClick={opendashboard}>
                Open Dashboard
              </button>
            </div>
            <button onClick={handleLogout} className="button-66">
              Logout
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
              onClick={showcart}
              style={{
                cursor: "pointer",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              {" "}
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
            </svg>
            <div className="walletmoney">{user.WalletMoney}</div>
            <span className="CartCount" >{}</span>
            <svg
              data-v-41be6633=""
              viewBox="0 0 16 16"
              width="23px"
              height="23px"
              cursor="pointer"
              focusable="false"
              role="img"
              aria-label="coin"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-coin mx-auto b-icon bi"
              onClick={showmoneypage}
            >
              <g data-v-41be6633="">
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"></path>
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                ></path>
              </g>
            </svg>

          </>
        ) : (
          <>
          <div className="buttons">
              <button className="button-66">
                <Link to="/userlogin">Sign In/Sign Up</Link>
              </button>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
              onClick={handleLogin}
              style={{
                cursor: "pointer",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              {" "}
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
            </svg>
            <span className="CartCount" >0</span>
          </>
        )}
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
