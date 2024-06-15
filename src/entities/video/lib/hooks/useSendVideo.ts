import { setVideo, useSendVideoMutation } from '@entities/video';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib';
import { toggleVideoProcessing } from '@features/events';

export const useSendVideo = () => {
    const [sendVideo, { data }] = useSendVideoMutation();
    const dispatch = useAppDispatch();
    const trigger = async (video: FormData) => {
        sendVideo(video);
    };
    useEffect(() => {
        if (data) {
            dispatch(toggleVideoProcessing(true));
            dispatch(setVideo(data));
        }
    }, [data]);
    return { trigger, data };
};