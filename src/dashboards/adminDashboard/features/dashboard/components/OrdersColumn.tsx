import RecentOrders from "@/components/ecommerce/RecentOrders";
import React from "react";

export function OrdersColumn() {
  return (
    <div className="col-span-12 xl:col-span-7">
      <RecentOrders />
    </div>
  );
}

