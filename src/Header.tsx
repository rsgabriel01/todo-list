import styles from './Header.module.css'

import igniteLogo from '/todo-logo-rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ToDo  List" />
      <span>to</span>
      <span>do</span>
    </header>
  )
}
