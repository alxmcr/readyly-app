import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../../@types/appTypes';
import { ITasksAction } from '../../@types/storeTypes';
import { TASKS_ACTIONS } from '../../helpers/contants';

export const addTaskAction = (description = ''): ITasksAction => {
  return {
    type: TASKS_ACTIONS?.ADD,
    payload: {
      ta_id: uuidv4(),
      ta_is_completed: false,
      ta_description: description,
    },
  };
};

export const updateTaskAction = (taskUpdated: ITask): ITasksAction => {
  return {
    type: TASKS_ACTIONS?.UPDATE,
    payload: taskUpdated,
  };
};
