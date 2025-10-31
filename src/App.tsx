import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/letter"
import { Input } from "./components/input"

import styles from "./app.module.css"

export function App() {
  function handleRestartGame() {
    alert("Jogo reiniciado")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Liguagem de programação dinâmica" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>

        <div>
          <Input autoFocus maxLength={1} placeholder="?" />
        </div>
      </main>
    </div>
  )
}
