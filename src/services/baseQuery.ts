import { fetchBaseQuery, type FetchArgs, type FetchBaseQueryError, type BaseQueryApi } from '@reduxjs/toolkit/query/react';
// import Cookies from 'js-cookie';

const defaultBaseUrl = import.meta.env.VITE_API_URL;
const nestBaseUrl = import.meta.env.VITE_API_URL_NEST;

export const baseQueryWithErrorHandling = async (
    args: FetchArgs,
    api: BaseQueryApi,
    extraOptions: { useNest?: boolean } = {}
) => {
    const baseUrl = extraOptions.useNest ? nestBaseUrl : defaultBaseUrl;

    const rawBaseQuery = fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Accept', 'application/json');
            return headers;
        },
    });

    try {
        const result = await rawBaseQuery(args, api, extraOptions);

        if (result.error) {
            const error = result.error as FetchBaseQueryError;

            switch (error.status) {
                case 401:
                    // Only remove the regular token, not the temporary 2FA token
                    localStorage.removeItem('token');
                    localStorage.clear();
                    break;
                case 'FETCH_ERROR':
                    return {
                        error: {
                            status: 'FETCH_ERROR',
                            data: null,
                            error: 'Network connection error. Please check your internet connection and try again.',
                        },
                    };
                case 400:
                case 500:

                    return {

                        error: {
                            status: error.status,
                            data: error.data,
                            error: (error.data as unknown as { message: string })?.message || 'An error occurred. Please try again.',

                        },
                    };
                default:
                    return result;
            }
        }

        return result;
    } catch (error) {
        console.error('Unhandled error in API call:', error);
        return {
            error: {
                status: 'FETCH_ERROR',
                data: null,
                error: 'An unexpected error occurred. Please try again later.',
            },
        };
    }
};