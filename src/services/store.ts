import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";
// import filtersReducer from "@/modules/tenders/shared/store/filtersSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer, // يشمل كل الـ endpoints بشكل تلقائي
        // filters: filtersReducer, // Unified filter system for all features
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware), // يدير كل الـ API calls بشكل تلقائي
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;