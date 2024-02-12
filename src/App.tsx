import { Header } from './Header'
import { ToDoList } from './ToDoList'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ToDoList />
    </div>
  )
}
