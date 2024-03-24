import React, { useState, useContext } from "react";
const UserContext = React.createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    uniqueId: "",
    email: "",
    number: "",
    password: "",
    role: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
