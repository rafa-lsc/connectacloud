import styles from "./Header.module.css"
import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ConnectaCloud Status</h1>
      <button onClick={toggleTheme} className={styles.button}>
        {theme === "light" ? <Moon/> : <Sun/>}
      </button>
    </header>
  );
}
