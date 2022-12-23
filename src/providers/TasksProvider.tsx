import { createContext, FC, useReducer } from "react";
import { ReactFCProps } from "../@types/appTypes";
import { ITasksContext, ITasksState } from "../@types/storeTypes";
import useTasks from "../hooks/useTasks";
import { tasksReducer } from "../store/tasks/reducers";

export const tasksInitialState: ITasksState = {
  tasks: [],
};

const initialTasksContext: ITasksContext = {
  state: { tasks: [] },
  dispatch: () => {},
};

export const TasksContext = createContext<ITasksContext>(initialTasksContext);

export const TasksProvider: FC<ReactFCProps> = ({ children }) => {
  const { isLoading, tasks } = useTasks();
  const [state, dispatch] = useReducer(tasksReducer, { tasks });
  const value = { isLoading, state, dispatch };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
