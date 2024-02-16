import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'

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
