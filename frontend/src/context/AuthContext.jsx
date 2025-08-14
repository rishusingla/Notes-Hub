// src/context/AuthContext.jsx
import React from 'react'
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedIn(!!user);
  }, []);

  const login = (email) => {
    localStorage.setItem("user", email);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook
export const useAuth = () => useContext(AuthContext);
