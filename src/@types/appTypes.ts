export interface ITask {
  ta_id: number;
  ta_description: string;
  ta_is_completed: boolean;
}

export interface ITaskProps {
  task: ITask;
}

export interface ITaskListProps {
  tasks: ITask[];
}
