import styles from './ToDoList.module.css'
import { GoCheckCircle, GoCircle, GoPlusCircle, GoTrash } from 'react-icons/go'

export function ToDoList() {
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
            <span className={styles.createdTasksNumber}>5</span>
          </section>
          <section className={styles.completedTasks}>
            <span>Concluídas</span>
            <span className={styles.completedTasksNumberHumanized}>2 de 5</span>
          </section>
        </header>

        {/* <div className={styles.toDoListEmptySection}>
          <MdFormatListBulletedAdd size={58} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div> */}

        <ul className={styles.toDoList}>
          <li>
            <button>
              <GoCheckCircle />
              <GoCircle />
            </button>
            Tarefa
            <button>
              <GoTrash />
            </button>
          </li>

          <li>
            <button>
              <GoCheckCircle />
              <GoCircle />
            </button>
            Tarefa
            <button>
              <GoTrash />
            </button>
          </li>
        </ul>
      </div>
    </main>
  )
}
