import { useContext } from "react";
import { TasksContext } from "../../providers/TasksProvider";
import TaskList from "../TaskList";
import "./TaskListSection.scss";

export default function TaskListSection() {
  const valueTasks = useContext(TasksContext);

  return (
    <section className="task-section">
      <TaskList tasks={valueTasks.state?.tasks} />
    </section>
  );
}
