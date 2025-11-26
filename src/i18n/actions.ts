"use server";

import { cookies } from "next/headers";
import { defaultLocale, locales, Locale } from "./locales";

export async function setLocaleAction(nextLocale: Locale) {
  const locale = locales.includes(nextLocale) ? nextLocale : defaultLocale;
  const store = await cookies();
  store.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}

