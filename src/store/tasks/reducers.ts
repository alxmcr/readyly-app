import { ITasksState, ITasksAction } from '../../@types/storeTypes';
import { TASKS_ACTIONS, TASKS_KEY_ITEM } from '../../helpers/contants';

export const tasksReducer = (state: ITasksState, action: ITasksAction) => {
  let tasks = [];

  switch (action?.type) {
    case TASKS_ACTIONS?.ADD:
      tasks = [action?.payload, ...state.tasks];
      window?.localStorage?.setItem(TASKS_KEY_ITEM, JSON.stringify(tasks));

      return { ...state, tasks };

    case TASKS_ACTIONS?.DELETE:
      const taskToDelete = action?.payload;
      console.log({ taskToDelete });

      tasks = state?.tasks?.filter(
        (task) => task?.ta_id !== taskToDelete?.ta_id,
      );
      window?.localStorage?.setItem(TASKS_KEY_ITEM, JSON.stringify(tasks));

      return {
        ...state,
        tasks,
      };

    case TASKS_ACTIONS?.UPDATE:
      const taskUpdated = action?.payload;

      tasks = state?.tasks?.map((task) => {
        if (task?.ta_id === taskUpdated?.ta_id) {
          return taskUpdated;
        } else {
          return task;
        }
      });
      window?.localStorage?.setItem(TASKS_KEY_ITEM, JSON.stringify(tasks));

      return {
        ...state,
        tasks,
      };

    default:
      return state;
  }
};
