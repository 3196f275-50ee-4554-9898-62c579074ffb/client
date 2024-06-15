import cls from './UserCard.module.scss';
import { Text } from '@shared/ui';
import { classNames, ColorEnum, SizeEnum, useAppSelector, WeightEnum } from '@shared/lib';
import { selectUser } from '@entities/user';
import { selectSidebar } from '@features/events';
import { useNavigate } from 'react-router-dom';

export const UserCard = () => {
    const user = useAppSelector(selectUser);
    const isOpen = useAppSelector(selectSidebar);
    const navigate = useNavigate()
    return (
        <div
            onClick={() => {
                navigate("/user")
            }}
            className={classNames(cls.wrapper, {
            [cls.hide]: !isOpen,
        }, [])}>
            <div className={cls.avatar}></div>
            <div className={cls.list}>
                <Text.Paragraph
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H4}
                    weight={WeightEnum.BOLD}
                >
                    {user && user.first_name} {user && user.last_name}
                </Text.Paragraph>
                <Text.Paragraph
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H5}
                >
                    {user && user.group_name}
                </Text.Paragraph>
            </div>
        </div>
    );
};

