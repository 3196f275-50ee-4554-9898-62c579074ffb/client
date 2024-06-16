import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { RootState } from '@shared/lib';
import { IAuthResponse, logout, setToken } from '@features/auth';

export const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        // const accessToken = (getState() as RootState).auth.accessToken;
        const accessToken = localStorage.getItem('accessToken');
        // headers.set('Content-Type', 'application/json');
        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return headers;
    },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

        if (refreshResult.data) {
            const { token } = refreshResult.data as IAuthResponse;
            localStorage.setItem('accessToken', token);
            api.dispatch(setToken(token));
            result = await baseQuery(args, api, extraOptions);
        } else {
            localStorage.removeItem('accessToken');
            api.dispatch(logout());
        }
    }
    return result;
};
