//React
import React, { useEffect, useState, createContext } from "react";

//Firebase
import app from "./firebase";

//Material UI
import {CircularProgress} from '@material-ui/core'

//Export Context
export const AuthContext = createContext();

//Export Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <CircularProgress/>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};