import { ITask } from "./appTypes";

export interface ITaskService {
  getTasks: () => ITask[];
}
