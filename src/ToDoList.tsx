import styles from './ToDoList.module.css'

export function ToDoList() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button type="submit">Criar</button>
      </form>
      <div className={styles.toDoList}>opasasass</div>
    </main>
  )
}
