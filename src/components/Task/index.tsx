import { ITaskProps } from "../../@types/appTypes";
import "./Task.scss";

export default function Task({ task }: ITaskProps) {
  const { ta_id, ta_description, ta_is_completed } = task;

  return (
    <li
      id={ta_id.toString()}
      className={ta_is_completed ? `task task--completed` : `task`}
    >
      <input
        type="checkbox"
        name={`task__description-${ta_id}`}
        id={`task__description-${ta_id}`}
        className="task__status"
        checked={ta_is_completed}
      />
      <label
        htmlFor={`task__description-${ta_id}`}
        className="task__description"
      >
        {ta_description}
      </label>
    </li>
  );
}
