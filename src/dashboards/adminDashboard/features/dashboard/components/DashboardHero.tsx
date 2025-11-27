import React from "react";

type DashboardHeroProps = {
  title: string;
  subtitle?: string;
};

export function DashboardHero({ title, subtitle }: DashboardHeroProps) {
  return (
    <div className="col-span-12">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
        {subtitle ? (
          <p className="text-sm text-gray-500 dark:text-gray-400 lg:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

