import React from "react";
import type { Service, ServiceStatus } from "../../types";

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

const statusColorMap: Record<Service["status"], string> = {
  operational: "bg-status-operational",
  degraded: "bg-status-degraded",
  outage: "bg-status-outage",
};

function ServiceCardComponent({ service, onClick }: ServiceCardProps) {

  return (
    <div
      className="flex justify-between items-center max-w-[100%] p-3 rounded-lg mt-3 mb-3 border-2 border-border bg-card"
      onClick={onClick}
    >
      <h2 className="primary font-semibold">{service.name}</h2>
      <div className={`rounded-xl px-1 py-1 w-[13%] text-center text-white ${statusColorMap[service.status]}`}>
        <p className="text-primary truncate hidden sm:block md:block">{service.status}</p>
      </div>
    </div>
  );
}

export default React.memo(ServiceCardComponent);
