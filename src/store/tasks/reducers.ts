import { Reducer } from "react";
import { ITasksState, ITasksAction } from "../../@types/storeTypes";
import { TASKS_ACTIONS } from "../../helpers/contants";
import { TaskService } from "../../services/TaskService";

let initialTasks: ITasksState = {
  tasks: [],
};
const initializerTasksReducer = async () => {
  const tasksService = new TaskService();
  const tasksResult = await tasksService.fetchTasks();

  initialTasks = {
    tasks: tasksResult,
  };
};

initializerTasksReducer();

export const tasksReducer: Reducer<ITasksState, ITasksAction> = (
  state = initialTasks,
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
