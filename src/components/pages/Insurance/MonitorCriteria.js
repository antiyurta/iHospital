import React, { useState } from 'react';
import { Button, Modal, Progress } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined, FileDoneOutlined } from '@ant-design/icons';
import { openNofi } from '../../comman';

//request service uud
import InsuranceSealService from '../../../services/healt-insurance/insuranceSeal';
//request service uud

function MonitorCriteria({ props }) {
   const { serviceId, serviceType } = props;
   const [data, setData] = useState({});
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const getData = async () => {
      setIsLoading(true);
      const conf = {
         params: {
            serviceId: serviceId,
            serviceType: serviceType
         }
      };
      await InsuranceSealService.getGPA(conf)
         .then((response) => {
            setIsOpenModal(true);
            setData(response.data.response);
         })
         .catch((error) => {
            console.log(error);
            if (error.response.data.status === 404) {
               openNofi('error', 'Алдаа', 'Хяналтын шалгуур тавьж эхлээгүй байна');
            }
         })
         .finally(() => setIsLoading(false));
   };
   return (
      <>
         <Button icon={<FileDoneOutlined />} onClick={() => getData()} loading={isLoading} />
         <Modal
            title="Шалгуур"
            open={isOpenModal}
            onCancel={() => {
               setIsOpenModal(false);
            }}
         >
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12
               }}
            >
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3 pr-5">
                     <Progress percent={data?.gpa} />
                  </div>
               </div>
               <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                  <div className="p-3">
                     <div
                        style={{
                           display: 'flex',
                           flexDirection: 'column',
                           gap: 12
                        }}
                     >
                        {data?.marks?.map((mark, index) => {
                           return (
                              <div
                                 key={index}
                                 style={{
                                    display: 'inline-flex',
                                    flexDirection: 'row',
                                    gap: 12
                                 }}
                              >
                                 <div style={{ display: 'flex', alignItems: 'center', width: 20, height: 20 }}>
                                    {mark.isFill ? (
                                       <CheckCircleOutlined style={{ fontSize: 18, color: 'green' }} />
                                    ) : (
                                       <ExclamationCircleOutlined style={{ fontSize: 18, color: 'red' }} />
                                    )}
                                 </div>
                                 <p className={mark.isFill ? 'line-through' : ''}>{mark.name}</p>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
}
export default MonitorCriteria;
