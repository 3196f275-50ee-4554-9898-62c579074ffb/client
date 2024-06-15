import { createSlice } from '@reduxjs/toolkit';
import { IStatistics, StatisticsTypeEnum } from '@entities/statistics';
import { RootState } from '@shared/lib';


interface initialState {
    type: 'all' | 'worker' | 'object';
    statistics: IStatistics | null;
}


const initialState: initialState = {
    type: 'all',
    statistics: null,
};
export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        changeStatisticsType: (state, action) => {
            state.type = action.payload;
        },
        setStatistics: (state, action) => {
            state.statistics = action.payload;
        },
    },
});

export const { changeStatisticsType, setStatistics } = statisticsSlice.actions;
export const selectedStatistics = (state: RootState) => state.statistics.statistics;