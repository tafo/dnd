import Task from "./Task";
import { Droppable, Draggable } from "react-beautiful-dnd";

import "./Column.css";

// ToDo: Implement UseMemo and PureComponent to increase performance
const InnerList = (props) => {
  return props.tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
  ));
};

// Use IsDragDisabled

function Column(props) {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          className="column--container"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h3 className="column--title" {...provided.dragHandleProps}>
            {props.column.title}
          </h3>
          <Droppable
            droppableId={props.column.id}
            isDropDisabled={props.isDropDisabled}
            type="task"
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={
                  snapshot.isDraggingOver
                    ? "column--task-list dragging-over"
                    : "column--task-list"
                }
              >
                <InnerList tasks={props.tasks}></InnerList>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
