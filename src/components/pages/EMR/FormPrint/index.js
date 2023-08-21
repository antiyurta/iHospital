import { Button, Card, Divider } from 'antd';
import React, { useRef } from 'react';
import { PrinterOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import logo from '../../../../assets/logo/universal.png';
import moment from 'moment';
import DiagnoseTypes from '../../service/DiagnoseTypes.json';
export default function Index({ patientInfo, inspectionNote, diagnoses, services, employee }) {
   const printRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => printRef.current
   });
   const diagnoseTypeInfo = (diagnoseTypeId) => {
      const filteredData = DiagnoseTypes.filter((e) => e.value === diagnoseTypeId);
      return filteredData[0]?.label;
   };
   const RenderHTMLDiagnose = (diagnoses) => {
      return diagnoses?.map((diagnose, index) => {
         return (
            <div key={index} className="flex">
               <p className="font-semibold mx-2">{diagnoseTypeInfo(diagnose.diagnoseType)}: </p>
               <p>{'[' + diagnose.diagnose?.code + ']' + diagnose.diagnose?.nameMn}</p>
            </div>
         );
      });
   };
   const RenderHTMLServices = (services) => {
      return services?.map((service, index) => {
         return (
            <div key={index}>
               <p>{service.name}</p>
            </div>
         );
      });
   };
   const RenderHTML = (data) => {
      if (data.data) {
         return Object.entries(data?.data).map(([key, value], index) => {
            return (
               <div key={index} className="flex flex-wrap">
                  {Object.entries(value).map((elValues, index) => {
                     return (
                        <p className="pr-2" key={index}>
                           {elValues[0] + ': ' + elValues[1]}
                        </p>
                     );
                  })}
               </div>
            );
         });
      }
   };
   return (
      <div>
         <Card
            className="m-3"
            extra={
               <>
                  <Button
                     className="ml-2 p-1"
                     icon={<PrinterOutlined />}
                     // onClick={() => handlePrint()}
                  >
                     Магадлага
                  </Button>
                  <Button className="ml-2 p-1" icon={<PrinterOutlined />} onClick={() => handlePrint()}>
                     Маягт хэвлэх
                  </Button>
                  <Button className="ml-2 p-1" icon={<MedicineBoxOutlined />}>
                     Жор хэвлэх
                  </Button>
               </>
            }
         >
            <div ref={printRef} className="magadlagaa">
               <div className="flex flex-row">
                  <div className="basis-1/2">
                     <img style={{ width: '50%' }} src={logo} />
                  </div>
                  <div className="basis-1/2">
                     <p className="text-center">Эрүүл мэндийн сайдын 2019 оны 12 сарын 30-ны</p>
                     <p className="text-center">өдрийн А/611 дүгээр тушаалын арваннэгдүгээр хавсралт</p>
                     <p className="text-center font-bold">Эрүүл мэндын бүртгэлийн маягт CT-1</p>
                  </div>
               </div>
               <p className="text-center py-8" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                  {inspectionNote?.structures?.name}
               </p>
               <div className="flex flex-row">
                  <div className="basis-1/2">
                     <div className="flex">
                        <p className="font-semibold mr-2">Эцэг эхийн нэр:</p>
                        <p className="pr-3">{patientInfo.lastName}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">РД:</p>
                        <p className="pr-3">{patientInfo.registerNumber}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Хүйс:</p>
                        <p className="pr-3">{patientInfo.genderType}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Тогтмол хаяг:</p>
                        <p className="pr-3">{patientInfo.address}</p>
                     </div>
                  </div>
                  <div className="basis-1/2">
                     <div className="flex">
                        <p className="font-semibold mr-2">Нэр:</p>
                        <p className="pr-3">{patientInfo.firstName}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Нас:</p>
                        <p className="pr-3">{patientInfo.age}</p>
                     </div>
                     <div className="flex">
                        <p className="font-semibold mr-2">Утас:</p>
                        <p className="pr-3">{patientInfo.phoneNo}</p>
                     </div>
                  </div>
               </div>
               <Divider orientation="left" className="text-sm my-2">
                  Зовиурь
               </Divider>
               {inspectionNote && <RenderHTML data={JSON.parse(inspectionNote?.pain)} />}
               <Divider orientation="left" className="text-sm my-2">
                  Бодит үзлэг
               </Divider>
               {inspectionNote && <RenderHTML data={JSON.parse(inspectionNote?.inspection)} />}
               <Divider orientation="left" className="text-sm my-2">
                  Асуумж
               </Divider>
               {inspectionNote && <RenderHTML data={JSON.parse(inspectionNote?.question)} />}
               <Divider orientation="left" className="text-sm my-2">
                  Төлөвлөгөө
               </Divider>
               {inspectionNote && <RenderHTML data={JSON.parse(inspectionNote?.plan)} />}
               <Divider orientation="left" className="text-sm my-2">
                  Онош
               </Divider>
               {diagnoses && RenderHTMLDiagnose(diagnoses)}
               <Divider orientation="left" className="text-sm my-2">
                  Захиалга
               </Divider>
               {services && RenderHTMLServices(services)}
               <div className="text-right">
                  <div className="inline-flex">
                     <p className="font-semibold mr-2">Үзлэг хийсэн эмч:</p>
                     <p>{employee?.lastName?.substring(0, 1) + '. ' + employee?.firstName}</p>
                  </div>
               </div>
               <div className="text-right">
                  <div className="inline-flex">
                     <p className="font-semibold mr-2">Үзлэг хийсэн огноо:</p>
                     <p>{moment(inspectionNote?.createdAt).format('YYYY-MM-DD')}</p>
                  </div>
               </div>
               <div className="text-right">
                  <div className="inline-flex">
                     <p className="font-semibold mr-2">Хэвлэсэн огноо:</p>
                     <p>{moment().format('YYYY-MM-DD')}</p>
                  </div>
               </div>
            </div>
         </Card>
      </div>
   );
}
