import React from 'react'
import { createContext, useContext } from 'react';
import useAuth from "./useAuth";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const { user, login, signup, setUser, getUser, logout,setCurrentPage,currentPage } = useAuth();

  const value = {
    user,
    setUser,
    login,
    signup,
    logout,
    getUser,
    setCurrentPage,
    currentPage
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}