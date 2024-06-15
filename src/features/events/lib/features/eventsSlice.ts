import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@shared/lib';

interface initialState {
    sidebar: boolean;
    videoProcessing: boolean;
    selectedUser: string;
}

const initialState: initialState = {
    sidebar: false,
    videoProcessing: false,
    selectedUser: '',
};

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar;
        },
        toggleVideoProcessing: (state, action) => {
            state.videoProcessing = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },

    },
});

export const { toggleSidebar, toggleVideoProcessing } = eventsSlice.actions;

export const selectSidebar = (state: RootState) => state.events.sidebar;
export const selectVideoProcessing = (state: RootState) => state.events.videoProcessing;
export const selectedUser = (state: RootState) => state.events.selectedUser;