import React from "react";
import { ReactFCProps } from "../@types/appTypes";
import { ITasksState, ITasksStateContext } from "../@types/storeTypes";
import { tasksReducer } from "../store/tasks/reducers";

const tasksContextInitialState: ITasksStateContext = {
  state: {
    tasks: [],
  },
  dispatch: () => {},
};

export const TasksContext = React.createContext(tasksContextInitialState);

export default function TasksProvider({ children }: ReactFCProps) {
  const holaInit: ITasksState = { tasks: [] };
  const [state, dispatch] = React.useReducer(tasksReducer, holaInit);

  const value = {
    state,
    dispatch,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
