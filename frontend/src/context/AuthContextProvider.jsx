import React, { useState } from 'react';
import AuthContext from './AuthContext.js';

function AuthContextProvider({ children }) {
  const getUser = () => localStorage.getItem('username');
  const getToken = () => localStorage.getItem('token');

  const isAuthorized = () => {
    const token = getToken();
    return !!token;
  };

  const [authStatus, setAuthStatus] = useState(isAuthorized());
  const toLogIn = ({ username, token }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setAuthStatus(true);
  };

  const toLogOut = ({ username, token }) => {
    localStorage.removeItem('token', token);
    localStorage.removeItem('username', username);
    setAuthStatus(false);
  };

  return (
    <AuthContext.Provider value ={
    {
      authStatus,
      toLogIn,
      toLogOut,
      getUser,
      getToken,
    }
    }>{children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
