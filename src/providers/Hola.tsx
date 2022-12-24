import { createContext } from "react";
import { ReactFCProps } from "../@types/appTypes";

const holaInitialState = {
  names: [],
};

export const HolaContext = createContext(holaInitialState);

export default function HolaProvider({ children }: ReactFCProps) {
  const value = {
    names: [],
  };

  return <HolaContext.Provider value={value}>{children}</HolaContext.Provider>;
}
