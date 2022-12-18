import { ITask } from "../../@types/appTypes";
import TaskList from "../../components/TaskList";

export default function HomePage() {
  const tasks: ITask[] = [];

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}
