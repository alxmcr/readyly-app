import { ITasksState } from "./@types/storeTypes";
import useTasks from "./hooks/useTasks";
import HomePage from "./pages/HomePage";
import TasksProvider from "./providers/TasksProvider";

export default function AppWithContext() {
  const tasksState: ITasksState = useTasks();

  if (tasksState?.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <TasksProvider tasksState={tasksState}>
      <div className="App">
        <HomePage />
      </div>
    </TasksProvider>
  );
}
