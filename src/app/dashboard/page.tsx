import Link from "next/link";

export default function DashboardFallback() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50 px-6 text-center text-gray-700">
      <h1 className="text-2xl font-semibold text-gray-900">
        من فضلك اختر الدور الخاص بك
      </h1>
      <p className="max-w-md text-sm text-gray-500">
        لم نعثر على كوكيز role. اضبط الكوكيز إلى <strong>admin</strong> أو{" "}
        <strong>provider</strong> ثم أعد تحميل الصفحة لرؤية لوحة التحكم
        المناسبة.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="rounded-full border border-gray-300 px-4 py-2 text-sm"
        >
          الرجوع للصفحة الرئيسية
        </Link>
        <Link
          href="/login"
          className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white"
        >
          تسجيل الدخول
        </Link>
      </div>
    </div>
  );
}


