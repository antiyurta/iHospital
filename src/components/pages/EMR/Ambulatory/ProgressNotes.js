//Явцын тэмдэглэл
import React, { useEffect, useState } from 'react';
import { Modal, Result, Spin, Tree } from 'antd';
import male from '../../../../assets/images/maleAvatar.svg';
import Prescription from '../PrescriptionPrint';
import Magadlaga from '../MagadlagaPrint';
import DiagnoseTypes from '../../service/DiagnoseTypes.js';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../features/emrReducer';
//
import AppointmentService from '../../../../services/appointment/api-appointment-service';
import dayjs from 'dayjs';

export default function ProgressNotes() {
   const incomeEMRData = useSelector(selectCurrentEmrData);
   const [spinner, setSpinner] = useState(false);
   const [spinerInfo, setSpinnerInfo] = useState(false);
   const [inspectionNote, setInspectionNote] = useState({});
   const [diagnosis, setDiagnosis] = useState([]);
   const [services, setServices] = useState([]);
   const [treeData, setTreeData] = useState([]);
   const [isSelected, setIsSelected] = useState(false);
   const [info, setInfo] = useState({});
   const renderTreeNodes = (data) => {
      return Object.keys(data).map((key) => {
         if (Array.isArray(data[key])) {
            return data[key].map((leaf) => <Tree.TreeNode key={leaf.key} title={leaf.title} isLeaf={leaf.isLeaf} />);
         }
         return (
            <Tree.TreeNode key={key} title={key}>
               {renderTreeNodes(data[key])}
            </Tree.TreeNode>
         );
      });
   };
   const getPatientInspectionNotes = async () => {
      setSpinner(true);
      await AppointmentService.getByPageFilter({
         params: {
            patientId: incomeEMRData.patientId
         }
      })
         .then(({ data: { response } }) => {
            const treeData = [];
            const data = response.data;
            data?.map((item) => {
               const id = item.id;
               const year = dayjs(item?.createdAt).get('year');
               const month = dayjs(item?.createdAt).get('month') + 1;
               const day = dayjs(item?.createdAt).get('date');
               treeData[year] = treeData[year] || {};
               treeData[year][`${month}-${day}`] = treeData[year][`${month}-${day}`] || { children: [] };
               treeData[year][`${month}-${day}`].children.push({
                  key: id,
                  title: item.cabinet.name,
                  isLeaf: true
               });
            });
            setTreeData(treeData);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const getAppointmentById = async (id) => {
      setSpinnerInfo(true);
      await AppointmentService.getById(id)
         .then(({ data: { response } }) => {
            setInspectionNote(response.inspectionNote);
            setDiagnosis(response.patientDiagnosis);
            setServices([].concat(...response.serviceRequests?.map((request) => request.services)));
            setInfo({
               lastName: response.employee.lastName,
               firstName: response.employee.firstName,
               cabinetName: response.cabinet.name
            });
         })
         .finally(() => {
            setIsSelected(true);
            setSpinnerInfo(false);
         });
   };
   const RenderHTML = ({ data }) => {
      if (data) {
         console.log(JSON.parse(data));
         return Object.entries(JSON.parse(data)).map(([key, value], index) => {
            return (
               <div key={index} className="flex flex-wrap">
                  <p>{`${key}: ${value}`}</p>
               </div>
            );
         });
      }
   };
   const diagnoseTypeInfo = (diagnoseTypeId) => {
      const filteredData = DiagnoseTypes.filter((e) => e.value === diagnoseTypeId);
      return filteredData[0]?.label;
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
   const [printPrescription, setPrintPrescription] = useState([]);
   const [printMagadlaga, setPrintMagadlaga] = useState({});
   const [isOpenModalPrescription, setIsOpenModalPrescription] = useState(false);
   const [isOpenModalMagadlaga, setIsOpenModalMagadlaga] = useState(false);
   const onChangeTree = async (info) => {
      if (info.selected && info.node.isLeaf) {
         getAppointmentById(Number(info.node.key));
      } else {
         setIsSelected(false);
      }
   };
   useEffect(() => {
      getPatientInspectionNotes();
   }, []);
   return (
      <>
         <div>
            <div className="grid grid-cols-3 gap-1">
               <Spin wrapperClassName="h-[500px]" spinning={spinner}>
                  <div className="rounded-md border-1 border-[#C9CDD4] bg-white w-full inline-block overflow-auto h-full">
                     <Tree showLine showIcon onSelect={(_, info) => onChangeTree(info)}>
                        {renderTreeNodes(treeData)}
                     </Tree>
                  </div>
               </Spin>
               <div className="col-span-2">
                  <Spin wrapperClassName="h-[500px]" spinning={spinerInfo}>
                     <div className="rounded-md border-1 border-[#C9CDD4] bg-white w-full inline-block overflow-auto h-full">
                        <div className="p-1">
                           {isSelected ? (
                              <div className="flex flex-col gap-1 p-1">
                                 <div className="flex flex-row gap-2">
                                    <img src={male} width={70} alt="d" />
                                    <div className="flex flex-col gap-1">
                                       <p className="text-xs text-[#86909C]">
                                          <span>Овог:</span>
                                          <span className="text-black">{info.lastName}</span>
                                       </p>
                                       <p className="text-xs text-[#86909C]">
                                          <span>Нэр:</span>
                                          <span className="text-black">{info.firstName}</span>
                                       </p>
                                       <p className="text-xs text-[#86909C]">
                                          <span>Кабинет:</span>
                                          <span className="text-black">{info.cabinetName}</span>
                                       </p>
                                    </div>
                                 </div>
                                 <div className="regular-divider">Зовиур</div>
                                 <RenderHTML data={inspectionNote?.pain} />
                                 <div className="regular-divider">Асуумж</div>
                                 <RenderHTML data={inspectionNote?.question} />
                                 <div className="regular-divider">Бодит үзлэг</div>
                                 <RenderHTML data={inspectionNote?.inspection} />
                                 <div className="regular-divider">Онош</div>
                                 <RenderHTMLDiagnose diagnosis={diagnosis} />
                                 <div className="regular-divider">Төлөвлөгөө</div>
                                 <RenderHTML data={inspectionNote?.plan} />
                                 <RenderHTMLServices services={services} />
                              </div>
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
