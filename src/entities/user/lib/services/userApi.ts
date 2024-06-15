import { mainApi } from '@store/api';

export const userApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getMe: build.query({
            query: () => ({
                url: `/auth/me`,
                method: 'GET',
            }),
        }),
        getUsers: build.query({
            query: () => ({
                url: `/auth/users`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetMeQuery, useGetUsersQuery } = userApi;