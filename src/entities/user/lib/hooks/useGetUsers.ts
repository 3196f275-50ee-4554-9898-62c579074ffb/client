import { useGetUsersQuery } from '@entities/user';

export const useGetUsers = () => {
    const { data } = useGetUsersQuery(null);
    if (!data) return [];
    return data.map(user => ({
        label: `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email,
        value: user.id,
    }));
};
