import React from 'react';
//
const Home = React.lazy(() => import('./components/Home'));
const Privacy = React.lazy(() => import('./privacy/Index'));
//
const BeforeUrgentEnr = React.lazy(() => import('./components/pages/Urgent/BeforeUrgentEnr'));

const DocumentList = React.lazy(() => import('./components/pages/611/Lists'));
const DocumentUpload = React.lazy(() => import('./components/pages/611/Document/DocumentUpload'));
const DocForRoleList = React.lazy(() => import('./components/pages/611/DocForRoleList'));
const InsuranceDoctorList = React.lazy(() => import('./components/pages/Insurance/InsuranceDoctorList'));
const HicsCost = React.lazy(() => import('./components/pages/Insurance/HicsCost'));
const hicsList = React.lazy(() => import('./components/pages/Insurance/HicsLists'));
// mes zasal
const SurgeryList = React.lazy(() => import('./components/pages/Surgery/SurgeryList'));
const SurgeryDashboard = React.lazy(() => import('./components/pages/Surgery/Dashboard'));
// mes zasal
export const PublicRoutes = [
   {
      name: 'Privacy',
      mnName: 'Үйлчилгээний нөхцөл',
      path: '/privacy',
      element: Privacy
   }
];
export const ProtectedRoutes = [
   {
      name: 'hicsList',
      mnName: 'Даатгалын Үнэ',
      path: '/hicsList',
      element: hicsList
   },
   {
      name: 'hicsCost',
      mnName: 'Даатгалын Өртөг',
      path: '/hicsCost',
      element: HicsCost
   },
   {
      name: 'InsuranceDoctor',
      mnName: 'Даатгалын эмч',
      path: '/insuranceDoctor',
      element: InsuranceDoctorList
   },
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
   },
   {
      name: 'documentForm',
      mnName: 'Маягт Form',
      path: '/DocumentForm',
      element: DocumentUpload
   },
   {
      name: 'documentPermission',
      mnName: 'Маягт Permission',
      path: '/DocumentPermission',
      element: DocForRoleList
   },
   {
      name: 'surgeryList',
      mnName: 'Мэс засал жагсаалт',
      path: '/SurgeryList',
      element: SurgeryList
   },
   {
      name: 'surgeryDashboard',
      mnName: 'Мэс засал Самбар',
      path: '/SurgeryDashboard',
      element: SurgeryDashboard
   }
];
