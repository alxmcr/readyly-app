import { TASKS_ACTIONS } from "../helpers/contants";

export interface ITasksState {
  tasks: ITask[];
}

export interface ITasksAction {
  type: TASKS_ACTIONS.ADD | TASKS_ACTIONS.UPDATE;
  payload: ITask;
}
