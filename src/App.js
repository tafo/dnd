import { useState } from "react";
import Column from "./components/Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import initialData from "./data/index";

import "./App.css";

function App() {
  const [data, setData] = useState(initialData);
  const [homeIndex, setHomeIndex] = useState(null);

  const handleDragStart = (result) => {
    document.body.style.color = "orange";
    const startIndex = data.columnOrder.indexOf(result.source.droppableId);
    setHomeIndex(startIndex);
  };

  const handleDragUpdate = (result) => {};

  const handleDragEnd = (result) => {
    document.body.style.color = "inherit";
    setHomeIndex(null);

    const { source, destination, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newData = {
        ...data,
        columnOrder: newColumnOrder,
      };

      setData(newData);
      return;
    }

    const startColumn = data.columnList.find(
      (x) => x.id === source.droppableId
    );
    const finishColumn = data.columnList.find(
      (x) => x.id === destination.droppableId
    );

    if (startColumn === finishColumn) {
      const newTaskIdList = Array.from(startColumn.taskIdList);
      newTaskIdList.splice(source.index, 1);
      newTaskIdList.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIdList: newTaskIdList,
      };

      const newData = {
        ...data,
        columnList: data.columnList.map((x) =>
          x.id === newColumn.id ? newColumn : x
        ),
      };

      setData(newData);
      return;
    }

    const startTaskIdList = Array.from(startColumn.taskIdList);
    startTaskIdList.splice(source.index, 1);
    const newStart = {
      ...startColumn,
      taskIdList: startTaskIdList,
    };

    const finishTaskIdList = Array.from(finishColumn.taskIdList);
    finishTaskIdList.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishColumn,
      taskIdList: finishTaskIdList,
    };

    const newData = {
      ...data,
      columnList: data.columnList.map((x) =>
        x.id === startColumn.id
          ? newStart
          : x.id === finishColumn.id
          ? newFinish
          : x
      ),
    };

    setData(newData);
  };

  return (
    <DragDropContext
      onDragStart={handleDragStart}
      onDragUpdate={handleDragUpdate}
      onDragEnd={handleDragEnd}
    >
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.columnOrder.map((columnId, index) => {
              const column = data.columnList.find((x) => x.id === columnId);
              const tasks = column.taskIdList.map((taskId) =>
                data.taskList.find((x) => x.id === taskId)
              );
              const isDropDisabled = index < homeIndex;
              return (
                <Column
                  key={columnId}
                  column={column}
                  tasks={tasks}
                  isDropDisabled={isDropDisabled}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
