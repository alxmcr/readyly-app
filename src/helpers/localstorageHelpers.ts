import { ITask } from '../@types/appTypes';

export const convertLocalStorageToTasks = (tasksAsStr = '[]') => {
  return Array.from(tasksAsStr);
};

export const getTasksFromLocalstorage = (key = ''): ITask[] => {
  const tasksStr = window.localStorage.getItem(key);

  return tasksStr ? JSON.parse(tasksStr) : [];
};
