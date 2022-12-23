import { ITask } from "../../@types/appTypes";
import { ITasksState, ITasksAction } from "../../@types/storeTypes";
import { TASKS_ACTIONS } from "../../helpers/contants";

export const tasksInitialState: ITask[] = [];

export const tasksReducer: Reducer<ITasksState, ITasksAction> = (
  state: ITasksState = tasksInitialState,
  action: ITasksAction
) => {
  switch (action?.type) {
    case TASKS_ACTIONS?.ADD:
      return { ...state, tasks: [...state.tasks, action?.payload] };

    case TASKS_ACTIONS?.UPDATE:
      const taskToUpdate = action?.payload;
      const idTaskToUpdate = taskToUpdate?.ta_id;
      const positionTaskToUpdate = state?.tasks?.find(
        (task) => task?.ta_id === idTaskToUpdate
      );
      state[positionTaskToUpdate] = taskToUpdate;

      return { ...state };

    default:
      return state;
  }
};
