import React, { useEffect } from "react";
import { ITask, ReactFCProps } from "../@types/appTypes";
import { ITasksState, ITasksStateContext } from "../@types/storeTypes";
import useTasks from "../hooks/useTasks";
import { TaskService } from "../services/TaskService";
import { tasksReducer } from "../store/tasks/reducers";

function init(initialTasks: ITask[]) {
  return { tasks: [...initialTasks] };
}

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
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [state, dispatch] = React.useReducer(tasksReducer, tasks, init);

  const value = {
    state,
    dispatch,
    isLoading,
  };

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
}
