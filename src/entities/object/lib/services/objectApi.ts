import { mainApi } from '@store/api';

export const objectApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getObjects: builder.query({
            query: () => ({
                url: '/object/building',
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetObjectsQuery } = objectApi;