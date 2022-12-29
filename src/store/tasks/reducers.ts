import { ITasksState, ITasksAction } from "../../@types/storeTypes";
import { TASKS_ACTIONS } from "../../helpers/contants";

export const tasksReducer = (state: ITasksState, action: ITasksAction) => {
  switch (action?.type) {
    case TASKS_ACTIONS?.ADD:
      return { ...state, tasks: [...state.tasks, action?.payload] };

    case TASKS_ACTIONS?.UPDATE:
      const taskUpdated = action?.payload;
      return {
        ...state,
        tasks: state?.tasks?.map((task) => {
          if (task?.ta_id === taskUpdated?.ta_id) {
            return taskUpdated;
          } else {
            return task;
          }
        }),
      };

    default:
      return state;
  }
};
