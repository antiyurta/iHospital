import { Col, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPatient } from '../../../../features/patientReducer';
import healthInsurance from '../../../../services/healt-insurance/healtInsurance';

const { TextArea } = Input;

const ReConfirmHics = (props) => {
   const { form } = props;
   const patient = useSelector(selectPatient);
   const [hics, setHics] = useState([]);
   const getPatientData = async () => {
      await healthInsurance.getPatientData(patient.registerNumber).then(({ data }) => {
         if (data.code == 200) {
            const details = data.result.details;
            setHics(details.filter((detail) => detail.statusCode == 6));
         }
      });
   };
   useEffect(() => {
      getPatientData();
   }, []);
   return (
      <>
         <p>Үндсэн мэдээлэл</p>
         <Form.Item
            label="Үйлчилгээний дугаар"
            name={'serviceNumber'}
            rules={[
               {
                  required: true,
                  message: 'Үйлчилгээний дугаар оруулна уу'
               }
            ]}
         >
            <Select
               options={hics.map((hic) => ({
                  value: hic.serviceNumber,
                  label: `${hic.inDateStr} - ${hic.serviceName} - ${hic.icdCode}`
               }))}
            />
         </Form.Item>

         <Form.Item
            label="Шалтгаан"
            name="reason"
            rules={[
               {
                  required: true,
                  message: 'шалтгаан оруулна уу'
               }
            ]}
         >
            <TextArea />
         </Form.Item>
      </>
   );
};
export default ReConfirmHics;
