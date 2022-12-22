import { ITaskListProps } from "../../@types/appTypes";
import Task from "../Task";
import "./TaskList.scss"; 

export default function TaskList({ tasks = [] }: ITaskListProps) {
  if (tasks?.length === 0) {
    return <p>List is empty</p>
  }

  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <Task key={task?.ta_id} task={task} />
      ))}
    </ul>
  );
}
