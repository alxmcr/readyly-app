import HomePage from "./pages/HomePage";
import { TasksProvider } from "./providers/TasksProvider";

function App() {
  return (
    <TasksProvider>
      <div className="App">
        <HomePage />
      </div>
    </TasksProvider>
  );
}

export default App;
