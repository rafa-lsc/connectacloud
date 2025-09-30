import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import { useServiceStore } from "../../stores/ServiceStore";
import type { Service } from "../../types";

import ServiceCard from "../ServiceCard/ServiceCard";
import ServiceCardSkeleton from "../ServiceCard/ServiceCardSkeleton";
import ServiceModal from "../ServiceModal/ServiceModal";
import ErrorBoundary from "../Error/ErrorBoundary";
import { Input } from "../ui/input";

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
    <div className="flex flex-col justify-center items-center sm:px-8 md:px-8">
        <div className="flex items-center gap-2 w-full max-w-[800px] mt-5 mb-5 ">
          <span>
            <Search></Search>
          </span>
          <Input
            type="text"
            placeholder="Pesquisar..."
            className="mr-auto ml-auto px-2 py-3 bg-card border-2 border-border rounded-xl flex-1 border-none outline-none text-sm text-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>


      <div className="w-full max-w-[800px]">
        {isLoading ? (
          <>
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
          </>
        ) : error ? (
          <p className="max-w-full p-3 rounded-lg mt-3 mb-3 border-2 border-border bg-card font-bold text-primary">Erro ao carregar: {error}</p>
        ) : filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ErrorBoundary
              key={service.id}
              fallback={
                <p className="max-w-full p-3 rounded-lg mt-3 mb-3 border-2 border-border bg-card font-bold text-primary">Erro ao exibir este serviço</p>
              }
            >
              <ServiceCard
                service={service}
                onClick={() => setSelectedService(service)}
              />
            </ErrorBoundary>
          ))
        ) : (
          <p className="font-bold text-primary text-center">Nenhum serviço encontrado</p>
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
