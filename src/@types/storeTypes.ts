import { TASKS_ACTIONS } from "../helpers/contants";
import { ITask } from "./appTypes";

export interface ITasksState {
  isLoading: boolean;
  tasks: ITask[];
}

export interface ITasksAction {
  type: TASKS_ACTIONS.ADD | TASKS_ACTIONS.UPDATE;
  payload: ITask;
}

export interface ITasksContext {
  state: ITasksState;
  dispatch: React.Dispatch<ITasksAction>;
}
