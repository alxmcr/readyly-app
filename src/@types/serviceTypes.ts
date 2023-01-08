import { ITask } from './appTypes';

export interface ITaskService {
  fetchTasks: () => Promise<ITask[]>;
}
