import { ITaskProps } from "../../@types/appTypes";
import "./Item.scss";

export default function Task({ task }: ITaskProps) {
  const { ta_id, ta_text, ta_is_completed } = task;

  if (ta_is_completed) {
    return (
      <li id={ta_id.toString()} className="task task--completed">
        {ta_text}
      </li>
    );
  }

  return (
    <li id={ta_id.toString()} className="task">
      {ta_text}
    </li>
  );
}
