import { setChart, useGetAllChartsQuery } from '@entities/statistics';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib';

export const useGetAllCharts = () => {
    const { data } = useGetAllChartsQuery(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (data) {
            dispatch(setChart(data));
        }
    }, [data]);
    return data;
};