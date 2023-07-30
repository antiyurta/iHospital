import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, localMn } from '../../comman';
import { Button, ConfigProvider, Modal, Table } from 'antd';
import jwtInterceopter from '../../jwtInterceopter';

function SetOrder({ handleclick }) {
   const [isLoading, setIsLoading] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [packages, setPackages] = useState([]);
   const [meta, setMeta] = useState({});

   const getPackages = async () => {
      setIsLoading(true);
      await jwtInterceopter
         .get('service/setorder')
         .then((response) => {
            setPackages(response.data);
            setMeta(response.meta);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const dada = (value) => {
      console.log(value);
      const data = [{}];
      value.services?.map((service, index) => {
         console.log('========>', service);
         handleclick({
            id: service.serviceId,
            name: service.serviceName,
            price: service.servicePrice,
            types: {
               type: service.serviceType
            }
         });
      });
      // value.types = {
      //     type: 8
      // };
      // handleclick(value);
   };

   useEffect(() => {
      getPackages();
   }, []);

   return (
      <>
         <Button
            type="primary"
            onClick={() => {
               setIsOpenModal(true);
            }}
         >
            Сэт-Ордер
         </Button>
         <Modal
            title="SET ORDER"
            width={'80%'}
            open={isOpenModal}
            bodyStyle={{
               height: 600,
               maxHeight: 600,
               overflow: 'auto'
            }}
            onCancel={() => setIsOpenModal(false)}
         >
            <ConfigProvider locale={localMn()}>
               <Table
                  rowKey={'id'}
                  bordered
                  scroll={{
                     y: 400
                  }}
                  loading={isLoading}
                  columns={[]}
                  dataSource={[]}
               />
            </ConfigProvider>
         </Modal>
      </>
   );
}
export default SetOrder;
