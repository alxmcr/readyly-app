import { createContext } from "react";

const holaInitialState = {
  names: [],
};

export const HolaContext = createContext(holaInitialState);

export default function HolaProvider({ children }) {
  const value = {
    names: [],
  };

  return <HolaContext.Provider value={value}>{children}</HolaContext.Provider>;
}
