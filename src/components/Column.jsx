import "./Column.css";
import Task from "./Task";

function Column(props) {
  return (
    <div className="column--container">
      <h3 className="column--title">{props.column.title}</h3>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;
