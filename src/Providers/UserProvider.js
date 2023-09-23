import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider(props) {
  // component -> provider

  const [value, setValue] = useState([]);
  const children = props.children;

  return (
    <UserContext.Provider value={value}>
      {children} // compoennt
    </UserContext.Provider>
  );
}

export default UserProvider;
