//Явцын тэмдэглэл
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Input, Spin } from 'antd';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { SearchOutlined } from '@ant-design/icons';
import ReactToPrint from 'react-to-print';
//common
import RegularTree from '@Comman/RegularTree';
import { ListPatientInfo } from '@Comman/ListInjection';
import { diagnoseTypeInfo, formatNameForDoc, capitalizeFirstLetter } from '@Comman/common';
//context
import EmrContext from '@Features/EmrContext';
//redux
import { selectCurrentEmrData } from '@Features/emrReducer';
//api
import DocumentApi from '@ApiServices/organization/document';
import AppointmentApi from '@ApiServices/appointment/api-appointment-service';
//document
import * as InspectionDocumentIndex from './Document/Index';
const InspectionDocumentReturnById = InspectionDocumentIndex.ReturnById;

export default function ProgressNotes() {
   const { activeKey, setActiveKeyId, setKeys } = useContext(EmrContext);
   const printRef = useRef();
   const [searchValue, setSearchValue] = useState('');
   const incomeEMRData = useSelector(selectCurrentEmrData);
   const [spinner, setSpinner] = useState(false);
   const [spinerInfo, setSpinnerInfo] = useState(false);
   const [inspectionNote, setInspectionNote] = useState({});
   const [diagnosis, setDiagnosis] = useState([]);
   const [services, setServices] = useState([]);
   const [responseData, setResponseData] = useState([]);
   const [isSelected, setIsSelected] = useState(false);
   const [info, setInfo] = useState({});
   useEffect(() => {
      setSearchValue('');
      activeKey && getAppointmentById(activeKey);
   }, [activeKey]);

   const getPatientInspectionNotes = async () => {
      setSpinner(true);
      await AppointmentApi.getByPageFilter({
         params: {
            patientId: incomeEMRData.patientId
         }
      })
         .then(({ data: { response } }) => {
            setResponseData(response.data);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const getDocumentData = async (id) => {
      await DocumentApi.getById(id).then(
         ({
            data: {
               response: { response }
            }
         }) => {
            setInspectionNote({
               hospitalId: response.hospitalId,
               pain: JSON.stringify({
                  'Үндсэн зовиур': response.data?.q998
               }),
               inspection: JSON.stringify({
                  'Одоогийн өвчний түүх': response.data?.q999
               })
            });
         }
      );
   };
   const getAppointmentById = async (id) => {
      setSpinnerInfo(true);
      await AppointmentApi.getById(id)
         .then(({ data: { response } }) => {
            if (response.urgentInspectionNoteId) {
               getDocumentData(response.urgentInspectionNoteId);
            } else {
               setInspectionNote(response.inspectionNote);
            }
            setDiagnosis(response.patientDiagnosis);
            setServices([].concat(...response.serviceRequests?.map((request) => request.services)));
            setInfo({
               lastName: response.employee.lastName,
               firstName: response.employee.firstName,
               cabinetName: response.cabinet.name
            });
            const year = dayjs(response.createdAt).get('year');
            const month = dayjs(response.createdAt).get('month') + 1;
            const day = dayjs(response.createdAt).get('date');
            setKeys([`${year}`, `${month}-${day}`]);
         })
         .catch((error) => {
            console.log('error', error);
         })
         .finally(() => {
            setSpinnerInfo(false);
         });
   };
   const RenderHTML = ({ data }) => {
      if (data) {
         return Object.entries(JSON.parse(data)).map(([key, value], index) => {
            return (
               <div key={index} className="flex flex-wrap">
                  <p>{`${key}: ${value}`}</p>
               </div>
            );
         });
      }
   };
   const RenderHTMLDiagnose = ({ diagnosis }) => {
      return diagnosis?.map((diagnose, index) => {
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

   const treeData = useMemo(() => {
      const newTreeData = [];
      var data = [];
      if (searchValue != undefined) {
         data = responseData.filter((res) => res.cabinet?.name?.toLowerCase().includes(searchValue?.toLowerCase()));
      } else {
         data = responseData;
      }
      data?.map((item) => {
         const id = item.id;
         const year = dayjs(item?.createdAt).get('year');
         const month = dayjs(item?.createdAt).get('month') + 1;
         const day = dayjs(item?.createdAt).get('date');
         newTreeData[year] = newTreeData[year] || {};
         newTreeData[year][`${month}-${day}`] = newTreeData[year][`${month}-${day}`] || { children: [] };
         newTreeData[year][`${month}-${day}`].children.push({
            key: id,
            title: item.cabinet.name,
            isLeaf: true
         });
      });
      return newTreeData;
   }, [searchValue, responseData]);

   useEffect(() => {
      getPatientInspectionNotes();
   }, []);
   return (
      <div className="flex flex-row gap-2 h-full">
         <Spin wrapperClassName="min-w-[200px] emr-tabs" spinning={spinner}>
            <div className="flex flex-col gap-1 h-full">
               <div className="sticky-header">
                  <Input
                     prefix={<SearchOutlined />}
                     placeholder="Хайх"
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                  />
               </div>
               <RegularTree
                  data={treeData}
                  searchValue={searchValue}
                  getData={(item) => {
                     if (item.isLeaf) {
                        setIsSelected(true);
                     } else {
                        setIsSelected(false);
                     }
                     setActiveKeyId(item.key);
                  }}
               />
            </div>
         </Spin>
         <Spin wrapperClassName="emr-tabs w-full" spinning={spinerInfo}>
            {isSelected ? (
               <div className="flex flex-col gap-1">
                  <div className="flex flex-row justify-between p-3 bg-white rounded-md sticky-header">
                     <ListPatientInfo
                        patientData={{
                           lastName: info.lastName,
                           firstName: info.firstName
                        }}
                     />
                     <ReactToPrint
                        trigger={() => {
                           return <Button type="primary">Хэвлэх</Button>;
                        }}
                        content={() => printRef.current}
                     />
                  </div>
                  <div ref={printRef}>
                     <InspectionDocumentReturnById
                        hospitalId={inspectionNote?.hospitalId || 0}
                        body={
                           <div className="flex flex-col gap-1">
                              <table className="table table-bordered">
                                 <tbody>
                                    <tr>
                                       <td className="text-center">{`${capitalizeFirstLetter(
                                          info.cabinetName
                                       )} үзлэг`}</td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <RenderHTML data={inspectionNote?.pain} />
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <RenderHTML data={inspectionNote?.question} />
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <RenderHTML data={inspectionNote?.inspection} />
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <span>Онош:</span>
                                          <RenderHTMLDiagnose diagnosis={diagnosis} />
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <RenderHTML data={inspectionNote?.plan} />
                                          <RenderHTMLServices services={services} />
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <p className="text-center">
                                 Эмч: ........................
                                 {formatNameForDoc(info?.lastName, info?.firstName)}
                              </p>
                           </div>
                        }
                     />
                  </div>
               </div>
            ) : null}
         </Spin>
      </div>
   );
}
