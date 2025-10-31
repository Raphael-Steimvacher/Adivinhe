import style from "./styles.module.css"

type Props = React.ComponentProps<"input">

export function Input({...rest}:Props){
  return (
    <input type="text" className={style.input} {...rest} />
  )
}