import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import { useServiceStore } from "../../stores/ServiceStore";
import type { Service } from "../../types";

import styles from "./Dashboard.module.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServiceCardSkeleton from "../ServiceCard/ServiceCardSkeleton";
import ServiceModal from "../ServiceModal/ServiceModal";
import ErrorBoundary from "../Error/ErrorBoundary";

export default function Dashboard() {
  const allServices = useServiceStore((state) => state.services.allIds);
  const isLoading = useServiceStore((state) => state.isLoading);
  const error = useServiceStore((state) => state.error);
  const loadServices = useServiceStore((state) => state.loadServices);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    loadServices();
  }, [loadServices]);

  const filteredServices = useMemo(
    () =>
      allServices.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [allServices, searchTerm]
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
          </>
        ) : error ? (
          <p className={styles.cardError}>Erro ao carregar: {error}</p>
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
