import { MdFormatListBulletedAdd } from 'react-icons/md'
import styles from './ToDoList.module.css'
import {
  GoCheckCircleFill,
  GoCircle,
  GoPlusCircle,
  GoTrash
} from 'react-icons/go'

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
            <span className={styles.createdTasksNumber}>
              {false ? '0' : '9'}
            </span>
          </section>
          <section className={styles.completedTasks}>
            <span>Concluídas</span>
            <span className={styles.completedTasksNumberHumanized}>
              {false ? '0' : '3 de 9'}
            </span>
          </section>
        </header>
        {false ? (
          <div className={styles.toDoListEmptySection}>
            <MdFormatListBulletedAdd size={58} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <ul className={styles.toDoList}>
            <li>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCircle size={24} className={styles.taskUnchecked} />
                </button>
                Tarefa 1: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam beatae, dolor voluptate ut, tempora non quia aut
                fugit rerum hic ipsa. Soluta, reprehenderit culpa? Excepturi
                aliquam porro obcaecati similique doloribus?
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>

            <li className={styles.itemChecked}>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCheckCircleFill size={24} className={styles.taskChecked} />
                </button>
                Tarefa 2: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit.
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>

            <li>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCircle size={24} className={styles.taskUnchecked} />
                </button>
                Tarefa 3: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iusto magnam accusantium esse doloribus nemo nostrum rem.
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>

            <li>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCircle size={24} className={styles.taskUnchecked} />
                </button>
                Tarefa 4: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam beatae, dolor voluptate ut, tempora non quia aut
                fugit rerum hic ipsa. Soluta, reprehenderit culpa? Excepturi
                aliquam porro obcaecati similique doloribus?
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>

            <li className={styles.itemChecked}>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCheckCircleFill size={24} className={styles.taskChecked} />
                </button>
                Tarefa 5: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit.
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>

            <li>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCircle size={24} className={styles.taskUnchecked} />
                </button>
                Tarefa 6: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iusto magnam accusantium esse doloribus nemo nostrum rem.
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>

            <li>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCircle size={24} className={styles.taskUnchecked} />
                </button>
                Tarefa 7: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam beatae, dolor voluptate ut, tempora non quia aut
                fugit rerum hic ipsa. Soluta, reprehenderit culpa? Excepturi
                aliquam porro obcaecati similique doloribus?
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>

            <li className={styles.itemChecked}>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCheckCircleFill size={24} className={styles.taskChecked} />
                </button>
                Tarefa 8: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit.
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>

            <li>
              <section className={styles.itemCheckAndTextTask}>
                <button className={styles.taskButtonCheck}>
                  <GoCircle size={24} className={styles.taskUnchecked} />
                </button>
                Tarefa 9: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iusto magnam accusantium esse doloribus nemo nostrum rem.
              </section>

              <button className={styles.taskButtonTrash}>
                <GoTrash size={24} className={styles.taskTrash} />
              </button>
            </li>
          </ul>
        )}
      </div>
    </main>
  )
}
