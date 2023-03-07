import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
import { Collapse, Spin } from 'antd';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
const { Panel } = Collapse;
function Anemiz() {
   const location = useLocation();
   const token = useSelector(selectCurrentToken);
   const [anemis, setAnemis] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const getAnemiz = async () => {
      setIsLoading(true);
      const conf = {
         headers: {},
         params: {
            patientId: location?.state?.patientId
         }
      };
      const response = await Get('inpatient/story', token, conf);
      if (response.data.length > 0) {
         var result = response.data.reduce(function (r, a) {
            //Оноор бүлэглэх
            r[a.createdAt.substring(0, 4)] =
               r[a.createdAt.substring(0, 4)] || [];
            r[a.createdAt.substring(0, 4)].push(a);
            return r;
         }, Object.create(null));
         setAnemis(result);
      } else {
         setAnemis([]);
      }
      setIsLoading(false);
   };
   useEffect(() => {
      getAnemiz();
   }, [location]);
   return (
      <Spin spinning={isLoading} tip="Уншиж байна...">
         <Collapse
            collapsible="header"
            expandIcon={({ isActive }) => {
               return isActive ? (
                  <FolderOpenOutlined style={{ fontSize: '24px' }} />
               ) : (
                  <FolderOutlined style={{ fontSize: '24px' }} />
               );
            }}
            ghost
            accordion
         >
            {Object.entries(anemis).map(([key, value], index) => {
               return (
                  <Panel header={`${key} Он`} key={index}>
                     <Collapse collapsible="header" accordion>
                        {value?.map((item, index) => {
                           return (
                              <Panel
                                 header={
                                    <div className="row-auto">
                                       <span className="font-bold">
                                          {
                                             item.inpatientRequest?.structure
                                                ?.name
                                          }
                                       </span>
                                       <span>&nbsp;</span>
                                       <span>
                                          {item.createdAt
                                             ?.replace(/T/, ' ')
                                             .replace(/\..+/, '')}
                                       </span>
                                    </div>
                                 }
                                 key={value[index].id}
                              >
                                 <p>
                                    <span className="font-bold">
                                       Хэвтэх үеийн зовиур:
                                    </span>
                                    <span>&nbsp;</span>
                                    <span>{item.inPatientPain}</span>
                                 </p>
                                 <p>
                                    <span className="font-bold">
                                       Өвчний түүх:
                                    </span>
                                    <span>&nbsp;</span>
                                    <span>{item.painStory}</span>
                                 </p>
                                 <p>
                                    <span className="font-bold">
                                       Амьдралын түүх:
                                    </span>
                                    <span>&nbsp;</span>
                                    <span>{item.lifeStory}</span>
                                 </p>
                              </Panel>
                           );
                        })}
                     </Collapse>
                  </Panel>
               );
            })}
         </Collapse>
      </Spin>
   );
}
export default Anemiz;
