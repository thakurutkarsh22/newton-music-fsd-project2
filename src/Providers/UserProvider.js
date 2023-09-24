import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider(props) {
  // component -> provider

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const children = props.children;

  // we create new user
  function signUpContext(userData) {
    console.log();
  }

  // this is for login
  function signInContext(token, userName) {
    setUser(userName);
    setToken(token);
  }

  // this is for logout
  function signOutContext() {}

  const value = {
    isUserLoggedIn: !!user,
    user,
    token,
    signUpContext,
    signInContext,
    signOutContext,
  };

  console.log(value, "inside value context");

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// custom hook

export function useUser() {
  return useContext(UserContext);
}
