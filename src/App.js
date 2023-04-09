import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [task, setTasks] = useState([
    {
      id: 1,
      text: " Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: " Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: " Food Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(task.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      {task.length > 0 ? (
        <Tasks tasks={task} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
