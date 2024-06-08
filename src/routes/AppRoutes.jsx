import  { lazy, Suspense } from 'react';
import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';

const Dash = lazy(() => import('../pages/Dash'));


export default function AppRoutes() {
  const routes = useRoutes([
    {
      element: (
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        { element: <Dash />, index: true },
        { path: 'users', element: <Dash /> },
        { path: 'posts', element: <Dash /> },
        { path: 'request', element: <Dash /> },
        { path: 'editor', element: <Dash /> },
        { path: 'charts', element: <Dash /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
      path: '404',
      element: <Suspense fallback={<div>Loading...</div>}><Dash /></Suspense>,
    },
  ]);

  return routes;
}
