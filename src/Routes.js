import React from 'react';
//
const Home = React.lazy(() => import('./components/Home'));
const Privacy = React.lazy(() => import('./privacy/Index'));
//
const BeforeUrgentEnr = React.lazy(() => import('./components/pages/Urgent/BeforeUrgentEnr'));

const DocumentList = React.lazy(() => import('./components/pages/611/Lists'));
//
const DocumentUpload = React.lazy(() => import('./components/pages/Document/index'));
// const DocumentUpload = React.lazy(() => import('./components/pages/611/Document/DocumentUpload'));
//
const DocForRoleList = React.lazy(() => import('./components/pages/611/DocForRoleList'));
const InsuranceDoctorList = React.lazy(() => import('./components/pages/Insurance/InsuranceDoctorList'));
const HicsCost = React.lazy(() => import('./components/pages/Insurance/HicsCost'));
const hicsList = React.lazy(() => import('./components/pages/Insurance/HicsLists'));
// mes zasal
const SurgeryList = React.lazy(() => import('./components/pages/Surgery/SurgeryList'));
const SurgeryDashboard = React.lazy(() => import('./components/pages/Surgery/Dashboard'));
const SurgeryListStatus = React.lazy(() => import('./components/pages/Surgery/SurgeryListStatus'));
// mes zasal
// tsag zasah
const AppointmentConfig = React.lazy(() => import('./components/pages/Appointment/ReConfig/Index'));
// tsag zasah

