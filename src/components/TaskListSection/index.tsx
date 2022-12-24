import { useContext } from "react";
import { HolaContext } from "../../providers/Hola";
import { TasksContext } from "../../providers/TasksProvider";
import TaskList from "../TaskList";
import "./TaskListSection.scss";

export default function TaskListSection() {
  const valueTasks = useContext(TasksContext);
  const valueHola = useContext(HolaContext);

  return (
    <section className="task-section">
      <TaskList tasks={valueTasks.state?.tasks} />
      <pre>{JSON.stringify(valueHola?.state?.names, null, 2)}</pre>
    </section>
  );
}
