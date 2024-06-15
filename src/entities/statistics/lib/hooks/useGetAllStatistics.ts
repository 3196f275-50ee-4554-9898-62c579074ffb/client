import { setStatistics, useGetAllQuery } from '@entities/statistics';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib';

export const useGetAllStatistics = () => {
    const { data } = useGetAllQuery(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (data) {
            dispatch(setStatistics(data));
        }
    }, [data]);
    return data;
};