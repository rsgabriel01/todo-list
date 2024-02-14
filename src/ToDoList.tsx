import { MdFormatListBulletedAdd } from 'react-icons/md'
import styles from './ToDoList.module.css'
import {
  GoCheckCircleFill,
  GoCircle,
  GoPlusCircle,
  GoTrash
} from 'react-icons/go'
import { useState } from 'react'

interface taskType {
  id: number
  text: string
  done: boolean
}

// interface toDoListProps {
//   tasks: taskType[]
// }

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

  function makeCompletedTasksNumberHumanized() {
    const numberOfTasksDone = tasks.reduce((counter, task) => {
      if (task.done) counter++
      return counter
    }, 0)

    const tasksLength = tasks.length

    return `${numberOfTasksDone} de ${tasksLength}`
  }

  return (
    <main>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button type="submit">
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
              <li
                key={tasksIterator.id}
                className={tasksIterator.done ? styles.itemChecked : ''}
              >
                <section className={styles.itemCheckAndTextTask}>
                  <button className={styles.taskButtonCheck}>
                    {tasksIterator.done ? (
                      <GoCheckCircleFill
                        size={20}
                        className={styles.taskUnchecked}
                      />
                    ) : (
                      <GoCircle size={20} className={styles.taskUnchecked} />
                    )}
                  </button>
                  {tasksIterator.text}
                </section>

                <button className={styles.taskButtonTrash}>
                  <GoTrash size={20} className={styles.taskTrash} />
                </button>
              </li>
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
