import { createContext, FC, useEffect, useReducer, useState } from "react";
import { ITask, ReactFCProps } from "../@types/appTypes";
import { ITasksContext, ITasksState } from "../@types/storeTypes";
import useTasks from "../hooks/useTasks";
import { TaskService } from "../services/TaskService";
import { tasksReducer } from "../store/tasks/reducers";

export const tasksInitialState: ITasksState = {
  isLoading: false,
  tasks: [],
};

const initialTasksContext: ITasksContext = {
  state: { isLoading: false, tasks: [] },
  dispatch: () => {},
};

export const TasksContext = createContext<ITasksContext>(initialTasksContext);

export const TasksProvider: FC<ReactFCProps> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(tasksReducer, {
    tasks,
    isLoading,
  });
  const value = { isLoading, state, dispatch };

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      const getTasks = async () => {
        setIsLoading(true);
        const tasksService = new TaskService();
        const tasksResult = await tasksService.fetchTasks();
        setTasks(tasksResult);
        setIsLoading(false);
      };

      getTasks();
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
