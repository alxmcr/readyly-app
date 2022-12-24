import React, { useReducer } from "react";
import { ITasksStateContext, TasksProviderProps } from "../@types/storeTypes";
import { tasksReducer } from "../store/tasks/reducers";

const tasksContextInitialState: ITasksStateContext = {
  state: {
    tasks: [],
  },
  dispatch: () => {},
};

export const TasksContext = React.createContext(tasksContextInitialState);

export default function TasksProvider({ tasks, children }: TasksProviderProps) {
  const [state, dispatch] = useReducer(tasksReducer, { tasks });

  const value = {
    state,
    dispatch,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
