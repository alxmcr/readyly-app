import { createContext, FC, useEffect, useReducer, useState } from "react";
import { ITask, ReactFCProps } from "../@types/appTypes";
import { ITasksContext, ITasksState } from "../@types/storeTypes";
import { TaskService } from "../services/TaskService";
import { tasksReducer } from "../store/tasks/reducers";

export const tasksInitialState: ITasksState = {
  tasks: [],
};

const initialTasksContext: ITasksContext = {
  state: { tasks: [] },
  dispatch: () => {},
};

export const TasksContext = createContext<ITasksContext>(initialTasksContext);

const createTasksInitialState = async (tasks: ITask[]): Promise<ITask[]> => {
  const tasksService = new TaskService();
  return await tasksService.fetchTasks();
};

export const TasksProvider: FC<ReactFCProps> = ({ children }) => {
  const tasks: ITask[] = [];
  const [state, dispatch] = useReducer(
    tasksReducer,
    { tasks },
    createTasksInitialState
  );
  let value = { state, dispatch };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
