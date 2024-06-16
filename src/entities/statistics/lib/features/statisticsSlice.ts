import { createSlice } from '@reduxjs/toolkit';
import { IChartStatistics, IStatistics, StatisticsTypeEnum } from '@entities/statistics';
import { RootState } from '@shared/lib';


interface initialState {
    type: 'all' | 'worker' | 'object';
    statistics: IStatistics | null;
    chart: IChartStatistics | null;
}


const initialState: initialState = {
    type: 'all',
    statistics: null,
    chart: null,
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
        setChart: (state, action) => {
            state.chart = action.payload;
        },
    },
});

export const { changeStatisticsType, setStatistics, setChart } = statisticsSlice.actions;
export const selectedStatistics = (state: RootState) => state.statistics.statistics;
export const selectedChartStatistics = (state: RootState) => state.statistics.chart;