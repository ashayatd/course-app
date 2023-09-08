import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [user, setUser] = useState(null);

  const Sellerlogin = async (userData) => {
    console.log("SellerLogin", userData);
    try {
      const response = await fetch(
        "http://localhost:5000/seller/seller-login",
        {
          method: "POST",
          body: JSON.stringify({
            Username: userData.username,
            Password: userData.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      console.log("SellerLogin Response", data);
      console.log("role", data.role);
      console.log("Seller ID", data.userID);
      console.log("Seller Name ", data.FullName);

      if (response.status === 401) {
        alert("Invalid Credentials");
      }

      if (response.ok) {
        console.log("Login successful");
        setIsLoggedIn(true);
        setUser({
          role: data.role,
          ID: data.userID,
          Fullname: data.FullName,
        });

        localStorage.setItem("role", data.role);
        localStorage.setItem("ID", data.userID);
        localStorage.setItem("Fullname", data.FullName);

      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("error in auth", error);
    }
  };

  const userlogin = async (userData) => {
    console.log(userData);
    try {
      const response = await fetch("http://localhost:5000/user/userlogin", {
        method: "POST",
        body: JSON.stringify({
          data: {
            Username: userData.username,
            Password: userData.password,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      console.log("userLogin Response", data);
      console.log("role", data.role);
      console.log("ID", data.userID);

      if (response.status === 401) {
        alert("Invalid Credentials");
      }
      if (response.status === 404) {
        alert("User Not Found");
      }

      if (response.ok) {
        console.log("user Login successful");
        setIsLoggedIn(true);
        setUser({
          role: data.role,
          ID: data.userID,
          Fullname: data.FullName,
          orderedItems: data.OrderedArray,
          EmailID: data.EmailID,
          WalletMoney: data.Money,
        });
      } else {
        console.log("user Login failed");
      }
    } catch (error) {
      console.log("error in auth", error);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    setUser(null); // Clear the user data when the user logs out
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, Sellerlogin, logout, userlogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
