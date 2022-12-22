import "./TaskForm.scss";

export default function TaskForm() {
  return (
    <form className="task-form">
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
          required
        />
      </div>
      <button type="submit" className="task-form__button">
        + ADD NEW
      </button>
    </form>
  );
}
