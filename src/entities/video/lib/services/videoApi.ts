import { mainApi } from '@store/api';

export const videoApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        sendVideo: builder.mutation<any, FormData>({
            query: (data) => ({
                url: '/video/videoinput',
                method: 'POST',
                body: data,

            }),
        }),
    }),
});
export const { useSendVideoMutation } = videoApi;