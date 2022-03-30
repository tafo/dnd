import { useState } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

import initialData from "./data/index";

import "./App.css";

function App() {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = data.columnList.find((x) => x.id === source.droppableId);
    const newTaskIdList = Array.from(column.taskIdList);
    newTaskIdList.splice(source.index, 1);
    newTaskIdList.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIdList: newTaskIdList,
    };

    const newData = {
      ...data,
      columnList: data.columnList.map((x) => (x.id === newColumn.id ? newColumn : x)),
    };

    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {data.columnOrder.map((columnId) => {
        const column = data.columnList.find((x) => x.id === columnId);
        const tasks = column.taskIdList.map((taskId) => data.taskList.find((x) => x.id === taskId));
        return <Column key={columnId} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
