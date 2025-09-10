import styles from "./Dashboard.module.css";
import { Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div className={styles.barraPesquisa}>
      <input
        type="text"
        placeholder="Pesquisar..."
        className={styles.input}
      />
      <span className={styles.button}><Search/></span>
    </div>
  );
}
