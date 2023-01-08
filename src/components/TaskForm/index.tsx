import { FormEvent, useContext, useState } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import { addTaskAction } from '../../store/tasks/actions';
import './TaskForm.scss';

export default function TaskForm() {
  const { dispatch } = useContext(TasksContext);
  const [description, setDescription] = useState('');

  const handlerDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const addNewTask = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTaskAction(description));
    setDescription('');
  };

  return (
    <form className="task-form" onSubmit={addNewTask}>
      <div className="task-form__inputgroup">
        <label htmlFor="description" className="task-form__label">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="task-form__input"
          placeholder="Enter task description"
          onChange={handlerDescription}
          value={description}
          required
        />
      </div>
      <button type="submit" className="task-form__button">
        + ADD NEW
      </button>
    </form>
  );
}
