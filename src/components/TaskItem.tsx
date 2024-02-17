import { GoCheckCircleFill, GoCircle, GoTrash } from 'react-icons/go'

import styles from './TaskItem.module.css'

import { taskType } from './ToDoList'
// import { ChangeEvent, FormEvent, useState } from 'react'

interface TaskItemProps {
  task: taskType
  onDoneUndoneTask: (task: taskType) => void
  onDeleteTask: (task: taskType) => void
}

export function TaskItem({
  task,
  onDoneUndoneTask,
  onDeleteTask
}: TaskItemProps) {
  function handleDoneUndoneTask() {
    onDoneUndoneTask(task)
  }

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  return (
    <li className={task.done ? styles.itemChecked : ''}>
      <section className={styles.itemCheckAndTextTask}>
        <button
          className={styles.taskButtonCheck}
          onClick={handleDoneUndoneTask}
          title={`${
            task.done
              ? 'Marcar tarefa como não finalizada'
              : 'Marcar tarefa como finalizada'
          }`}
        >
          {task.done ? (
            <GoCheckCircleFill size={20} className={styles.taskChecked} />
          ) : (
            <GoCircle size={20} className={styles.taskUnchecked} />
          )}
        </button>
        {task.text}
      </section>

      <button className={styles.taskButtonTrash}>
        <GoTrash
          size={20}
          className={styles.taskTrash}
          title="Deletar tarefa"
          onClick={handleDeleteTask}
        />
      </button>
    </li>
  )
}
