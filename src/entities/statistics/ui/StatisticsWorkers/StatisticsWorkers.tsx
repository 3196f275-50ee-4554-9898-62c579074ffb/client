import cls from './StatisticsWorkers.module.scss';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Text } from '@shared/ui';
import { useGetUsersQuery } from '@entities/user';

export const StatisticsWorkers = () => {
    const { data: users } = useGetUsersQuery(null);
    return (
        <div className={cls.wrapper}>
            <Text.Paragraph
                size={SizeEnum.H1}
                weight={WeightEnum.MEDIUM}
                color={ColorEnum.TEXT}

            >
                Работники
            </Text.Paragraph>
            <ul className={cls.list}>
                {users && users.map((user, index) => {
                    if (index < 4) {
                        return (
                            <li className={cls.listItem} key={user.id}>
                                <Text.Paragraph
                                    size={SizeEnum.H4}
                                    color={ColorEnum.TEXT}
                                >
                                    {user.group_name}
                                </Text.Paragraph>
                                <Text.Paragraph
                                    size={SizeEnum.H3}
                                    weight={WeightEnum.MEDIUM}
                                    color={ColorEnum.TEXT}
                                >
                                    {user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : user.email}
                                </Text.Paragraph>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

