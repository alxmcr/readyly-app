import AppHeader from "../../components/AppHeader";
import TaskFormSection from "../../components/TaskFormSection";
import TaskListSection from "../../components/TaskListSection";

export default function HomePage() {
  return (
    <div className="home">
      <AppHeader />
      <TaskListSection />
      <TaskFormSection />
    </div>
  );
}
