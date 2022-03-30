import { Draggable } from "react-beautiful-dnd";

import "./Task.css";

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className={snapshot.isDragging ? "task--container dragging" : "task--container"}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
