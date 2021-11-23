import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
        fetchFn:fetch
    })
})