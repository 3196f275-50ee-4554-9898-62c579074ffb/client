import cls from './NavigationList.module.scss';
import { NavigationConfig, NavigationItem } from '@features/navigation';
import { classNames, useAppSelector } from '@shared/lib';
import { selectSidebar } from '@features/events';
import { Text } from '@shared/ui';

export const NavigationList = () => {
    const isOpen = useAppSelector(selectSidebar);
    return (
        <ul className={classNames(cls.list, {
            [cls.hide]: !isOpen,
        }, [])}>
            {NavigationConfig.map((item) => (
                <li
                    key={item.path}
                    className={cls.listItem}
                >
                    <NavigationItem
                        item={item}
                    />
                </li>
            ))}
        </ul>
    );
};

