import { createContext, useReducer } from "react";
import { ReactFCProps } from "../@types/appTypes";
import { HolaContextState } from "../@types/storeTypes";

const holaInitialState = {
  state: {
    names: [],
  },
  dispatch: () => {},
};

export const HolaContext = createContext < HolaContextState > holaInitialState;

const createHolaInitx = (initNames) => {
  return {
    state: {
      names: initNames,
    },
    dispatch: () => {},
  };
};

const createHolaInit = (initNames) => {
  return initNames;
};

const holaReducer = (state, action) => {
  switch (action?.type) {
    case "hola/add":
      return { ...state, names: [...state.names, action.payload] };

    default:
      return state;
  }
};

export default function HolaProvider({ children }) {
  const holaInit = { names: [] };
  const [state, dispatch] = useReducer(holaReducer, holaInit, createHolaInit);

  const value = {
    state,
    dispatch,
  };

  return <HolaContext.Provider value={value}>{children}</HolaContext.Provider>;
}
