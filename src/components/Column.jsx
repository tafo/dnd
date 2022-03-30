import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

import "./Column.css";

function Column(props) {
  return (
    <div className="column--container">
      <h3 className="column--title">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
