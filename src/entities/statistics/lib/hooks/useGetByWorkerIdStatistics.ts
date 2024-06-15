import { setStatistics, useLazyGetByWorkerIdQuery } from '@entities/statistics';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib';

export const useGetByWorkerIdStatistics = () => {
    const [workerTrigger, { data }] = useLazyGetByWorkerIdQuery();
    const dispatch = useAppDispatch();
    const trigger = async (id: string) => {
        await workerTrigger(id);
    };
    useEffect(() => {
        if (data) {
            dispatch(setStatistics(data));
        }
    }, [data]);
    return { trigger, data };
};