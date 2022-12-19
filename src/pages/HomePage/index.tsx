import { ITask } from "../../@types/appTypes";
import TaskList from "../../components/TaskList";
import useTasks from "../../hooks/useTasks";

export default function HomePage() {
  const { tasks } = useTasks();

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}
