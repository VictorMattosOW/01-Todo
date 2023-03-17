import { TaskInterface } from '../App';
import style from './Contador.module.css';

interface TaskCountProps {
  taskCount: TaskInterface[]
}

export function Contador({ taskCount }: TaskCountProps) {

  let completedTasks = 0;
  taskCount.map(task => {
    if(task.completed) {
      completedTasks++
    }
  })

  return (
    <div className={style.content}>

      <div className={style.criadas}>
        <span>Tarefas criadas</span>
        <span className={style.cont}>{taskCount.length}</span>
      </div>

      <div className={style.concluidas}>
        <span>Concluídos</span>
        {completedTasks > 0 ? <span className={style.cont}>{completedTasks} de {taskCount.length}</span> : <span className={style.cont}>{completedTasks}</span>}
      </div>

    </div>
  )
}