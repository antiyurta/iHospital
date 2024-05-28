import React, { useEffect, useState } from 'react';
import { DatePicker, Row, Select } from 'antd';
import { renderFormItem } from '../utils';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../../features/patientReducer';
import healthInsurance from '../../../../../services/healt-insurance/healtInsurance';
import TextArea from 'antd/lib/input/TextArea';

const typeOption = [
   { value: '1', label: 'Дүрс оношлогоо дүгнэлт' },
   { value: '2', label: 'Шинжилгээ' },
   { value: '3', label: 'Үзлэгийн бүртгэл' }
];

export const SendEditMedicalLink = () => {
   const patient = useSelector(selectPatient);
   const [hics, setHics] = useState([]);

   const getPatientData = async () => {
      await healthInsurance.getPatientData(patient.registerNumber).then(({ data }) => {
         if (data.code == 200) {
            const details = data.result.details;
            setHics(details.filter((detail) => detail.statusCode == 5 && detail.serviceId == 20120));
         }
      });
   };
   useEffect(() => {
      getPatientData();
   }, []);

   return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <Row gutter={6} style={{ width: '100%' }}>
            {renderFormItem(
               'Шинжилгээ, дүрс оношилгоо хийлгэсэн огноо',
               'indate',
               [],
               <DatePicker format={'YYYY-MM-DD'} />,
               22
            )}
            {renderFormItem('Тусламж, үйлчилгээний дугаар', 'serviceNo', [])}
            {renderFormItem('Төрөл', 'type', [], <Select options={typeOption} placeholder={'Сонгох'} />)}
            {renderFormItem('URL /засварласан/', 'link', [])}
            {renderFormItem('Эмнэлгийн системийн appId', 'appId', [])}{' '}
            {renderFormItem(
               'Link-ийн docuid',
               'docuid',
               false,
               <Select
                  options={hics.map((hic) => ({
                     value: hic.serviceNumber,
                     label: `${hic.inDateStr} - ${hic.serviceName} - ${hic.icdCode}`
                  }))}
                  placeholder={'Сонгох'}
               />,
               22
            )}
            {renderFormItem('Засварлаж буй шалтгаан', 'reasonDesc', [], <TextArea placeholder="-----" />, 22)}
         </Row>
      </div>
   );
};

