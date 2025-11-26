import { getTranslations } from "next-intl/server";

export default async function LandingPage() {
  const t = await getTranslations("landing");

  return (
    <section className="space-y-10 text-center">
      <p className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold tracking-widest text-gray-600">
        {t("badge")}
      </p>
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          {t("description")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="/login"
          className="w-full rounded-full bg-gray-900 px-6 py-3 text-center text-white sm:w-auto"
        >
          {t("primaryCta")}
        </a>
        <a
          href="https://github.com/tailadmin"
          target="_blank"
          rel="noreferrer"
          className="w-full rounded-full border border-gray-300 px-6 py-3 text-center text-gray-700 sm:w-auto"
        >
          {t("secondaryCta")}
        </a>
      </div>
      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-left">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          {t("pill")}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">
          {t("featureTitle")}
        </h2>
        <p className="mt-4 text-gray-600">{t("featureDescription")}</p>
      </div>
    </section>
  );
}


