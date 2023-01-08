import { ITask } from '../@types/appTypes';
import { TASKS_KEY_ITEM } from './contants';

export const convertLocalStorageToTasks = (tasksAsStr = '[]') => {
  return Array.from(tasksAsStr);
};

export const getTasksFromLocalstorage = (): ITask[] => {
  const tasksStr = window.localStorage.getItem(TASKS_KEY_ITEM);

  return tasksStr ? JSON.parse(tasksStr) : [];
};
