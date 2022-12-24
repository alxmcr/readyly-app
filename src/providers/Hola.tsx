import { createContext } from "react";
import { ReactFCProps } from "../@types/appTypes";

export interface HolaContextState {
  names: string[];
}

const holaInitialState: HolaContextState = {
  names: [],
};

export const HolaContext = createContext<HolaContextState>(holaInitialState);

export default function HolaProvider({ children }: ReactFCProps) {
  const value = {
    names: [],
  };

  return <HolaContext.Provider value={value}>{children}</HolaContext.Provider>;
}
