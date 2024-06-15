import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@shared/ui';
import Tab from '@assets/icons/tab.svg';
import { NavigationList } from '@features/navigation';
import { classNames, useAppDispatch, useAppSelector } from '@shared/lib';
import { selectSidebar, toggleSidebar } from '@features/events';
import { UserCard } from '@entities/user';

export const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(selectSidebar);
    return (
        <div className={classNames(cls.wrapper, {
            [cls.hide]: !isOpen,
        }, [])}>
            <UserCard />
            <NavigationList />
            <div className={classNames(cls.buttons, {
                [cls.hide]: !isOpen,
            }, [])}>
                <ThemeSwitcher />
                <div
                    onClick={() => {
                        dispatch(toggleSidebar());
                    }}
                    className={cls.tab}>
                    <Tab />
                </div>
            </div>
        </div>
    );
};

