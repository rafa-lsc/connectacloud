import React from "react";
import type { Service } from "../../types";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Dialog open={!!service} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[400px] w-[90%]">
        <DialogHeader>
          <DialogTitle className="font-bold text-primary">{service.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <p>
            <span className="font-bold text-primary">Status:</span> {service.status}
          </p>
          <p>
            <span className="font-bold text-primary">Latência:</span> {service.latency} ms
          </p>
          <p>
            <span className="font-bold text-primary">Última checagem:</span>{" "}
            {new Date(service.lastChecked).toLocaleString()}
          </p>
        </div>

        <DialogFooter>
          <Button
            variant="destructive"
            size="sm"
            onClick={onClose}
            className="cursor-pointer"
          >
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
