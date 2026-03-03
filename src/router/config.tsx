import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const GraphicNDesignPage = lazy(() => import('../pages/graphicndesign/page'));
const DienstenPage = lazy(() => import('../pages/diensten/page'));
const PortfolioPage = lazy(() => import('../pages/portfolio/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/graphicndesign',
    element: <GraphicNDesignPage />,
  },
  {
    path: '/diensten',
    element: <DienstenPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;