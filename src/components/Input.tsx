import { ChangeEvent, FormEvent, useState } from 'react';
import { TaskInterface } from '../App';
import style from './Input.module.css';

interface TaskProps {
  onCreateNewTask: (newTask: TaskInterface) => void;
}

export function Input({onCreateNewTask}: TaskProps) {

  const [task, SetTask] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    onCreateNewTask({
      title: task,
      completed: false
    });
    SetTask('');
  }

  function retornTask(event: ChangeEvent<HTMLInputElement>) {
    SetTask(event.target.value);
  }

  const isInputEmpty = task === '';

  return (
    <div className={style.content}>
      <form onSubmit={handleCreateTask} className={style.form_content}>

        <input 
          className={style.input} 
          type="text" 
          name="task" 
          value={task}
          onChange={retornTask}
          placeholder='Adicione uma nova tarefa'
          required
        />

        <button type='submit' className={style.button} disabled={isInputEmpty}>
          Criar 
          <img src="../src/assets/plus.svg"/>
        </button>
      </form>
    </div>
  )
}