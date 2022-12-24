import { useContext } from "react";
import { TasksContext } from "../../providers/TasksProvider";
import TaskList from "../TaskList";
import "./TaskListSection.scss";

export default function TaskListSection() {
  const { state } = useContext(TasksContext);

  if (state?.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="task-section">
      <TaskList tasks={state?.tasks} />
    </section>
  );
}
