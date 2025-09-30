import React from "react";
import { Card, CardContent } from "../ui/card";

export default function ServiceCardSkeleton() {
  return (
    <Card className="max-w-[100%] p-4 rounded-lg mt-2 mb-2 border-2 border-border bg-card">
      <CardContent className="flex justify-between items-center px-4 py-1.5">
        <div className="w-[25%] h-6 mt-1.5 mb-1.5 rounded-md bg-border animate-pulse"></div>
        <div className="w-[12.5%] h-7 mt-1.5 mb-1.5 rounded-xl bg-border animate-pulse"></div>
      </CardContent>
    </Card>
  );
}
