import { getTasksFromLocalstorage } from './helpers/localstorageHelpers';
import HomePage from './pages/HomePage';
import TasksProvider from './providers/TasksProvider';

export default function App() {
  const tasks = getTasksFromLocalstorage();

  return (
    <TasksProvider tasksState={{ isLoading: false, tasks }}>
      <div className="App">
        <HomePage />
      </div>
    </TasksProvider>
  );
}
