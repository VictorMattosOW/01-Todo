import { useState } from 'react';
import { Contador } from './components/Contador';
import { Header } from './components/Header';
import './App.css'
import './global.css';
import { Input } from './components/Input';
import { TaskList } from './components/TaskList';

export interface TaskInterface {
  title: string;
  completed: boolean;
}

function App() {
  const [task, SetTask] = useState(Array<TaskInterface>);

  function onCreateNewTask(newTask: TaskInterface) {
    SetTask([...task, newTask]);
  }

  function deleteTask(deleteTask: TaskInterface) {
    const commentsWithoutDeletedOne = task.filter(task => {
      return task !== deleteTask;
    })

    SetTask(commentsWithoutDeletedOne);
  }

  function completedTask(completedTask: TaskInterface) {
    const tasksCompleted = task.map(task => {
      if(task === completedTask) {
        task.completed = completedTask.completed;
      }
      return task;
    })
    SetTask(tasksCompleted);
  }

  return (
    <div className="App">
      <Header />
      <main className='wrapper'>
        <Input onCreateNewTask={onCreateNewTask} />
        <Contador taskCount={task} />
        <TaskList tasks={task} onDeleteTask={deleteTask} onCompletedTask={completedTask}/>
      </main>
    </div>
  )
}

export default App
