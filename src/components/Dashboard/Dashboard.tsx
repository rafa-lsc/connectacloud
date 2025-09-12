import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Dashboard.module.css";
import { Search } from "lucide-react";
import { useServiceStatus } from "../../hooks/useServiceStatus";

export default function Dashboard() {
  const { services, isLoading, error } = useServiceStatus();

  return (
    <div className={styles.container}>
      <div className={styles.barraPesquisa}>
        <input
          type="text"
          placeholder="Pesquisar..."
          className={styles.input}
        />
        <span>
          <Search />
        </span>
      </div>

      <div className={styles.cardsContainer}>
        {isLoading && <p className={styles.loading}>Carregando serviços...</p>}
        {error && <p>Erro ao carregar: {error.message}</p>}
        {!isLoading &&
          !error &&
          services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
      </div>
    </div>
  );
}
