import { useState } from "react";
import "./App.css";
import initialData from "./data/index";
import Column from "./components/Column";

function App() {
  const [data, setData] = useState(initialData);

  return data.columnOrder.map((columnId) => {
    const column = data.columnList.find((x) => x.id === columnId);
    const tasks = column.taskIdList.map((taskId) => data.taskList.find((x) => x.id === taskId));
    return <Column key={columnId} column={column} tasks={tasks} />;
  });
}

export default App;
