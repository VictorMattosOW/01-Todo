import style from './NoTasks.module.css';

export function NoTasks() {
  return (
    <div className={style.content}>
      <div className={style.img}>
        <img src="../src/assets/Clipboard.svg" alt="" />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}