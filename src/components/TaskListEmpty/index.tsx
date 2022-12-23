import CompleteIcon from "../common/icons/CompleteIcon";
import "./TaskListEmpty.scss";

export default function TaskListEmpty() {
  return (
    <div className="tasks--empty">
      <CompleteIcon />
      <p className="tasks__message tasks__message--empty">
        Congrats! Your to-do list is empty!
      </p>
    </div>
  );
}
