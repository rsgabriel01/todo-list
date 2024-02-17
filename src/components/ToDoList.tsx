import { MdFormatListBulletedAdd } from 'react-icons/md'
import { ChangeEvent, FormEvent, useState } from 'react'

import { TaskItem } from './TaskItem'

import styles from './ToDoList.module.css'
import { GoPlusCircle } from 'react-icons/go'

export interface taskType {
  id: number
  text: string
  done: boolean
}

const tasksJson: taskType[] = [
  {
    id: 1,
    text: 'Tarefa 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae, dolor voluptate ut, tempora non quia aut fugit rerum hic ipsa Soluta, reprehenderit culpa? Excepturi aliquam porro obcaecati similique doloribus?',
    done: true
  },
  {
    id: 2,
    text: 'Tarefa 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    done: false
  }
]

export function ToDoList() {
  const [tasks, setTasks] = useState(tasksJson)

  const [newTaskText, setNewTaskText] = useState('')

  function makeCompletedTasksNumberHumanized() {
    const numberOfTasksDone = tasks.reduce((counter, task) => {
      if (task.done) counter++
      return counter
    }, 0)

    const tasksLength = tasks.length

    return `${numberOfTasksDone} de ${tasksLength}`
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const tasksSortedAscById = tasks.sort(function (taskA, taskB) {
      return taskA.id - taskB.id
    })

    const lastElementTasksSortedAscById =
      tasksSortedAscById[tasksSortedAscById.length - 1]

    const newTaskId: number =
      tasks.length > 0 ? lastElementTasksSortedAscById.id + 1 : 1

    const newTasksObject: taskType = {
      id: newTaskId,
      text: newTaskText,
      done: false
    }

    setTasks([...tasks, newTasksObject])

    setNewTaskText('')
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function doneUndoneTask(taskToDoneUndone: taskType) {
    const tasksWithAlteredTaskToDoneOrUndone = tasks.map(task => {
      if (task === taskToDoneUndone) {
        task.done = !task.done
        return task
      } else return task
    })

    setTasks(tasksWithAlteredTaskToDoneOrUndone)
  }

  function deleteTask(taskToDelete: taskType) {
    const tasksWithoutTaskToDelete = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutTaskToDelete)
  }

  function newTaskTextIsEmpty() {
    if (newTaskText.length === 0 || !newTaskText.trim()) {
      return true
    }
    return false
  }

  const isNewTaskEmpty = newTaskTextIsEmpty()

  return (
    <main>
      <form onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="taskText"
          autoComplete="off"
          value={newTaskText}
          onChange={handleNewTaskTextChange}
          required
        />

        <button type="submit" disabled={isNewTaskEmpty}>
          Criar
          <GoPlusCircle size={20} />
        </button>
      </form>
      <div className={styles.toDo}>
        <header>
          <section className={styles.createdTasks}>
            <span>Tarefas criadas</span>
            <span className={styles.createdTasksNumber}>{tasks.length}</span>
          </section>
          <section className={styles.completedTasks}>
            <span>Concluídas</span>
            <span className={styles.completedTasksNumberHumanized}>
              {tasks.length === 0
                ? '0'
                : `${makeCompletedTasksNumberHumanized()}`}
            </span>
          </section>
        </header>
        {tasks.length > 0 ? (
          <ul className={styles.toDoList}>
            {tasks.map(tasksIterator => (
              <TaskItem
                key={tasksIterator.id}
                task={tasksIterator}
                onDoneUndoneTask={doneUndoneTask}
                onDeleteTask={deleteTask}
              />
            ))}
          </ul>
        ) : (
          <div className={styles.toDoListEmptySection}>
            <MdFormatListBulletedAdd size={58} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </main>
  )
}
