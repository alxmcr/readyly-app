import { ITasksState, ITasksAction } from '../../@types/storeTypes';
import { TASKS_ACTIONS } from '../../helpers/contants';

export const tasksReducer = (state: ITasksState, action: ITasksAction) => {
  let tasks = [];

  switch (action?.type) {
    case TASKS_ACTIONS?.ADD:
      tasks = [action?.payload, ...state.tasks];

      return { ...state, tasks };

    case TASKS_ACTIONS?.UPDATE:
      const taskUpdated = action?.payload;

      tasks = state?.tasks?.map((task) => {
        if (task?.ta_id === taskUpdated?.ta_id) {
          return taskUpdated;
        } else {
          return task;
        }
      });

      return {
        ...state,
        tasks,
      };

    default:
      return state;
  }
};
