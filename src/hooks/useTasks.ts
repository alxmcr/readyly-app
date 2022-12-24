import { useEffect, useState } from "react";
import { ITask } from "../@types/appTypes";
import { ITasksState } from "../@types/storeTypes";
import { TaskService } from "../services/TaskService";

export default function useTasks(): ITasksState {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return { isLoading, tasks };
}
