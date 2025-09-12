import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Dashboard.module.css";
import { Search } from "lucide-react";
import { useServiceStatus } from "../../hooks/useServiceStatus";
import ServiceCardSkeleton from "../ServiceCard/ServiceCardSkeleton";

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
        {isLoading ? (
          <>
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
          </>
        ) : error ? (
          <p>Erro ao carregar: {error.message}</p>
        ) : (
          services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </div>
    </div>
  );
}
