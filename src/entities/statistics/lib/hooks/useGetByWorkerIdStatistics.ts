import { setStatistics, useLazyGetByWorkerIdQuery } from '@entities/statistics';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib';

export const useGetByWorkerIdStatistics = () => {
    const [trigger, { data }] = useLazyGetByWorkerIdQuery();
    const dispatch = useAppDispatch();
    const workerTrigger = async (id: string) => {
        await trigger(id);
    };
    useEffect(() => {
        if (data) {
            dispatch(setStatistics(data));
        }
    }, [data]);
    return { workerTrigger, data };
};