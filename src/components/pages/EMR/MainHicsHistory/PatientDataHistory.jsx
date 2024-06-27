import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Spin, Table } from 'antd';
import dayjs from 'dayjs';
//api
import HealtInsuranceApi from '@ApiServices/healt-insurance/healtInsurance';
//common
import { openNofi } from '@Comman/common';
import { EyeOutlined } from '@ant-design/icons';

const labelstyle = {
   fontSize: 14,
   color: 'black',
   fontWeight: 700
};

const labelMap = {
   1: 'asd',
   2: 'sad',
   3: 'Үзлэгийн бүртгэл'
};

const PatientDataHistory = ({ registerNumber }) => {
   const [isLoading, setLoading] = useState(false);
   const [patientData, setPatientData] = useState([]);
   const getPatientData = async () => {
      setLoading(true);
      await HealtInsuranceApi.getPatientData(registerNumber)
         .then(({ data }) => {
            if (data.code === 200) {
               const details = data.result.details?.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
               setPatientData(details?.reverse() || []);
            } else {
               openNofi('error', 'Амжилтгүй', data.description);
            }
         })
         .finally(() => {
            setLoading(false);
         });
   };
   const getColor = (statusCode) => {
      if (statusCode === 1) {
         return 'green';
      } else if (statusCode === 5) {
         return 'yellow';
      }
      return 'red';
   };
   useEffect(() => {
      registerNumber && getPatientData();
   }, []);
   return (
      <div className="h-full">
         <Spin spinning={isLoading} wrapperClassName="h-full emr-tabs">
            <div className="grid grid-cols-2 gap-4">
               {patientData?.map((data, index) => (
                  <Badge.Ribbon
                     key={index}
                     rootClassName="w-[calc(100%-1rem)]"
                     text={data.status}
                     color={getColor(data.statusCode)}
                  >
                     <Card className="h-full">
                        <p className="pt-6" style={labelstyle}>
                           Эмнэлэг: {data.hospitalName}
                        </p>
                        <p style={labelstyle}>Огноо: {dayjs(data.createdDate).format('YYYY/MM/DD HH:mm')}</p>
                        <p>Тусламж үйлчилгээ: {data.serviceName}</p>
                        <p>ICD 10: {data.icdCode}</p>
                        <p>ICD 9: {data.icd9Code}</p>
                        {data.serviceId === 20160 ? (
                           <p style={labelstyle}>Жирэмсний 7 хоног: {data.pregnantWeek}</p>
                        ) : null}
                        <p>Төлөв: {data.status}</p>
                        {data.listExamCode != null ? (
                           <>
                              <p style={labelstyle}>Оношилгооо, Шинжилгээ:</p>
                              <ol className="list-decimal">
                                 {data.listExamCode?.map((exam, idx) => (
                                    <li className="" key={idx}>
                                       {exam.examName}
                                    </li>
                                 ))}
                              </ol>
                           </>
                        ) : null}
                        {data.medicalLinks?.length > 0 ? (
                           <>
                              <div className="w-full h-[1px] bg-black" />
                              <p style={labelstyle}>Үйлчилгээнийн линк:</p>
                              <Table
                                 rowKey="docuid"
                                 bordered
                                 columns={[
                                    {
                                       title: 'Төрөл',
                                       dataIndex: 'type',
                                       render: (type) => labelMap[type]
                                    },
                                    {
                                       title: 'Огноо',
                                       dataIndex: 'indate',
                                       render: (indate) => dayjs(indate).format('YYYY/MM/DD')
                                    },
                                    {
                                       title: '',
                                       dataIndex: 'link',
                                       render: (link) => (
                                          <Button type="link" href={link} target="_blank" icon={<EyeOutlined />} />
                                       )
                                    }
                                 ]}
                                 pagination={false}
                                 dataSource={data.medicalLinks}
                              />
                           </>
                        ) : null}
                     </Card>
                  </Badge.Ribbon>
               ))}
            </div>
         </Spin>
      </div>
   );
};
export default PatientDataHistory;
