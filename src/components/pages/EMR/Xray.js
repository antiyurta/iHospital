import { Tree, Image, Modal, Spin, Card, Result, Tabs, Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { dataToTree } from '../../comman';
import FormXray from './FormPrint/Xray';
import XrayImg from './FormPrint/XrayImg';
import jwtInterceopter from '../../jwtInterceopter';

//
import * as XrayDocumentIndex from '../Xray/Document/Index';
import { selectCurrentHospitalId } from '../../../features/authReducer';
import { useSelector } from 'react-redux';
//
import PmsPatientServices from '../../../services/pms/patient';
import DocumentsFormPatientServices from '../../../services/organization/document';
import ReactToPrint from 'react-to-print';
//

const { DirectoryTree } = Tree;
function Xrays({ PatientId }) {
   const [patient, setPatient] = useState({});
   const hospitalId = useSelector(selectCurrentHospitalId);
   const [testData, setTestData] = useState([]);
   const [spinerInfo, setSpinnerInfo] = useState(false);
   const [appointment, setAppointment] = useState([]);
   const [spinner, setSpinner] = useState(false);
   const [printData, setPrintData] = useState({});
   const [printImg, setPrintImg] = useState([]);
   const [isOpenModalImg, setIsOpenModalImg] = useState(false);
   const [isSizeType, setIsSizeType] = useState(Number);
   const [isOpenModalForm, setIsOpenModalForm] = useState(false);
   const getPhoto = async (id) => {
      return await jwtInterceopter
         .get('local-files/' + id, {
            responseType: 'blob'
         })
         .then((response) => {
            const file = new Blob([response.data], { type: response.type });
            const fileURL = URL.createObjectURL(file);
            return fileURL;
         });
   };
   const RenderNotesDetail = ({ data }) => {
      if (data) {
         return Object.entries(JSON.parse(data)).map(([key, value], index) => {
            return (
               <div key={index} className="inline-flex">
                  <p className="font-semibold mx-2">{key}: </p>
                  {Object.values(value).map((elValues, index) => {
                     return typeof elValues === 'string' ? (
                        <p key={index}>{elValues}</p>
                     ) : (
                        <div key={index}>
                           {elValues.map((el, index) => {
                              return <p key={index}>{el}</p>;
                           })}
                        </div>
                     );
                  })}
               </div>
            );
         });
      }
      return;
   };
   const getXrays = async () => {
      setSpinner(true);
      await jwtInterceopter
         .get('service/xrayRequest', {
            params: { patientId: PatientId, deviceType: 0 }
         })
         .then((response) => {
            const data = dataToTree(response.data.response.data);
            setTestData(data);
         })
         .finally(() => {
            setSpinner(false);
         });
   };
   const onChangeTree = async (key, evnt) => {
      if (evnt?.node?.isLeaf) {
         setSpinnerInfo(true);
         await jwtInterceopter
            .get('service/xrayRequest/' + key[0])
            .then(async (response) => {
               const data = response.data.response;
               const photos = await Promise.all(
                  data.photos?.map(async (photo) => {
                     const src = await getPhoto(photo.id);
                     return {
                        url: src
                     };
                  })
               );
               return {
                  employee: data.employee?.lastName.substring(0, 1) + '.' + data.employee?.firstName,
                  inspectionNotes: data.inspectionNotes,
                  photos: photos
               };
            })
            .then((item) => {
               setAppointment(item);
            })
            .catch((error) => {
               console.log(error);
            })
            .finally(() => {
               setSpinnerInfo(false);
            });
      }
   };
   const getByIdPatient = async () => {
      await PmsPatientServices.getById(PatientId).then((response) => {
         setPatient(response.data?.response);
      });
   };
   useEffect(() => {
      getXrays();
   }, []);
   useEffect(() => {
      getByIdPatient();
   }, [PatientId]);

   //rentgen
   const Rentgen = () => (
      <>
         <div className="grid grid-cols-3 gap-3">
            <Spin wrapperClassName="h-[440px]" spinning={spinner}>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                  <div className="p-3">
                     <DirectoryTree
                        className="bg-white"
                        multiple
                        treeData={testData}
                        onSelect={(keys, info) => onChangeTree(keys, info)}
                     />
                  </div>
               </div>
            </Spin>
            <div className="col-span-2">
               <Spin wrapperClassName="h-[440px]" spinning={spinerInfo}>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                     <div className="p-3">
                        {Object.entries(appointment)?.length > 0 ? (
                           <Card
                              title={appointment?.employee}
                              className="header-solid max-h-max rounded-md"
                              bodyStyle={{
                                 padding: 10
                              }}
                           >
                              <ul className="list-disc list-inside">
                                 <li>Зураг</li>
                                 <div className="grid grid-cols-2 gap-1">
                                    {appointment.photos?.map((photo, index) => {
                                       return <Image key={index} src={photo.url} />;
                                    })}
                                 </div>
                                 <li>ЭМЧИЙН ҮЗЛЭГ</li>
                                 <RenderNotesDetail data={appointment?.inspectionNotes?.conclusion} />
                                 <RenderNotesDetail data={appointment?.inspectionNotes?.advice} />
                              </ul>
                           </Card>
                        ) : (
                           <Result />
                        )}
                     </div>
                  </div>
               </Spin>
            </div>
         </div>
         <Modal
            open={isOpenModalForm}
            onCancel={() => setIsOpenModalForm(false)}
            footer={null}
            // width={"auto"}
            title={'Дүгнэлт хэвлэх'}
         >
            <FormXray printData={printData} />
         </Modal>
         <Modal open={isOpenModalImg} onCancel={() => setIsOpenModalImg(false)} width="60%" footer={null}>
            <XrayImg printImage={printImg} type={isSizeType} />
         </Modal>
      </>
   );
   //EXO
   const Exo = () => {
      const printRef = useRef();
      const [spinner, setSpinner] = useState(false);
      const [spinerInfo, setSpinnerInfo] = useState(false);
      const [document, setDocument] = useState();
      const [test, setTest] = useState({});
      const getDocumentData = async (id) => {
         setSpinnerInfo(true);
         await DocumentsFormPatientServices.getById(id)
            .then((response) => {
               setDocument(response.data.response.response);
            })
            .finally(() => {
               setSpinnerInfo(false);
            });
      };
      const getExos = async () => {
         setSpinner(true);
         await jwtInterceopter
            .get('document-middleware', {
               params: {
                  patientId: PatientId,
                  type: 'XRAY'
               }
            })
            .then((response) => {
               const treeData = [];
               const data = response.data.response;
               data?.map((item) => {
                  const id = item._id;
                  const date = new Date(item.createdAt);
                  const year = date.getFullYear().toString();
                  const month = (date.getMonth() + 1).toString(); // Months are zero-indexed in JavaScript
                  const day = date.getDate().toString();
                  const name = XrayDocumentIndex.ReturnByIdToName(hospitalId, item.documentId);

                  treeData[year] = treeData[year] || {};
                  treeData[year][month] = treeData[year][month] || {};
                  treeData[year][month][day] = treeData[year][month][day] || { children: [] };
                  treeData[year][month][day].children.push({
                     key: id,
                     title: name,
                     isLeaf: true
                  });
               });
               setTest(treeData);
            })
            .finally(() => {
               setSpinner(false);
            });
      };
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
      useEffect(() => {
         getExos();
      }, []);
      return (
         <div>
            <div className="grid grid-cols-3 gap-3">
               <Spin wrapperClassName="h-[440px]" spinning={spinner}>
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                     <div className="p-3">
                        <DirectoryTree
                           className="bg-transparent"
                           onSelect={(selectedKeys, info) => {
                              if (info?.node?.isLeaf) {
                                 getDocumentData(selectedKeys?.[0]);
                              }
                           }}
                        >
                           {renderTreeNodes(test)}
                        </DirectoryTree>
                     </div>
                  </div>
               </Spin>
               <div className="col-span-2">
                  <Spin wrapperClassName="h-[440px]" spinning={spinerInfo}>
                     <div className="rounded-md bg-[#F3F4F6] w-full inline-block overflow-auto h-full">
                        <div className="p-3 m-3 bg-white">
                           {document ? (
                              <div>
                                 <ReactToPrint
                                    trigger={() => {
                                       return <Button type="primary">Хэвлэх</Button>;
                                    }}
                                    content={() => printRef.current}
                                 />
                                 <div ref={printRef}>{XrayDocumentIndex.ReturnById(hospitalId, document, patient)}</div>
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
      );
   };

   return (
      <>
         <Tabs
            type="card"
            destroyInactiveTabPane
            items={[
               {
                  key: 0,
                  label: 'Рентген',
                  children: <Rentgen />
               },
               {
                  key: 1,
                  label: 'EXO',
                  children: <Exo />
               }
            ]}
         />
      </>
   );
}
export default Xrays;
