export interface ITask {
  ta_id: string;
  ta_description: string;
  ta_is_completed: boolean;
}

export interface ITaskProps {
  task: ITask;
}

export interface ITaskListProps {
  tasks: ITask[];
}

export enum StatusOperation {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
  IDLE = 'idle',
}

export type ReactFCProps = {
  children?: React.ReactNode;
};
