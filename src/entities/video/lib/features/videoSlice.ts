import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@shared/lib';
import { IVideoNotificationProps } from '@entities/video';


interface initialState {
    video: IVideoNotificationProps[];
}

const initialState: initialState = {
    video: [],
};
export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setVideo: (state, action) => {
            state.video = action.payload;
        },
    },
});
export const { setVideo } = videoSlice.actions;

export const selectVideo = (state: RootState) => state.video.video;