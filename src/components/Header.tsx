import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <img src="../src/assets/icon.svg" alt="icone de foguete" />
      <div className={style.header_title}>
        <h1>to</h1>
        <h1>do</h1>
      </div>
    </header>
  )
}