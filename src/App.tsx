import HomePage from "./pages/HomePage";
import HolaProvider from "./providers/Hola";
import TasksProvider from "./providers/TasksProvider";

function App() {
  return (
    <HolaProvider>
      <TasksProvider>
        <div className="App">
          <HomePage />
        </div>
      </TasksProvider>
    </HolaProvider>
  );
}

export default App;
