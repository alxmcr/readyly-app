import { ITask } from "../../@types/appTypes";
import { ITasksAction } from "../../@types/storeTypes";
import { TASKS_ACTIONS } from "../../helpers/contants";

export const addTaskAction = (newTask: ITask): ITasksAction => {
  return {
    type: TASKS_ACTIONS?.ADD,
    payload: newTask,
  };
};

export const updateTaskAction = (taskUpdated: ITask): ITasksAction => {
    return {
      type: TASKS_ACTIONS?.UPDATE,
      payload: taskUpdated,
    };
  };
