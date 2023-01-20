//Явцын тэмдэглэл
import React, { useState } from 'react';
import { Card, Collapse, Empty, Modal, Spin } from 'antd';
import { FolderOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get } from '../../../comman';
import FormIndex from '../FormPrint';
import Prescription from '../PrescriptionPrint';
import Magadlaga from '../MagadlagaPrint';

export default function ProgressNotes({ Appointments }) {
   const { Panel } = Collapse;
   const token = useSelector(selectCurrentToken);
   const config = {
      headers: {},
      params: {}
   };
   const [spinner, setSpinner] = useState(false);
   const [inspectionNotes, setInspectionNotes] = useState(null);
   const [patientDiagnosis, setPatientDiagnosis] = useState(null);
   const [serviceRequests, setServiceRequests] = useState(null);
   const [patientInfo, setPatientInfo] = useState({});
   const [employee, setEmployee] = useState({});
   const [printPrescription, setPrintPrescription] = useState([]);
   const [printMagadlaga, setPrintMagadlaga] = useState({});
   const [isOpenModalPrescription, setIsOpenModalPrescription] =
      useState(false);
   const [isOpenModalMagadlaga, setIsOpenModalMagadlaga] = useState(false);
   const onChange = async (id) => {
      setSpinner(true);
      if (id) {
         const conf = {
            headers: {},
            params: {}
         };
         const response = await Get('appointment/show/' + id, token, conf);
         setInspectionNotes(response.inspectionNote);
         setPatientDiagnosis(response.patientDiagnosis);
         setServiceRequests(response.serviceRequest?.services);
         getPatientInfo(response.patientId);
         setEmployee(response.employee);
      }
      setSpinner(false);
   };
   const getPatientInfo = async (id) => {
      const response = await Get('pms/patient/' + id, token, config);
      setPatientInfo(response);
   };
   return (
      <>
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
            {Object.entries(Appointments).map(([key, value], index) => {
               return (
                  <Panel header={`${key} Он`} key={index}>
                     <Collapse
                        Collapse
                        collapsible="header"
                        onChange={onChange}
                        accordion
                     >
                        {value.map((el, index) => {
                           return (
                              <Panel
                                 header={
                                    <div className="grid">
                                       <span>
                                          {el.createdAt
                                             ?.replace(/T/, ' ')
                                             .replace(/\..+/, '')}
                                       </span>
                                    </div>
                                 }
                                 key={value[index].id}
                              >
                                 <Spin spinning={spinner}>
                                    <FormIndex
                                       key={index}
                                       patientInfo={patientInfo}
                                       inspectionNote={inspectionNotes}
                                       diagnoses={patientDiagnosis}
                                       services={serviceRequests}
                                       employee={employee}
                                    />
                                 </Spin>
                              </Panel>
                           );
                        })}
                     </Collapse>
                  </Panel>
               );
            })}
         </Collapse>
         <Modal
            open={isOpenModalPrescription}
            onCancel={() => setIsOpenModalPrescription(false)}
            footer={null}
            width={845}
            title={'CT-1'}
         >
            <Prescription props={printPrescription} />
         </Modal>
         <Modal
            open={isOpenModalMagadlaga}
            onCancel={() => setIsOpenModalMagadlaga(false)}
            footer={null}
            width={860}
            title={'Эмнэлэгийн магадлагаа'}
         >
            <Magadlaga data={printMagadlaga} />
         </Modal>
      </>
   );
}
