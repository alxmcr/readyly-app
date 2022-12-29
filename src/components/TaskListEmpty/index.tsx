import ListEmptyIcon from "../common/icons/ListEmptyIcon";
import "./TaskListEmpty.scss";

export default function TaskListEmpty() {
  return (
    <div className="tasks--empty">
      <ListEmptyIcon />
      <p className="tasks__message tasks__message--empty">
        Congrats! Your to-do list is empty!
      </p>
    </div>
  );
}
