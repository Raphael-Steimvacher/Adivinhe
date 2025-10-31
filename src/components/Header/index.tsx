import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"

import styles from "./styles.module.css"

type props = {
  current: number
  max: number
  onRestart: () => void 
}
export function Header({current, max, onRestart}: props) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />
      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button type="button" onClick={onRestart}>
          <img src={restart} alt="Ícone de reiniciar" />
        </button>
      </header>
    </div>
  )
}
