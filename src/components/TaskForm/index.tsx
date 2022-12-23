import { FormEvent, useState } from "react";
import "./TaskForm.scss";

export default function TaskForm() {
  const [description, setDescription] = useState("");

  const handlerDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const addNewTask = (e: FormEvent) => {
    e.preventDefault();
    console.log("hola");
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
