import React, { useReducer } from "react";
import { ITasksStateContext, TasksProviderProps } from "../@types/storeTypes";
import { tasksReducer } from "../store/tasks/reducers";

const tasksContextInitialState: ITasksStateContext = {
  state: {
    isLoading: false,
    tasks: [],
  },
  dispatch: () => {},
};

export const TasksContext = React.createContext(tasksContextInitialState);

export default function TasksProvider({
  tasksState,
  children,
}: TasksProviderProps) {
  const [state, dispatch] = useReducer(tasksReducer, tasksState);

  const value = {
    state,
    dispatch,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
