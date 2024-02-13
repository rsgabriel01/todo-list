import styles from './ToDoList.module.css'
import { ClipboardText } from 'phosphor-react'

export function ToDoList() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button type="submit">Criar</button>
      </form>
      <div className={styles.toDo}>
        <header>
          <span>Tarefas criadas</span>
          <span>Concluídas</span>
        </header>

        <div
          className={`${styles.toDoListEmptySection} ${styles.toDoListEmptySectionHide}`}
        >
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <ul className={`${styles.toDoList} ${styles.toDoListHide}`}>
          <li>Tarefa 1</li>
        </ul>
      </div>
    </main>
  )
}
