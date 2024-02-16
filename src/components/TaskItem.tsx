import { GoCheckCircleFill, GoCircle, GoTrash } from 'react-icons/go'

import styles from './TaskItem.module.css'

import { taskType } from './ToDoList'
// import { ChangeEvent, FormEvent, useState } from 'react'

interface TaskItemProps {
  task: taskType
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <li className={task.done ? styles.itemChecked : ''}>
      <section className={styles.itemCheckAndTextTask}>
        <button className={styles.taskButtonCheck}>
          {task.done ? (
            <GoCheckCircleFill size={20} className={styles.taskUnchecked} />
          ) : (
            <GoCircle size={20} className={styles.taskUnchecked} />
          )}
        </button>
        {task.text}
      </section>

      <button className={styles.taskButtonTrash}>
        <GoTrash size={20} className={styles.taskTrash} />
      </button>
    </li>
  )
}
