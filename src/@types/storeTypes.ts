import { TASKS_ACTIONS } from '../helpers/contants';
import { ITask } from './appTypes';

export interface ITasksState {
  isLoading: boolean;
  tasks: ITask[];
}

export interface ITasksAction {
  type: TASKS_ACTIONS;
  payload: ITask;
}

export interface ITasksStateContext {
  state: ITasksState;
  dispatch: React.Dispatch<ITasksAction>;
}

export interface HolaState {
  names: string[];
}

export interface HolaAction {
  type: 'hola/add' | 'hola/update';
  payload: string;
}

export interface HolaStateContext {
  state: HolaState;
  dispatch: React.Dispatch<HolaAction>;
}

export type CountState = {
  count: number;
};

export type CountAction = {
  type: string;
  payload?: number;
};

export interface TasksProviderProps {
  tasksState: ITasksState;
  children?: React.ReactNode;
}
