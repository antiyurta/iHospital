import React from 'react';
const Home = React.lazy(() => import('./components/Home'));

const BeforeUrgentEnr = React.lazy(() => import('./components/pages/Urgent/BeforeUrgentEnr'));

const DocumentList = React.lazy(() => import('./components/pages/611/Lists'));

export const PublicRoutes = [
   {
      name: 'Home',
      mnName: 'Нүүр',
      path: '/asdasdsad',
      element: Home
   }
];
export const ProtectedRoutes = [
   {
      name: 'UrgentEnr',
      mnName: 'Яаралтай сувилагч',
      path: '/urgentEnr',
      element: BeforeUrgentEnr
   },
   {
      name: 'documentList',
      mnName: 'Маягт жагсаалт',
      path: '/DocumentList',
      element: DocumentList
   }
];
