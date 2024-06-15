import { useSendVideoMutation } from '@entities/video';

export const useSendVideo = () => {
    const [sendVideo, { data }] = useSendVideoMutation();
    const trigger = async (video: FormData) => {
        sendVideo(video);
    };
    return { trigger, data };
};