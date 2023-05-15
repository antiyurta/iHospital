import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get } from '../../comman';

function SetOrder({ handleclick }) {
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [packages, setPackages] = useState([]);

   const getPackages = async () => {
      const response = await Get('service/setorder', token, config);
      setPackages(response.data);
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
      <div className="flex flex-row">
         <div className="w-full">
            <div className="table-responsive px-4 pb-4" id="style-8" style={{ maxHeight: '500px' }}>
               <Table className="ant-border-space" style={{ width: '100%' }}>
                  <thead className="ant-table-thead bg-slate-200">
                     <tr>
                        <th>Код</th>
                        <th>Тайлбар</th>
                     </tr>
                  </thead>
                  <tbody>
                     {packages.map((item, index) => {
                        return (
                           <tr key={index} onDoubleClick={() => dada(item)}>
                              <td>{item.code}</td>
                              <td>{item.description}</td>
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
            </div>
         </div>
      </div>
   );
}
export default SetOrder;
