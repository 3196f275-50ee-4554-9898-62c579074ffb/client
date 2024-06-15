import {
    setStatistics,
    useLazyGetByObjectIdQuery,
} from '@entities/statistics';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib';

export const useGetByObjectIdStatistics = () => {
    const [objectTrigger, { data }] = useLazyGetByObjectIdQuery();
    const dispatch = useAppDispatch();
    const trigger = async (id: string) => {
        await objectTrigger(id);
    };
    useEffect(() => {
        if (data) {
            dispatch(setStatistics(data));
        }
    }, [data]);
    return { trigger, data };
};