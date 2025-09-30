import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import type { Service } from "../../types";
import { Button } from "../ui/button";

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  useEffect(() => {}, [onClose]);

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-card p-8 rounded-lg max-w-[400px] w-[90%] shadow-black/25"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{service.name}</h2>
        <p>
          <strong>Status:</strong> {service.status}
        </p>
        <p>
          <strong>Latência:</strong> {service.latency} ms
        </p>
        <p>
          <strong>Última checagem:</strong>{" "}
          {new Date(service.lastChecked).toLocaleString()}
        </p>

        <Button
          onClick={onClose}
          className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md cursor-pointer"
        >
          Fechar
        </Button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
}
