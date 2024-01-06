//Явцын тэмдэглэл
import React, { useEffect, useState } from 'react';
import { Card, Modal, Result, Spin, Tree } from 'antd';
import Prescription from '../PrescriptionPrint';
import Magadlaga from '../MagadlagaPrint';
import jwtInterceopter from '../../../jwtInterceopter';
import DiagnoseTypes from '../../service/DiagnoseTypes.js';

const { DirectoryTree } = Tree;
export default function ProgressNotes({ Appointments }) {
   const [testData, setTestData] = useState([]);
   const RenderHTML = ({ data }) => {
      if (data) {
         return Object.entries(JSON.parse(data)).map(([key, value], index) => {
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
   const diagnoseTypeInfo = (diagnoseTypeId) => {
      const filteredData = DiagnoseTypes.filter((e) => e.value === diagnoseTypeId);
      return filteredData[0]?.label;
   };
   const RenderHTMLDiagnose = ({ diagnoses }) => {
      return diagnoses?.map((diagnose, index) => {
         return (
            <div key={index} className="flex">
               <p className="font-semibold mx-2">{diagnoseTypeInfo(diagnose.diagnoseType)}: </p>
               <p>{'[' + diagnose.diagnose?.code + ']' + diagnose.diagnose?.nameMn}</p>
            </div>
         );
      });
   };
   const RenderHTMLServices = ({ services }) => {
      return services?.map((service, index) => {
         return (
            <div key={index}>
               <p>{service.name}</p>
            </div>
         );
      });
   };
   const [spinner, setSpinner] = useState(false);
   const [spinerInfo, setSpinnerInfo] = useState(false);
   const [appointment, setAppointment] = useState({});
   const [printPrescription, setPrintPrescription] = useState([]);
   const [printMagadlaga, setPrintMagadlaga] = useState({});
   const [isOpenModalPrescription, setIsOpenModalPrescription] = useState(false);
   const [isOpenModalMagadlaga, setIsOpenModalMagadlaga] = useState(false);
   const onChangeTree = async (key, evnt) => {
      if (evnt?.node?.isLeaf) {
         setSpinnerInfo(true);
         await jwtInterceopter
            .get('appointment/show/' + key[0])
            .then((response) => {
               const data = response.data.response;
               setAppointment({
                  employee: data.employee?.lastName.substring(0, 1) + '.' + data.employee?.firstName,
                  name: data.cabinet?.name,
                  inspectionNotes: data.inspectionNotes,
                  diagnoses: data.patientDiagnosis,
                  services: data.serviceRequest?.services
               });
            })
            .catch((error) => {
               console.log(error);
            })
            .finally(() => {
               setSpinnerInfo(false);
            });
      }
   };
   useEffect(() => {
      setSpinner(true);
      if (Appointments) {
         var cloneAppointments = Appointments;
         var treeData = [];
         Object.entries(cloneAppointments).map(([key, value], _index) => {
            if (value?.length > 0) {
               var result = value?.reduce(function (r, a) {
                  r[a.createdAt.substring(5, 10)] = r[a.createdAt.substring(5, 10)] || [];
                  r[a.createdAt.substring(5, 10)].push(a);
                  return r;
               }, Object.create(null));
               cloneAppointments[`${key}`] = result;
            }
         });
         Object.entries(cloneAppointments).map(([key, value], index) => {
            var tree = {
               title: key,
               key: `${index}`
            };
            if (Object.keys(value).length > 0) {
               var children = [];
               Object.entries(value).map(([key2, value2], idx) => {
                  if (value2?.length > 0) {
                     const data = value2.map((item, _indx) => {
                        return {
                           title: item.cabinet?.name,
                           // key: `${index}-${idx}-${indx}`,
                           key: item.id,
                           isLeaf: true
                        };
                     });
                     children.push({
                        title: key2,
                        key: `${index} - ${idx}`,
                        children: data
                     });
                  } else {
                     children.push({
                        title: key2,
                        key: `${index} - ${idx}`
                     });
                  }
               });
               tree['children'] = children;
            }
            treeData.push(tree);
         });
         setTestData(treeData);
      }
      const timer = setTimeout(() => {
         setSpinner(false);
      }, 1000);
      return () => clearTimeout(timer);
   }, [Appointments]);
   return (
      <>
         <div>
            <div className="grid grid-cols-3 gap-3">
               <Spin wrapperClassName="h-[572px]" spinning={spinner}>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                     <div className="p-3">
                        <DirectoryTree
                           className="bg-transparent"
                           multiple
                           treeData={testData}
                           onSelect={(keys, info) => onChangeTree(keys, info)}
                        />
                     </div>
                  </div>
               </Spin>
               <div className="col-span-2">
                  <Spin wrapperClassName="h-[572px]" spinning={spinerInfo}>
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                        <div className="p-3">
                           {Object.entries(appointment)?.length > 0 ? (
                              <Card
                                 title={appointment?.employee + ' | ' + appointment?.name}
                                 className="header-solid max-h-max rounded-md"
                                 bodyStyle={{
                                    padding: 10
                                 }}
                              >
                                 <ul className="list-disc list-inside">
                                    <li>ЭМЧИЙН ҮЗЛЭГ</li>
                                    <RenderHTML data={appointment?.inspectionNotes[0]?.pain} />
                                    <RenderHTML data={appointment?.inspectionNotes[0]?.inspection} />
                                    <RenderHTML data={appointment?.inspectionNotes[0]?.question} />
                                    <RenderHTML data={appointment?.inspectionNotes[0]?.plan} />
                                    <li>ОНОШ</li>
                                    <RenderHTMLDiagnose diagnoses={appointment.diagnoses} />
                                    <li>ЗАХИАЛГА</li>
                                    <RenderHTMLServices services={appointment?.services} />
                                 </ul>
                              </Card>
                           ) : (
                              <Result title={'Хугацаа сонгох'} />
                           )}
                        </div>
                     </div>
                  </Spin>
               </div>
            </div>
         </div>
         <Modal
            open={isOpenModalPrescription}
            onCancel={() => setIsOpenModalPrescription(false)}
            footer={null}
            width={845}
            title={'CT-1'}
         >
            <Prescription props={printPrescription} />
         </Modal>
         <Modal
            open={isOpenModalMagadlaga}
            onCancel={() => setIsOpenModalMagadlaga(false)}
            footer={null}
            width={860}
            title={'Эмнэлэгийн магадлагаа'}
         >
            <Magadlaga data={printMagadlaga} />
         </Modal>
      </>
   );
}
