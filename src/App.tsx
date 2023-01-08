import { ITasksState } from './@types/storeTypes';
import { TASKS_KEY_ITEM } from './helpers/contants';
import useTasksLocalStorage from './hooks/useTasksLocalStorage';
import HomePage from './pages/HomePage';
import TasksProvider from './providers/TasksProvider';

export default function App() {
  const tasksState: ITasksState = useTasksLocalStorage(TASKS_KEY_ITEM);

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
