import { useGetObjectsQuery } from '@entities/object';

export const useGetObjects = () => {
    const { data } = useGetObjectsQuery(null);
    return data;
};