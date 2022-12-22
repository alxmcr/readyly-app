import { ITaskProps } from "../../@types/appTypes";
import "./Task.scss";


export default function Task({ task }: ITaskProps) {
  const { ta_id, ta_description, ta_is_completed } = task;

  if (ta_is_completed) {
    return (
      <li id={ta_id.toString()} className="task task--completed">
        <span className="task__text">{ta_description}</span>
      </li>
    );
  }

  return (
    <li id={ta_id.toString()} className="task">
      <span className="task__text">{ta_description}</span>
    </li>
  );
}
