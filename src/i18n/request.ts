import { getRequestConfig } from "next-intl/server";
import { headers, cookies } from "next/headers";
import { defaultLocale, locales, Locale } from "./locales";

function normalizeLocale(value?: string | null): Locale {
  if (!value) {
    return defaultLocale;
  }
  const lowercase = value.split("-")[0].toLowerCase();
  return (locales.find((locale) => locale === lowercase) ?? defaultLocale) as Locale;
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("locale")?.value as Locale | undefined;

  const headerLocale = (await headers()).get("accept-language");
  const locale =
    (cookieLocale && locales.includes(cookieLocale) ? cookieLocale : undefined) ??
    normalizeLocale(headerLocale);

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

