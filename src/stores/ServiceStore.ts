import { create } from 'zustand';
import type { Service } from '../types';
import { mockServices } from '../data/mock-services';

type ServiceState = {
  services: {
    byId: Record<string, Service>;
    allIds: Service[];
  };
  isLoading: boolean;
  error: string | null;
  loadServices: () => void;
  addService: (service: Service) => void;
  updateService: (service: Service) => void;
  removeService: (id: string) => void;
};

export const useServiceStore = create<ServiceState>((set) => ({
  services: { byId: {}, allIds: [] },
  isLoading: false,
  error: null,
  loadServices: () => {
    set({ isLoading: true, error: null });

    setTimeout(() => {
      try {
        const byId = Object.fromEntries(
          mockServices.map(service => [service.id, service])
        );
        const allIds = mockServices;
        set({
          services: { byId, allIds },
          isLoading: false,
        });
      } catch (e) {
        set({ error: 'Falha ao carregar os serviços', isLoading: false });
      }
    }, 1500);
  },

  addService: (service) => set((state) => ({
    services: {
      byId: { ...state.services.byId, [service.id]: service },
      allIds: [...state.services.allIds, service],
    },
  })),
  updateService: (service) => set((state) => ({
    services: {
      ...state.services,
      byId: { ...state.services.byId, [service.id]: service },
    },
  })),
  removeService: (id) => set((state) => {
    const { [id]: _, ...byId } = state.services.byId;
    return {
      services: {
        byId,
        allIds: state.services.allIds.filter(service => service.id !== id),
      },
    };
  }),
}));