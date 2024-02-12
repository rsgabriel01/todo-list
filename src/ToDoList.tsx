import styles from './ToDoList.module.css'

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
        <ul className={styles.toDoList}>
          <li>Tarefa 1</li>
        </ul>
      </div>
    </main>
  )
}
