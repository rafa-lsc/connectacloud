import React, { useMemo } from "react";
import styles from "./ServiceCard.module.css";
import type { Service, ServiceStatus } from "../../types";

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

function ServiceCardComponent({ service, onClick }: ServiceCardProps) {
  const statusClass = useMemo(() => {
    const statusClasses: Record<ServiceStatus, string> = {
      operational: styles.operational,
      degraded: styles.degraded,
      outage: styles.outage,
    };
    return statusClasses[service.status.toLowerCase() as ServiceStatus] || "";
  }, [service.status]);


  return (
    <div className={styles.card} onClick={onClick}>
      <h2 className={styles.name}>{service.name}</h2>
      <div className={`${styles.statusContainer} ${statusClass}`}>
        <p className={styles.status}>{service.status}</p>
      </div>
    </div>
  );
}

export default React.memo(ServiceCardComponent);