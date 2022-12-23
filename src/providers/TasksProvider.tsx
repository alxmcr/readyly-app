import { createContext, FC, useReducer } from "react";
import { ReactFCProps } from "../@types/appTypes";
import { ITasksContext } from "../@types/storeTypes";
import { tasksInitialState, tasksReducer } from "../store/tasks/reducers";

const initialTasksContext: ITasksContext = {
  state: tasksInitialState,
  dispatch: () => {},
};

export const TasksContext = createContext<ITasksContext>(initialTasksContext);

export const TasksProvider: FC<ReactFCProps> = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, tasksInitialState);
  const value = { state, dispatch };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
