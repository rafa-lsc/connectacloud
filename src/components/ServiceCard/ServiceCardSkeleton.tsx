import React from "react";
import styles from "./ServiceCardSkeleton.module.css";

export default function ServiceCardSkeleton() {
  return (
    <div className={styles.cardSkeleton}>
        <div className={styles.nameSkeleton}></div>
        <div className={styles.statusSkeleton}></div>
    </div>
  );
}
