import { Tree, Image, Modal, Spin, Card, Result } from 'antd';
import React, { useEffect, useState } from 'react';
import { dataToTree } from '../../comman';
import FormXray from './FormPrint/Xray';
import XrayImg from './FormPrint/XrayImg';
import jwtInterceopter from '../../jwtInterceopter';
const { DirectoryTree } = Tree;
function Xrays({ PatientId }) {
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
   useEffect(() => {
      getXrays();
   }, []);
   return (
      <>
         <div className="grid grid-cols-3 gap-3">
            <Spin wrapperClassName="h-[240px]" spinning={spinner}>
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
               <Spin wrapperClassName="h-[240px]" spinning={spinerInfo}>
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
}
export default Xrays;
