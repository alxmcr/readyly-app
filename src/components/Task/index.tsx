import { ITaskProps } from "../../@types/appTypes";
import "./Task.scss";


export default function Task({ task }: ITaskProps) {
  const { ta_id, ta_description, ta_is_completed } = task;

  if (ta_is_completed) {
    return (
      <li id={ta_id.toString()} className="task task--completed">
        {ta_description}
      </li>
    );
  }

  return (
    <li id={ta_id.toString()} className="task">
      {ta_description}
    </li>
  );
}
