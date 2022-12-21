import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'f7ebe41667msh2f29f080e585f2bp14b0b2jsn9e72e33ee4ab');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi