import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Dashboard.module.css";
import { Search } from "lucide-react";
import { useServiceStatus } from "../../hooks/useServiceStatus";
import ServiceCardSkeleton from "../ServiceCard/ServiceCardSkeleton";
import { useCallback, useState } from "react";
import ServiceModal from "../ServiceModal/ServiceModal";
import type { Service } from "../../types";
import ErrorBoundary from "../Error/ErrorBoundary";

export default function Dashboard() {
  const { services, isLoading, error } = useServiceStatus();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectService = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

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
            <ErrorBoundary
              key={service.id}
              fallback={
                <p className={styles.cardError}>Erro ao exibir este serviço</p>
              }
            >
              <ServiceCard
                service={service}
                onClick={() => setSelectedService(service)}
              />
            </ErrorBoundary>
          ))
        ) : (
          <p className={styles.notFound}>Nenhum serviço encontrado</p>
        )}
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
