import React from "react";

export default function ServiceCardSkeleton() {
  return (
    <div className="flex justify-between items-center max-w-[100%] p-3 rounded-lg mt-3 mb-3 border-2 border-border bg-card">
      <div className="w-[25%] h-6 mt-1.5 mb-1.5 rounded-md bg-border animate-pulse"></div>
      <div className="w-[12.5%] h-7 mt-1.5 mb-1.5 rounded-xl bg-border animate-pulse"></div>
    </div>
  );
}
