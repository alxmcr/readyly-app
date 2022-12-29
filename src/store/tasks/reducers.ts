import { ITasksState, ITasksAction } from "../../@types/storeTypes";
import { TASKS_ACTIONS } from "../../helpers/contants";

export const tasksReducer = (state: ITasksState, action: ITasksAction) => {
  switch (action?.type) {
    case TASKS_ACTIONS?.ADD:
      return { ...state, tasks: [...state.tasks, action?.payload] };

    case TASKS_ACTIONS?.UPDATE:
      const taskUpdated = action?.payload;
      console.log("tasks", state?.tasks);
      return {
        ...state,
        tasks: state?.tasks?.map((task) => {
          console.log(`${task?.ta_id} - ${taskUpdated?.ta_id}`);
          if (task?.ta_id === taskUpdated?.ta_id) {
            console.log("updated!");
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
