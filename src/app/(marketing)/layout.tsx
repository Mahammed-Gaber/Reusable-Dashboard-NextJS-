import Link from "next/link";
import LocaleSwitcher from "@/components/common/LocaleSwitcher";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            TailAdmin
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <Link href="/login">تسجيل الدخول</Link>
            <a
              href="https://tailadmin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gray-900 px-4 py-2 text-white"
            >
              حمل النسخة
            </a>
          </nav>
          <LocaleSwitcher />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TailAdmin. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <Link href="/privacy">سياسة الخصوصية</Link>
            <Link href="/terms">شروط الاستخدام</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


