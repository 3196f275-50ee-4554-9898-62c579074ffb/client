import { mainApi } from '@store/api';

export const reportApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getReportsById: builder.query({
            query: (id: string) => ({
                url: `/object/building/${id}/reports`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useLazyGetReportsByIdQuery } = reportApi;