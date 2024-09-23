import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', import.meta.env.VITE_RAPID_KEY);
            headers.set('x-rapidapi-host', import.meta.env.VITE_HOST);

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=5`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi