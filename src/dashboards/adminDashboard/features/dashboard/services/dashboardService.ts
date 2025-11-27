import type { DashboardHeroData } from "../types/dashboard.types";

export function getDashboardHero(): DashboardHeroData {
  return {
    title: "Admin Dashboard",
    subtitle: "رؤية عامة لحالة المشروع والمبيعات والنشاط اليومي.",
  };
}

// import api from "@/services/api";
// import type { DashboardHeroData } from "../types/dashboard.types";

// export const getDashboardHero = api.injectEndpoints({
//     endpoints: (builder) => ({
//         getDashboardHero: builder.query<DashboardHeroData, void>({
//             query: () => ({
//                 url: "/dashboard",
//                 method: "GET",
//             }),
//         }),
//     }),
// });

// export const { useGetDashboardHeroQuery } = getDashboardHero;

