import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { TaskInterface } from "../App";
import style from './Task.module.css';

interface TaskProps {
  tasks: TaskInterface;
  onDelete: (task: TaskInterface) => void;
  onCompletedTask: (task: TaskInterface) => void;
}

export function Task({ tasks, onDelete, onCompletedTask }: TaskProps) {

  function handleDeleteTask() {
    onDelete(tasks);
  }

  function handleMarkCheckbox(event: ChangeEvent<HTMLInputElement>) {
    tasks.completed = event.target.checked;
    onCompletedTask(tasks);
  }

  return (
    <div className={style.content}>
      <form className={style.form}>
        <input type="checkbox" onChange={handleMarkCheckbox} />
        <p className={tasks.completed ? style.task_checked : style.task}>{tasks.title}</p>
        <a className={style.icon} onClick={handleDeleteTask}><img src="../src/assets/lixo.svg" /></a>
      </form>
    </div>
  )
}