import { useEffect, useState } from "react";
import { ITask } from "../@types/appTypes";
import { TaskService } from "../services/TaskService";

export default function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      const getTasks = async () => {
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
