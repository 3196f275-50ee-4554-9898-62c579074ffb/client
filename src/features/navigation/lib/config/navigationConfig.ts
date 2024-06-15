import { INavigation } from '@features/navigation';

export const NavigationConfig: INavigation[] = [
    { path: '/statistics', label: 'Статистика' },
    { path: '/upload', label: 'Мониторинг' },
    {
        path: '/works', label: 'Работы', children: [
            { path: '/works/planing', label: 'Планирование' },
            { path: '/works/reports', label: 'Отчеты' },
        ],
    },
];