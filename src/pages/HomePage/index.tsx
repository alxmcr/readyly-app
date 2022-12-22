import AppHeader from "../../components/AppHeader";
import TaskForm from "../../components/TaskForm";
import TaskListSection from "../../components/TaskListSection";

export default function HomePage() {
  return (
    <div className="home">
      <AppHeader />
      <TaskListSection />
      <TaskForm />
    </div>
  );
}
