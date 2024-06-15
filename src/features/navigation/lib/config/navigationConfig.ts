import { INavigation } from '@features/navigation';

export const NavigationConfig: INavigation[] = [
    { path: '/statistics', label: 'Статистика' },
    { path: '/project', label: 'Проект' },
    { path: '/monitoring', label: 'Мониторинг' },
    { path: '/technique', label: 'Техника' },
    {
        path: '/works', label: 'Работы', children: [
            { path: '/works/planing', label: 'Планирование' },
            { path: '/works/reports', label: 'Отчеты' },
        ],
    },
];