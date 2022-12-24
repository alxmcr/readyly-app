import useTasks from "./hooks/useTasks";
import HomePage from "./pages/HomePage";
import HolaProvider from "./providers/Hola";
import TasksProvider from "./providers/TasksProvider";

function App() {
  const { tasks } = useTasks();

  return (
    <TasksProvider tasks={tasks}>
      <div className="App">
        <HomePage />
      </div>
    </TasksProvider>
  );
}

export default App;
