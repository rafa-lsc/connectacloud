export type ServiceStatus = 'operational' | 'degraded' | 'outage';

export interface Service {
  id: string;
  name: string;
  status: ServiceStatus;
  latency: number;
  lastChecked: string; // Formato ISO 8601
}