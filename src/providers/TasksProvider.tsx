import { createContext, FC, useReducer } from "react";
import { ITask, ReactFCProps } from "../@types/appTypes";
import { ITasksContext, ITasksState } from "../@types/storeTypes";
import { TaskService } from "../services/TaskService";
import { tasksReducer } from "../store/tasks/reducers";

export const tasksInitialState: ITasksState = {
  tasks: [],
};

let tasks: ITask[] = [];
const init = async () => {
  if (typeof window !== "undefined") {
    // Check if we're running in the browser.
    // ✅ Only runs once per app load
    console.log("holasss");
    const tasksService = new TaskService();
    tasks = await tasksService.getTasks();
    console.log({ tasks });
  }
};
init();

const initialTasksContext: ITasksContext = {
  state: { tasks },
  dispatch: () => {},
};

export const TasksContext = createContext<ITasksContext>(initialTasksContext);

export const TasksProvider: FC<ReactFCProps> = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks });
  const value = { state, dispatch };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
