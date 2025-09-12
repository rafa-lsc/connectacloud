import { useEffect, useState } from "react";
import { mockServices } from "../data/mock-services";
import type { Service } from "../types";

export function useServiceStatus() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        setServices(mockServices);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    }, 1500);
  }, []);

  return { services, isLoading, error };
}
