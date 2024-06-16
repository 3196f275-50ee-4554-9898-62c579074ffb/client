import {
    setStatistics,
    useLazyGetByObjectIdQuery,
} from '@entities/statistics';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib';

export const useGetByObjectIdStatistics = () => {
    const [trigger, { data }] = useLazyGetByObjectIdQuery();
    const dispatch = useAppDispatch();
    const objectTrigger = async (id: string) => {
        await trigger(id);
    };
    useEffect(() => {
        if (data) {
            dispatch(setStatistics(data));
        }
    }, [data]);
    return { objectTrigger, data };
};