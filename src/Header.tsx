import styles from './Header.module.css'

import todoListLogo from '/todo-logo-rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoListLogo} alt="Logotipo do ToDo  List" />
      <span>to</span>
      <span>do</span>
    </header>
  )
}
