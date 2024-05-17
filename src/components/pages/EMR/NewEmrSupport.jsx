import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
//img
import { backArrow } from '@Assets/index';
//comp
import SentService from './Insurance/sent-service';
import DocumentIndex from './NewEmrSupport/document/Index';
//redux
import { selectPatient } from '@Features/patientReducer';
import { selectCurrentEmrData } from '@Features/emrReducer';

const NewEmrSupport = () => {
   const currentPatient = useSelector(selectPatient);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   console.log('incomeData=========>', incomeEmrData);
   const [isOpenModalRequests, setIsOpenModalRequests] = useState(false);
   const [isOpenModalHics, setIsOpenModalHics] = useState(false);
   return (
      <div className="navbar">
         <div className="back">
            {incomeEmrData.appointmentType === 3 ? (
               <Link
                  to={'/main/SurgeryList'}
                  state={{
                     isRead: true
                  }}
               >
                  <img src={backArrow} alt="icon" />
                  <p>Буцах</p>
               </Link>
            ) : (
               <Link
                  to={'/main/ambulatoryList'}
                  state={{
                     isRead: true
                  }}
               >
                  <img src={backArrow} alt="icon" />
                  <p>Буцах</p>
               </Link>
            )}
         </div>
         <div className="emr-navbar">
            <button>Гарын авлага</button>
            <button>Скан EMR</button>
            <button onClick={() => setIsOpenModalRequests(true)}>Үйлчлүүлэгчийн хүснэгт </button>
            <button onClick={() => setIsOpenModalHics(true)}>ЭМД</button>
            <DocumentIndex />
         </div>
         <Modal
            title="Даатгал"
            open={isOpenModalHics}
            onCancel={() => setIsOpenModalHics(false)}
            style={{ maxHeight: '80vh', overflow: 'hidden', borderRadius: '14px' }}
         >
            <SentService
               patient={currentPatient}
               hicsSeal={incomeEmrData.hicsSeal}
               parentHicsSeal={incomeEmrData.parentHicsSeal}
               inspectionNoteId={incomeEmrData.inspectionNoteId}
            />
         </Modal>
         <Modal
            title="Үйлчлүүлэгчийн хүсэлт"
            width={300}
            open={isOpenModalRequests}
            onCancel={() => setIsOpenModalRequests(false)}
            footer={false}
         >
            <div className="patient-requests">
               <Link
                  to={'/main/ambulatoryList'}
                  state={{
                     activeKey: '1',
                     isRead: true
                  }}
               >
                  Амбулатори
               </Link>
               <Link
                  to={'/main/ambulatoryList'}
                  state={{
                     activeKey: '2',
                     isRead: true
                  }}
               >
                  Урьдчилсан сэргийлэх
               </Link>
               <Link
                  to={'/main/ambulatoryList'}
                  state={{
                     activeKey: '3',
                     isRead: true
                  }}
               >
                  Хэвтэн
               </Link>
            </div>
         </Modal>
      </div>
   );
};
export default NewEmrSupport;

