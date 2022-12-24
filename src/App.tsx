import useTasks from "./hooks/useTasks";
import HomePage from "./pages/HomePage";
import TasksProvider from "./providers/TasksProvider";

function App() {
  const tasksState = useTasks();

  return (
    <TasksProvider tasksState={tasksState}>
      <div className="App">
        <HomePage />
      </div>
    </TasksProvider>
  );
}

export default App;
