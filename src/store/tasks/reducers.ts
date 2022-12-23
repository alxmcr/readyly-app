import { Reducer } from "react";
import { ITasksState, ITasksAction } from "../../@types/storeTypes";
import { TASKS_ACTIONS } from "../../helpers/contants";

export const tasksInitialState: ITasksState = {
  tasks: [],
};

export const tasksReducer: Reducer<ITasksState, ITasksAction> = (
  state = tasksInitialState,
  action
) => {
  switch (action?.type) {
    case TASKS_ACTIONS?.ADD:
      return { ...state, tasks: [...state.tasks, action?.payload] };

    case TASKS_ACTIONS?.UPDATE:
      const taskToUpdate = action?.payload;
      const idTaskToUpdate = taskToUpdate?.ta_id;
      const positionTaskToUpdate = state?.tasks?.findIndex(
        (task) => task?.ta_id === idTaskToUpdate
      );

      if (positionTaskToUpdate > 0) {
        state.tasks[positionTaskToUpdate] = taskToUpdate;
      }

      return { ...state };

    default:
      return state;
  }
};
