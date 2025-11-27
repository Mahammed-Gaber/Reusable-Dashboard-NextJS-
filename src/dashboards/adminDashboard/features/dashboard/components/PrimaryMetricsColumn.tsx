import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import React from "react";

export function PrimaryMetricsColumn() {
  return (
    <div className="col-span-12 space-y-6 xl:col-span-7">
      <EcommerceMetrics />
      <MonthlySalesChart />
    </div>
  );
}

