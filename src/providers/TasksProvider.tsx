import React from "react";
import { ReactFCProps } from "../@types/appTypes";
import { ITasksState, ITasksStateContext } from "../@types/storeTypes";
import { TaskService } from "../services/TaskService";
import { tasksReducer } from "../store/tasks/reducers";

const tasksContextInitialState: ITasksStateContext = {
  state: {
    tasks: [],
  },
  dispatch: () => {},
};

const initializerTasksReducer = async (): Promise<ITasksState> => {
  const tasksService = new TaskService();
  const tasksResult = await tasksService.fetchTasks();

  return {
    tasks: tasksResult,
  };
};

export const TasksContext = React.createContext(tasksContextInitialState);

export default function TasksProvider({ children }: ReactFCProps) {
  const tasksInit: ITasksState = { tasks: [] };
  const [state, dispatch] = React.useReducer(
    tasksReducer,
    tasksInit,
    initializerTasksReducer
  );

  const value = {
    state,
    dispatch,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
