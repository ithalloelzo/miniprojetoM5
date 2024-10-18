import styles from "./Header.module.css"
function Header() {
    return (
        <header className={styles.header}>
            <span>Book Finance</span>
            <nav>
                <a href="">Consultar</a>
                <a href="">Ver Lista</a>
                <a href="">Pesquisar</a>
                <a href="">Pesquisar</a>
            </nav>
        </header>
    )
}

export default Header