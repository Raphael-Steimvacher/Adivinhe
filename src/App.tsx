import { Header } from "./components/Header"

import styles from "./app.module.css"

export function App() {
  return (
    <div className={styles.container}>
      <main>
      <Header />
      </main>
    </div>
  )
}
