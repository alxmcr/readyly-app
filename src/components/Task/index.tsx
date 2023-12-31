import React, { useContext } from 'react';
import { ITaskProps } from '../../@types/appTypes';
import { TasksContext } from '../../providers/TasksProvider';
import { deleteTaskAction, updateTaskAction } from '../../store/tasks/actions';
import TaskCompletedIcon from '../common/icons/TaskCompletedIcon';
import TaskDeleteIcon from '../common/icons/TaskDeleteIcon';
import TaskIncompleteIcon from '../common/icons/TaskIncompleteIcon';
import './Task.scss';

export default function Task({ task }: ITaskProps) {
  const { dispatch } = useContext(TasksContext);
  const { ta_id, ta_description, ta_is_completed } = task;

  const handlerUpdateStatus = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const taskUpdated = { ...task, ta_is_completed: ev?.target?.checked };
    dispatch(updateTaskAction(taskUpdated));
  };

  const handlerDeleteTask = () => {
    dispatch(deleteTaskAction(task));
  };

  return (
    <li
      id={ta_id.toString()}
      className={ta_is_completed ? `task task--completed` : `task`}
    >
      <label htmlFor={`task__checkbox-${ta_id}`} className="task__checkbox">
        <input
          type="checkbox"
          name={`task__checkbox-${ta_id}`}
          id={`task__checkbox-${ta_id}`}
          className="task__status"
          checked={ta_is_completed}
          onChange={handlerUpdateStatus}
        />
        {ta_is_completed ? (
          <span className="task__icon-wrapper">
            <TaskCompletedIcon />
          </span>
        ) : (
          <span className="task__icon-wrapper">
            <TaskIncompleteIcon />
          </span>
        )}

        <span className="task__description">{ta_description}</span>
      </label>
      <button
        className="task__button task__button--delete"
        onClick={handlerDeleteTask}
      >
        <TaskDeleteIcon />
      </button>
    </li>
  );
}
