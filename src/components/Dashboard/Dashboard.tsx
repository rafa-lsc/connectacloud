import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Dashboard.module.css";
import { Search } from "lucide-react";
import { useServiceStatus } from "../../hooks/useServiceStatus";
import ServiceCardSkeleton from "../ServiceCard/ServiceCardSkeleton";
import { useState } from "react";

export default function Dashboard() {
  const { services, isLoading, error } = useServiceStatus();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.barraPesquisa}>
        <input
          type="text"
          placeholder="Pesquisar..."
          className={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
        ) : filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className={styles.notFound}>Nenhum serviço encontrado</p>
        )}
      </div>
    </div>
  );
}
