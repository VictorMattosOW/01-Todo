import { TaskInterface } from '../App';
import { NoTasks } from './NoTasks';
import { Task } from './Task';
import style from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskInterface[];
  onDeleteTask: (task: TaskInterface) => void;
  onCompletedTask: (task: TaskInterface) => void;
}

export function TaskList({ tasks, onDeleteTask, onCompletedTask }: TaskListProps) {

  function handleDeleteTask(task: TaskInterface) {
    onDeleteTask(task);
  }

  function handleCompletedTask(task: TaskInterface) {
    onCompletedTask(task);
  }

  return (
    <div className={style.content}>
      {tasks.length > 0 
        ?
        tasks.map(task => {
          return <Task key={task.title} tasks={task} onDelete={handleDeleteTask} onCompletedTask={handleCompletedTask} />
        }) 
        : 
        <NoTasks />}
    </div>
  )
}