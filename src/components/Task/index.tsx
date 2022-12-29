import React, { useContext } from "react";
import { ITaskProps } from "../../@types/appTypes";
import { TasksContext } from "../../providers/TasksProvider";
import { updateTaskAction } from "../../store/tasks/actions";
import "./Task.scss";

export default function Task({ task }: ITaskProps) {
  const { state, dispatch } = useContext(TasksContext);
  const { ta_id, ta_description, ta_is_completed } = task;

  const handlerUpdateStatus = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const taskUpdated = { ...task, ta_is_completed: ev?.target?.checked };
    dispatch(updateTaskAction(taskUpdated));
  };

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
        onChange={handlerUpdateStatus}
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
