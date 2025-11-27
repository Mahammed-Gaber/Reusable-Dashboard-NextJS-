<div dir="rtl">

# تدفق عمل التطبيق (Next.js App Router)

هذا الدليل يوضح بالتسلسل كيف يتحرك الطلب داخل المشروع من ملفات `app/` حتى وحدات `@dashboards/` و `@adminDashboard/`, وما الذي يقوم به كل ملف بالضبط.

## 1. نقطة البدء: `src/app/layout.tsx`
- أول ملف يتم تحميله لكل طلب.
- يهيئ خطوط Google, الأنماط العامة, السياقات المشتركة (`ThemeProvider`, `SidebarProvider`) ومزود الترجمة `NextIntlClientProvider`.
- أي صفحة أو مسار داخل `app/` سيُعرض داخل هذا الـ layout.

## 2. تحديد الوجهة الأولى: `src/app/page.tsx`
- هذا هو المسار `/` (الصفحة العامة).
- يقرأ الكوكيز `token` و `role` (مُعلّق مؤقتًا بقيم ثابتة أثناء التطوير).
- السيناريوهات:
  1. لا يوجد `token` ⇒ يظل في صفحة التسويق `(marketing)` ويُستخدم `MarketingLayout` + `MarketingPage`.
  2. يوجد `token` + `role` ⇒ يعيد التوجيه إلى `/dashboard`.
  3. يوجد `token` بدون `role` ⇒ يعيد التوجيه إلى `/login`.
- بهذه الخطوة نقرر هل المستخدم ضيف أم مصدّق قبل أن ندخل أي ملفات أخرى.

## 3. مسار الداشبورد: `src/app/dashboard/layout.tsx`
- هذا Layout عميل يغلّف كل صفحات `/dashboard/*`.
- يستدعي `DashboardLayout` من `src/dashboards/layout/DashboardLayout.tsx` والذي يرسم الهيكل المشترك (Sidebar, Header, Backdrop).
- أي صفحة داخل `/dashboard` تمر عبر هذا الـ layout قبل عرض المحتوى الخاص.

## 4. المعالج الديناميكي: `src/app/dashboard/[[...slug]]/page.tsx`
- يمثل كل المسارات تحت `/dashboard` باستخدام catch-all route.
- بالنسبة لـ Next.js هو مسار ديناميكي واحد فقط، لكن داخليًا نمرر كل المسارات الممكنة دفعة واحدة عبر `slug`، لذلك لا يحتاج App Router إلى آلاف ملفات `[slug]` منفصلة.
- أي زيارة لـ `/dashboard/...` مهما طال المسار سيتم توجيهها لهذا الملف ثم نتحكم في التفرّعات داخل طبقة الداشبورد.
- يقرأ الكوكيز للتحقق من `token` و `role` ثم:
  - بدون `token` ⇒ redirect إلى `/`.
  - بدون `role` ⇒ redirect إلى `/login`.
- يحدد الدور (`admin`/`provider`) ثم يمرر:
  - `role`
  - `slug` (مثل `["calendar"]` أو `["users","list"]`)
  إلى `DashboardOutlet`.
- هذا هو الملف الذي يحوّل الطلب من طبقة الـ App Router إلى طبقة الـ Dashboards المعيارية.

## 5. موزّع الصفحات: `src/dashboards/DashboardOutlet.tsx`
- Component عميل يستقبل `role` و `slug`.
- يطبع المسار إلى صيغة نظيفة (`/calendar`, `/profile`, …).
- ينظر في الخرائط:
  - `src/dashboards/routes/adminRoutes.ts`
  - `src/dashboards/routes/providerRoutes.ts`
- يحمّل الصفحة المناسبة باستخدام `next/dynamic` (بدون SSR) ويعرض رسالة تحميل لحين جلب الكومبوننت.
- النتيجة: شعور مشابه لـ React Router لكن داخل Next.js.

## 6. تعريف المسارات بالإعتماد على الـ Features
- `src/dashboards/routes/adminRoutes.ts`:
  - يدمج كل الخرائط الجزئية من `src/dashboards/adminDashboard/routes/index.ts`.
  - يضيف مسارات مشتركة مثل صفحة الخطأ `"/error-404"`.
- `src/dashboards/adminDashboard/routes/index.ts`:
  - يجمع المسارات من كل ميزة (`dashboard`, `calendar`, `forms`, …).
  - كل ميزة لديها ملف `routes.ts` داخلها يعرف مساراتها فقط.
- بهذه الطريقة يمكن إضافة Feature جديدة عبر:
  1. إنشاء مجلد داخل `features/{featureName}`.
  2. إنشاء صفحاتها + ملف `routes.ts`.
  3. تصدير المسارات وإضافتها في `routes/index.ts`.

## 7. هيكلة الـ Feature: مثال `@adminDashboard/features/dashboard`
- **pages/**: ملفات واجهات Next لكل صفحة (مثلاً `DashboardHomePage.tsx`).
- **components/**: المكونات الخاصة بالميزة (Hero, Grid, بطاقات…).
- **services/**: تعريفات RTK Query أو الخدمات التي تجلب البيانات.
- **types/**: أنواع TypeScript المشتركة داخل الميزة.
- مثال التدفق داخل `DashboardHomePage`:
  1. يستدعي `useGetDashboardHeroQuery` من `services/dashboardService.ts`.
  2. يعرض البيانات في `DashboardHero`.
  3. يرسم بقية الأعمدة عبر مكونات معاد استخدامها (`PrimaryMetricsColumn`, `OrdersColumn`, …).

## 8. طبقة الخدمات العامة: `src/services/`
- `api.ts`: يعرّف `createApi` الخاص بـ RTK Query مع `baseQuery`.
- `baseQuery.ts`: يُعِد `fetchBaseQuery` مع إدارة التوكن والأخطاء.
- `store.ts`: ينشئ `configureStore` ويضيف `api.reducer` + `api.middleware`.
- أي Feature يمكنه استدعاء `api.injectEndpoints` لبناء endpoints خاصة، كما هو الحال في `dashboardService.ts`.

## 9. سلسلة التنفيذ الكاملة (TL;DR)
1. الطلب يمر عبر `app/layout.tsx` للحصول على Providers العامة.
2. إذا كان على `/` يتم تطبيق منطق `app/page.tsx` لتحديد المسار (Landing أو Dashboard).
3. عند الدخول إلى `/dashboard/*` يمر عبر `app/dashboard/layout.tsx` لنفس هيكل UI.
4. `[[...slug]]/page.tsx` يتحقق من الكوكيز ويحول الطلب إلى `DashboardOutlet`.
5. `DashboardOutlet` يحدد الدور والمسار ويفتح الصفحة الديناميكية من `@adminDashboard` أو `@providerDashboard`.
6. داخل كل ميزة يتم جلب البيانات عبر الخدمات في `src/services/` أو خدمات الميزة نفسها.

باتباع هذا المسار يمكنك تتبع أي دورة حياة لصفحة داخل المشروع، ومعرفة الملف المسؤول عن كل خطوة من لحظة دخول المستخدم وحتى تحميل محتوى الميزة المطلوبة.

</div>