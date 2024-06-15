import { createBrowserRouter, redirect } from 'react-router-dom';
import { LoginPage, MainPage, MyPage, PlaningPage, RegisterPage, ReportsPage, UploadPage } from '@pages/ui';
import { AuthProvider } from '@app/providers/AuthProvider.tsx';
import { SidebarProvider } from '@widgets/lib/utils/SidebarProvider';
import { ProjectDetailsPage, ProjectsManager, ProjectsPage } from '@entities/project';

const projectsManager = new ProjectsManager();

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
                        path: 'reports',
                        element: <SidebarProvider><ReportsPage /></SidebarProvider>,
                    },
                ],
            },
            {
                path: 'project',
                element: <ProjectsPage projectsManager={projectsManager} />,
            },
            {
                path: 'project/:id',
                element: <ProjectDetailsPage projectsManager={projectsManager} />,
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
