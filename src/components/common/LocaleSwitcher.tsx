"use client";

import { locales, Locale } from "@/i18n/locales";
import { setLocaleAction } from "@/i18n/actions";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    startTransition(async () => {
      await setLocaleAction(nextLocale);
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1 text-xs dark:border-gray-800">
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleChange(item)}
          disabled={isPending}
          className={`rounded-full px-2 py-1 font-medium transition-colors ${
            item === locale
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

