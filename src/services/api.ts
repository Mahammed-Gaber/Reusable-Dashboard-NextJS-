import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorHandling } from './baseQuery';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithErrorHandling, // baseQueryWithErrorHandling هتتعرف في baseQuery
  tagTypes: ['AboutDashboard', "MyBid", "MyBids", 'PeopleServices', 'News', 'Organizations', 'Questions', 'Profile', 'Services', 'Projects', 'videos', 'SocialLinks', 'Tickets', 'Steps', 'TrustedBy', 'Settings', 'Notifications'], // إضافة جميع ال tagTypes المستخدمة في الأندبوينتس
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_builder) => ({}), // Endpoints هتتعرف في modules
});

export default api;