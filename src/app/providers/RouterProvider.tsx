import { createBrowserRouter, redirect } from 'react-router-dom';
import {
    LoginPage,
    MainPage,
    MyPage,
    PlaningPage,
    PlanPage,
    RegisterPage,
    ReportsPage,
    StatisticsPage,
    UploadPage,
} from '@pages/ui';
import { AuthProvider } from '@app/providers/AuthProvider.tsx';
import { SidebarProvider } from '@widgets/lib/utils/SidebarProvider';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider />,
        children: [
            {
                index: true,
                element: <SidebarProvider><MainPage /></SidebarProvider>,
            },
            {
                path: 'upload',
                element: <SidebarProvider><UploadPage /></SidebarProvider>,
            },
            {
                path: 'user',
                element: <SidebarProvider><MyPage /></SidebarProvider>,
            },
            {
                path: '/statistics',
                element: <SidebarProvider><StatisticsPage /></SidebarProvider>,
            },
            {
                path: 'works',
                children: [
                    {
                        index: true,
                        loader: async () => redirect('/works/planing'),
                    },
                    {
                        path: 'planing',
                        element: <SidebarProvider><PlaningPage /></SidebarProvider>,
                    },
                    {
                        path: 'planing/:id',
                        element: <SidebarProvider><PlanPage /></SidebarProvider>,
                    },
                    {
                        path: 'reports',
                        element: <SidebarProvider><ReportsPage /></SidebarProvider>,
                    },
                ],
            },
        ],
    },
    {
        path: '/auth',
        children: [
            {
                index: true,
                loader: async () => redirect('/auth/login'),
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);
