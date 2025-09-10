import styles from "./Header.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>ConnectaCloud Status</h1>
            <button className={styles.button}>Tema</button>
        </header>
    );
}