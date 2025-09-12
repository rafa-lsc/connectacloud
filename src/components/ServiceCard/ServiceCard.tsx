import React from "react";
import styles from "./ServiceCard.module.css"
import type { Service } from "../../types";
import type { ServiceStatus } from "../../types";

interface ServiceCardProps{
    service: Service;
}

export default function ServiceCard({service}: ServiceCardProps){

    const statusClasses: Record<ServiceStatus, string>  = {
        operational: styles.operational,
        degraded: styles.degraded,
        outage: styles.outage
    };

    const statusClass = statusClasses[service.status.toLowerCase() as ServiceStatus] || '';

    return(
        <div className={styles.card}>
            <h2 className={styles.name}>{service.name}</h2>
            <div className={`${styles.statusContainer} ${statusClass}`}>
                <p className={styles.status}>{service.status}</p>
            </div>
        </div>
    );
}