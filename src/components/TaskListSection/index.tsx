import useTasks from "../../hooks/useTasks";
import TaskList from "../TaskList";

export default function TaskListSection() {
  const { tasks } = useTasks();

  return (
    <section>
      <TaskList tasks={tasks} />
    </section>
  );
}
