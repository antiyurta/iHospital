import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/authReducer';
import { Get, Patch, Post } from '../../comman';
import mnMN from 'antd/es/calendar/locale/mn_MN';
import moment from 'moment';
import { Col, Row, Table, Input, Empty, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Report() {
   const token = useSelector(selectCurrentToken);
   const [examinationReportList, setExaminationReportList] = useState([]); //
   const [isLoading, setIsLoading] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const { RangePicker } = DatePicker;
   const config = {
      headers: {},
      params: {}
   };
   const getExaminationReport = async () => {
      setExaminationReportList([]);
      // config.params.examinationRequestId = ;
      const response = await Get(`service/erequest/report`, token, config);
      console.log('response get ExaminationReport ====>', response);
      if (response.length !== 0) {
         response.map((el, index) => {
            setExaminationReportList((examinationReportList) => [
               ...examinationReportList,
               {
                  key: index,
                  barCode: el.barCode,
                  lastName: el.lastName,
                  firstName: el.firstName,
                  registerNumber: el.registerNumber,
                  gender: el.genderType === 'MAN' ? 'Эрэгтэй' : 'Эмэгтэй',
                  date: el.createdAt?.substr(0, 10),
                  device: el.name
               }
            ]);
         });
      }
      setIsLoading(false);
   };

   const columns = [
      {
         title: 'Бар код',
         dataIndex: 'barCode',
         key: 'barCode'
      },
      {
         title: 'Овог',
         dataIndex: 'lastName',
         key: 'lastName'
      },
      {
         title: 'Нэр',
         dataIndex: 'firstName',
         key: 'firstName'
      },
      {
         title: 'Регистр',
         dataIndex: 'registerNumber',
         key: 'registerNumber'
      },
      {
         title: 'Хүйс',
         dataIndex: 'gender',
         key: 'gender'
      },
      {
         title: 'Төхөөрөмж',
         dataIndex: 'device',
         key: 'device'
      },
      // {
      //   title: "Тасаг, нэгж",
      //   dataIndex: "cabinet",
      //   key: "cabinet",
      // },
      {
         title: 'Шинжилгээ авсан цаг',
         dataIndex: 'date',
         key: 'date'
      }
      // {
      //   title: "Шинжилгээ авсан ажилтны нэр",
      //   dataIndex: "employee",
      //   key: "employee",
      // },
   ];

   const filterAppointment = async (value, dateString) => {
      if (value !== null) {
         setExaminationReportList([]);
         config.params.startDate = moment(dateString[0]).hour(0).minute(0).format('YYYY-MM-DD HH:mm');
         config.params.endDate = moment(dateString[1]).hour(23).minute(59).format('YYYY-MM-DD HH:mm');
         const response = await Get('service/erequest/report', token, config);
         if (response.length !== 0) {
            response.map((el, index) => {
               setExaminationReportList((examinationReportList) => [
                  ...examinationReportList,
                  {
                     key: index,
                     barCode: el.barCode,
                     lastName: el.lastName,
                     firstName: el.firstName,
                     registerNumber: el.registerNumber,
                     gender: el.genderType === 'MAN' ? 'Эрэгтэй' : 'Эмэгтэй',
                     date: el.createdAt?.substr(0, 10),
                     device: el.name
                  }
               ]);
            });
         }
      } else {
         getExaminationReport();
      }
   };

   useEffect(() => {
      setIsLoading(true);
      getExaminationReport();
   }, []);

   let locale = {
      emptyText: (
         <div className="p-4">
            <Empty description={false} />
         </div>
      )
   };

   return (
      <>
         <Row gutter={16} className="mb-2">
            <Col span={6}>
               <RangePicker onChange={filterAppointment} locale={mnMN} />
            </Col>
            <Col span={4}>
               <Input
                  size="small"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Хайх"
                  prefix={<SearchOutlined />}
               />
            </Col>
         </Row>
         <Row gutter={16} className="mb-2">
            <Col span={24}>
               <Table
                  locale={locale}
                  loading={isLoading}
                  columns={columns}
                  dataSource={examinationReportList?.filter(
                     (obj) =>
                        obj.barCode?.toString()?.includes(searchValue) ||
                        obj.lastName?.toLowerCase()?.includes(searchValue) ||
                        obj.firstName?.toLowerCase()?.includes(searchValue) ||
                        obj.registerNumber?.toLowerCase()?.includes(searchValue)
                  )}
                  bordered
               />
            </Col>
         </Row>
      </>
   );
}

export default Report;
