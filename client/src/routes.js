import { lazy } from 'react';

const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/HomeView')),
   
  },
  {
    path: '/competitions',
    label: 'Competitions',
    exact: true,
    component: lazy(() => import('./views/CompetitionsView')),
   
  },
  {
    path: '/event/:id',
    label: 'Event',
    exact: true,
    component: lazy(() => import('./views/EventView')),
   
  },
  {
    path: '/gallery',
    label: 'gallery',
    exact: true,
    component: lazy(() => import('./views/GalleryView')),
   
  },
  {
    path: '/about',
    label: 'About',
    exact: true,
    component: lazy(() => import('./views/AboutView')),
   
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./views/ContactsView')),
   
  },
  {
    path: '/editor',
    label: 'Editor',
    exact: true,
    component: lazy(() => import('./views/EditorView')),
   
  },
];

export default routes;