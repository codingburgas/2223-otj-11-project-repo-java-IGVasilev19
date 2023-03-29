import { createContext, useContext, useState } from "react";

const CoreContext = createContext({
  user: [],
  setUser: () => {}
});

export const useCore = () => useContext(CoreContext);

const CoreProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  return (
    <CoreContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </CoreContext.Provider>
  );
};

export default CoreProvider;