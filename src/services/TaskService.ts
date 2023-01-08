import { ITask } from "../@types/appTypes";
import { ITaskService } from "../@types/serviceTypes";

export class TaskService implements ITaskService {
  fetchTasks() {
    let tasks: ITask[] = [];

    return new Promise<ITask[]>((resolve, reject) => {
      setTimeout(() => {
        tasks = [
          {
            ta_id: "1",
            ta_description: "Do homework",
            ta_is_completed: false,
          },
          {
            ta_id: "2",
            ta_description: "Go to the doctor",
            ta_is_completed: true,
          },
          {
            ta_id: "3",
            ta_description: "Watch TV",
            ta_is_completed: false,
          },
          {
            ta_id: "4",
            ta_description: "Do homework",
            ta_is_completed: false,
          },
          {
            ta_id: "5",
            ta_description: "Go to the doctor",
            ta_is_completed: true,
          },
          {
            ta_id: "6",
            ta_description: "Watch TV",
            ta_is_completed: false,
          },
          {
            ta_id: "7",
            ta_description: "Do homework",
            ta_is_completed: false,
          },
          {
            ta_id: "8",
            ta_description: "Go to the doctor",
            ta_is_completed: true,
          },
          {
            ta_id: "9",
            ta_description: "Watch TV",
            ta_is_completed: false,
          },
          {
            ta_id: "10",
            ta_description: "Do homework",
            ta_is_completed: false,
          },
          {
            ta_id: "11",
            ta_description: "Go to the doctor",
            ta_is_completed: true,
          },
          {
            ta_id: "12",
            ta_description: "Watch TV",
            ta_is_completed: false,
          },
        ];

        resolve(tasks);
      }, 300);
    });
  }
}
