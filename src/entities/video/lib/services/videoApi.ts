import { mainApi } from '@store/api';

export const videoApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        sendVideo: builder.mutation<any, FormData>({
            query: (data) => ({
                url: '/video/video_to_ml',
                method: 'POST',
                body: data,

            }),
        }),
    }),
});
export const { useSendVideoMutation } = videoApi;