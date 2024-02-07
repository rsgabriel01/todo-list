import { Header } from './Header'

import './global.css'
import './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <main>
        <input type="text" placeholder="Adicione sua tarefa" />
      </main>
    </div>
  )
}
