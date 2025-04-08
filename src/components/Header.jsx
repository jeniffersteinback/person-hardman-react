import { Link } from "react-router-dom";
import styles from "./HeaderFooter.module.css";
export function Header(){
    return(
        <>
       <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h2 className={styles.brand}>Pearson Hardman</h2>
        <nav className={styles.navbar}>
          <Link to="/">Início</Link>
          <Link to="/Servicos">Serviços</Link>
          <Link to="/Sobre">Sobre</Link>
          <Link to="/Time">Time</Link>
          <Link to="/Contato">ContatLink</Link>
        </nav>

       </div>
       </header>
        </>
    )
}