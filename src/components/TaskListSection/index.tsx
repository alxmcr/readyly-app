import useTasks from "../../hooks/useTasks";
import TaskList from "../TaskList";
import "./TaskListSection.scss";

export default function TaskListSection() {
  const { tasks } = useTasks();

  return (
    <section className="task-section">
      <TaskList tasks={tasks} />
    </section>
  );
}
