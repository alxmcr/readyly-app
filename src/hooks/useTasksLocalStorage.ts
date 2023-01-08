import { useEffect, useState } from 'react';
import { ITask } from '../@types/appTypes';
import { ITasksState } from '../@types/storeTypes';

export default function useTasksLocalStorage(keyItem = ''): ITasksState {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      const getTasks = async () => {
        setIsLoading(true);
        const localStorageResult = await localStorage.getItem(keyItem);
        const lsTasksParsed =
          localStorageResult === null ? [] : JSON.parse(localStorageResult);

        console.log({ lsTasksParsed });

        setTasks(lsTasksParsed);
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
