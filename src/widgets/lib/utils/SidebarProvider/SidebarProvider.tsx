import cls from './SidebarProvider.module.scss';
import { ReactNode } from 'react';
import { Sidebar } from '@widgets/ui';
import { classNames, useAppSelector } from '@shared/lib';
import { selectSidebar } from '@features/events';

export const SidebarProvider = (
    {
        children,
    }: { children: ReactNode }) => {
    const isOpen = useAppSelector(selectSidebar);
    return (
        <div className={cls.wrapper}>
            <Sidebar />
            <div className={classNames(cls.body, {
                [cls.open]: isOpen,
            }, [])}>
                {children}
            </div>
        </div>
    );
};

