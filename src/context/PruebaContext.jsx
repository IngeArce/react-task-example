import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const PruebaContext = createContext();

export function TaskContextProvider(props) {
  /* let x = 20; */
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    console.log(tasks);
    console.log(taskId);
    setTasks(tasks.filter((task) => task.id != taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <PruebaContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </PruebaContext.Provider>
  );
}
