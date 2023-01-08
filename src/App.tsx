import { ITasksState } from './@types/storeTypes';
import HomePage from './pages/HomePage';
import TasksProvider from './providers/TasksProvider';

export default function App() {
  const tasksState: ITasksState = {
    tasks: [],
    isLoading: false,
  };

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
