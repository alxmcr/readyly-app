import React, { Reducer } from "react";
import { ReactFCProps } from "../@types/appTypes";
import { HolaAction, HolaState, HolaStateContext } from "../@types/storeTypes";

const holaInitialState: HolaState = {
  names: [],
};

const holaContextInitialState: HolaStateContext = {
  state: {
    names: [],
  },
  dispatch: () => {},
};

export const HolaContext = React.createContext(holaContextInitialState);

const initializerHolaReducer = (): HolaState => {
  return {
    names: ["holas...", "eee...."],
  };
};

const holaReducer = (
  state: HolaState = holaInitialState,
  action: HolaAction
) => {
  switch (action?.type) {
    case "hola/add":
      return { ...state, names: [...state.names, action.payload] };

    default:
      return state;
  }
};

export default function HolaProvider({ children }: ReactFCProps) {
  const holaInit: HolaState = { names: [] };
  const [state, dispatch] = React.useReducer<
    Reducer<HolaState, HolaAction>,
    HolaState
  >(holaReducer, holaInit, initializerHolaReducer);

  const value = {
    state,
    dispatch,
  };

  return <HolaContext.Provider value={value}>{children}</HolaContext.Provider>;
}
