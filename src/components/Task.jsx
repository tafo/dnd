import "./Task.css";

const Task = (props) => {
  return <div className="task--container">{props.task.content}</div>;
};

export default Task;