// tsagiin huwiar
const Schedule = React.lazy(() => import('./components/pages/Appointment/Schedule/Schedule'));
// tohooromj tsagin huwiar
const DeviceSchedule = React.lazy(() => import('./components/pages/Appointment/Device/DeviceSchedule'));
// tohooromj-> shinjilgee onshilgoo
const EquipmentList = React.lazy(() => import('./components/pages/Laboratory/EquipmentList'));
// hongololt
const Discount = React.lazy(() => import('./components/pages/reference/Discount'));
// bagts
const Packages = React.lazy(() => import('./components/pages/service/Packages'));
// bolzolt jor
const SetOrder = React.lazy(() => import('./components/pages/service/SetOrder'));
// tohorolmj xray ego ekg
const Device = React.lazy(() => import('./components/pages/DeviceAppointment/DeviceAppointment'));
// ekg jagsaalt
const BeforeEkgRequest = React.lazy(() => import('./components/pages/Ekg/BeforeEkgRequest'));
// odorin orlogoin tailan
const DailyIncome = React.lazy(() => import('./components/pages/EPayment/DailyIncome/DailyIncome'));
// uzlegin minut
const Settings = React.lazy(() => import('./components/pages/reference/Settings'));
// tasag alba negj
const Structure = React.lazy(() => import('./components/pages/Organization/Structure'));
// alban tushaal
const Position = React.lazy(() => import('./components/pages/Organization/Position'));
// ajiltan
const DemoEmployee = React.lazy(() => import('./components/pages/Organization/DemoEmployee'));
// dawhar
const Floor = React.lazy(() => import('./components/pages/Organization/Floor'));
// block
const Block = React.lazy(() => import('./components/pages/Organization/Block'));
// oroo
const Room = React.lazy(() => import('./components/pages/Organization/Room'));
// or
const Bed = React.lazy(() => import('./components/pages/Organization/Bed'));
// tolbor tootsoo
const PaymentCloud = React.lazy(() => import('./components/pages/EPayment/Payments'));
// emchin tsag
const DoctorAppointment = React.lazy(() => import('./components/pages/Appointment/DoctorAppointment'));
// owchton list
const Patient = React.lazy(() => import('./components/pages/PMS/Patient'));
// ref uls aimag sum duureg
const Country = React.lazy(() => import('./components/pages/reference/CountryDictionary'));
// zereg
const Degree = React.lazy(() => import('./components/pages/reference/Degree'));
// examination list
const Examination = React.lazy(() => import('./components/pages/service/Examination'));
// onshilgoo list
const Xray = React.lazy(() => import('./components/pages/service/Xray'));
// ICD onosh
const Diagnoses = React.lazy(() => import('./components/pages/service/Diagnoses'));
// emchilge list
const Treatment = React.lazy(() => import('./components/pages/service/Treatment'));
// halgaa list
const Surgury = React.lazy(() => import('./components/pages/service/Surgury'));
// emr list
const BeforeAmbulatoryList = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryList'));
// emiin bus gasaalt
const TreatmentRequest = React.lazy(() => import('./components/pages/treatment/BeforeTreatmentRequest'));
// Оношилгооны жагсаалт
const XrayRequest = React.lazy(() => import('./components/pages/Xray/XrayRequest'));
//EXO жагсаалт
const ExoRequest = React.lazy(() => import('./components/pages/Exo/ExoRequest'));
// enr list
const BeforeAmbulatoryListEnr = React.lazy(() => import('./components/pages/BeforeAmbulatory/BeforeAmbulatoryListEnr'));
//Оношилгооны өмнөх жагсаалт
const BeforeXrayRequest = React.lazy(() => import('./components/pages/Xray/BeforeXrayRequest'));
//ornii manegment
const MainBed = React.lazy(() => import('./components/pages/Bed/MainBed'));
// lobarotory
const RequestAnalys = React.lazy(() => import('./components/pages/Laboratory/RequestAnalys'));
// hynah sambar
const Dashboard = React.lazy(() => import('./components/pages/Organization/Dashboard'));
export const PublicRoutes = [
   {
      name: 'Privacy',
      mnName: 'Үйлчилгээний нөхцөл',
      url: '/privacy',
      element: Privacy
   }
];
export const ProtectedRoutes = [
   {
      name: 'dashboard',
      mnName: 'Хянах самбар',
      url: '/dashboard',
      element: Dashboard
   },
   {
      name: 'request_analys',
      mnName: 'Лаборатори',
      url: '/request_analys',
      element: RequestAnalys
   },
   {
      name: 'bed_management',
      mnName: 'Орны менежмент',
      url: '/bed_management/*',
      element: MainBed
   },
   {
      name: 'beforeXrayList',
      mnName: 'Оношилгооны өмнөх жагсаалт',
      url: '/beforeXrayList',
      element: BeforeXrayRequest
   },
   {
      name: 'enrAmbulatoryList',
      mnName: 'Үзлэгийн өмнөх жагсаалт',
      url: '/enrAmbulatoryList',
      element: BeforeAmbulatoryListEnr
   },
   {
      name: 'exoList',
      mnName: 'EXO жагсаалт',
      url: '/exoList',
      element: ExoRequest
   },
   {
      name: 'xrayList',
      mnName: 'Оношилгооны жагсаалт',
      url: '/xrayList',
      element: XrayRequest
   },
   {
      name: 'treatmentList',
      mnName: 'Эмийн бус эмчилгээ жагсаалт',
      url: '/treatmentList',
      element: TreatmentRequest
   },
   {
      name: 'ambulatoryList',
      mnName: 'Үзлэгийн жагсаалт',
      url: '/ambulatoryList',
      element: BeforeAmbulatoryList
   },
   {
      name: 'surgury',
      mnName: 'Мэс засал/Үйлчилгээ жагсаалт/',
      url: '/surgury',
      element: Surgury
   },
   {
      name: 'treatment',
      mnName: 'Эмчилгээ/Үйлчилгээ жагсаалт/',
      url: '/treatment',
      element: Treatment
   },
   {
      name: 'diagnoses',
      mnName: 'ICD Онош',
      url: '/diagnoses',
      element: Diagnoses
   },
   {
      name: 'xray',
      mnName: 'Оношилгоо/Үйлчилгээ жагсаалт/',
      url: '/xray',
      element: Xray
   },
   {
      name: 'examination',
      mnName: 'Шинжилгээ/Үйлчилгээ жагсаалт/',
      url: '/examination',
      element: Examination
   },
   {
      name: 'degree',
      mnName: 'Зэрэг',
      url: '/degree',
      element: Degree
   },
   {
      name: 'country',
      mnName: 'Улс, Аймаг,Сум',
      url: '/country',
      element: Country
   },
   {
      name: 'patient',
      mnName: 'Өвчтөний жагсаалт',
      url: '/patient',
      element: Patient
   },
   {
      name: 'doctorAppointment',
      mnName: 'Эмчийн цаг захиалга',
      url: '/doctorAppointment',
      element: DoctorAppointment
   },
   {
      name: 'payment',
      mnName: 'Төлбөр тооцоо',
      url: '/payment',
      element: PaymentCloud
   },
   {
      name: 'bed',
      mnName: 'Ор',
      url: '/bed',
      element: Bed
   },
   {
      name: 'room',
      mnName: 'Өрөө',
      url: '/room',
      element: Room
   },
   {
      name: 'Block',
      mnName: 'Блок',
      url: '/block',
      element: Block
   },
   {
      name: 'floor',
      mnName: 'Давхар',
      url: '/floor',
      element: Floor
   },
   {
      name: 'employee',
      mnName: 'Ажилтан',
      url: '/employee',
      element: DemoEmployee
   },
   {
      name: 'position',
      mnName: 'Албан тушаал',
      url: '/position',
      element: Position
   },
   {
      name: 'structure',
      mnName: 'Тасаг/Кабанет/Харьяалал',
      url: '/structure',
      element: Structure
   },
   {
      name: 'schedule',
      mnName: 'Цагийн хуваарь',
      url: '/schedule',
      element: Schedule
   },
   {
      name: 'deviceSchedule',
      mnName: 'Төхөөрөмжийн цаг оруулах',
      url: '/deviceSchedule',
      element: DeviceSchedule
   },
   {
      name: 'equipments',
      mnName: 'Төхөөрөмж/шинжилгээ/',
      url: '/equipments',
      element: EquipmentList
   },
   {
      name: 'discount',
      mnName: 'Хөнгөлөлт',
      url: '/discount',
      element: Discount
   },
   {
      name: 'packages',
      mnName: 'Багцийн тохиргоо',
      url: '/packages',
      element: Packages
   },
   {
      name: 'Set-Order',
      mnName: 'Болзолт жор',
      url: '/SetOrders',
      element: SetOrder
   },
   {
      name: 'device',
      mnName: 'Төхөөрөмж/Оншилгоо/',
      url: '/device',
      element: Device
   },
   {
      name: 'beforeEkgList',
      mnName: 'ЭКГ жагсаалт',
      url: '/beforeEkgList',
      element: BeforeEkgRequest
   },
   {
      name: 'dailyIncome',
      mnName: 'Өдрийн орлогын тайлан',
      url: '/dailyIncome',
      element: DailyIncome
   },
   {
      name: 'settings',
      mnName: 'Үзлэгийн минут',
      url: '/settings',
      element: Settings
   },
   {
      name: 'hicsList',
      mnName: 'Даатгалын Үнэ',
      url: '/hicsList',
      element: hicsList
   },
   {
      name: 'hicsCost',
      mnName: 'Даатгалын Өртөг',
      url: '/hicsCost',
      element: HicsCost
   },
   {
      name: 'InsuranceDoctor',
      mnName: 'Даатгалын эмч',
      url: '/insuranceDoctor',
      element: InsuranceDoctorList
   },
   {
      name: 'UrgentEnr',
      mnName: 'Яаралтай сувилагч',
      url: '/urgentEnr',
      element: BeforeUrgentEnr
   },
   {
      name: 'documentList',
      mnName: 'Маягт жагсаалт',
      url: '/DocumentList',
      element: DocumentList
   },
   {
      name: 'documentForm',
      mnName: 'Маягт Form',
      url: '/DocumentForm',
      element: DocumentUpload
   },
   {
      name: 'documentPermission',
      mnName: 'Маягт Permission',
      url: '/DocumentPermission',
      element: DocForRoleList
   },
   {
      name: 'surgeryList',
      mnName: 'Мэс засал жагсаалт',
      url: '/SurgeryList',
      element: SurgeryList
   },
   {
      name: 'surgeryDashboard',
      mnName: 'Мэс засал Самбар',
      url: '/SurgeryDashboard',
      element: SurgeryDashboard
   },
   {
      name: 'surgeryDashboard',
      mnName: 'Мэс засал Дарга',
      url: '/SurgeryListStatus',
      element: SurgeryListStatus
   },
   {
      name: 'AppointmentConfig',
      mnName: 'Цаг захиалга засах',
      url: '/AppointmentConfig',
      element: AppointmentConfig
   }
];
