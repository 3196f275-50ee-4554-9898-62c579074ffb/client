import { mainApi } from '@store/api';
import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export const statisticsApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => ({
                url: '/statistics/penalty',
                method: 'GET',
            }),
        }),
        getByWorkerId: builder.query({
            query: (id: string) => ({
                url: `/statistics/penalty/user/${id}`,
                method: 'GET',
            }),
        }),
        getByObjectId: builder.query({
            query: (id: string) => ({
                url: `/statistics/penalty/building/${id}`,
                method: 'GET',
            }),
        }),
        getAllCharts: builder.query({
            query: () => ({
                url: `/statistics/penalty/array`,
                method: 'GET',
            }),
        }),
    }),
});
export const {
    useGetAllQuery,
    useLazyGetByWorkerIdQuery,
    useLazyGetByObjectIdQuery,
    useGetAllChartsQuery,
} = statisticsApi;