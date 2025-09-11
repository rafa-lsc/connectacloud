import React from "react";
import styles from "./ServiceCard.module.css"
import type { Service } from "../../types";

interface ServiceCardProps{
    service: Service;
}

export default function ServiceCard({service}: ServiceCardProps){
    return(
        <div className={styles.card}>
            <h2 className={styles.name}>{service.name}</h2>
            <p className={styles.status}>{service.status}</p>
        </div>
    );
}