import { createContext, useContext, useState } from "react";

const CoreContext = createContext({
  user: [],
  setUser: () => {}
});

// const CoreContext1 = createContext({
//   vehicle: [],
//   setVehicle: () => {}
// });

export const useCore = () => useContext(CoreContext);

const CoreProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  return (
    <CoreContext.Provider
      value={{
        user,
        setUser,
        vehicle,
        setVehicle,
      }}
    >
      {children}
    </CoreContext.Provider>
  );
};

export default CoreProvider;