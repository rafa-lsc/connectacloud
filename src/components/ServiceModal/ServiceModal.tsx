import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./ServiceModal.module.css";
import type { Service } from "../../types";

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  useEffect(() => {}, [onClose]);

  const modalContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{service.name}</h2>
        <p><strong>Status:</strong> {service.status}</p>
        <p><strong>Latência:</strong> {service.latency} ms</p>
        <p><strong>Última checagem:</strong> {new Date(service.lastChecked).toLocaleString()}</p>

        <button onClick={onClose} className={styles.close}>Fechar</button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
}

