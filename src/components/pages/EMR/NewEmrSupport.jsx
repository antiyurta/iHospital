import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
//img
import { backArrow } from '@Assets/index';
//comp
import SentService from './Insurance/sent-service';
import DocumentIndex from './NewEmrSupport/document/Index';
//redux
import { selectPatient } from '@Features/patientReducer';
import { selectCurrentAddHics, selectCurrentEmrData, selectCurrentHicsSeal } from '@Features/emrReducer';

const NewEmrSupport = () => {
   const navigate = useNavigate();
   const currentPatient = useSelector(selectPatient);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const hicsSeal = useSelector(selectCurrentHicsSeal);
   const addHics = useSelector(selectCurrentAddHics);
   const [isOpenModalHics, setIsOpenModalHics] = useState(false);
   const [isOpenModalRequests, setIsOpenModalRequests] = useState(false);
   return (
      <div className="navbar">
         <div className="back">
            <a
               onClick={() => {
                  navigate(-1);
               }}
            >
               <img src={backArrow} alt="icon" />
               <p>Буцах</p>
            </a>
         </div>
         <div className="emr-navbar">
            <button>Гарын авлага</button>
            <button>Скан EMR</button>
            <button onClick={() => setIsOpenModalRequests(true)}>Үйлчлүүлэгчийн хүснэгт </button>
            <button onClick={() => setIsOpenModalHics(true)}>ЭМД</button>
            <DocumentIndex />
         </div>
         <Modal title="Даатгал" open={isOpenModalHics} onCancel={() => setIsOpenModalHics(false)}>
            <SentService
               patient={currentPatient}
               hicsSeal={hicsSeal}
               parentHicsSeal={incomeEmrData.parentHicsSeal}
               inspectionNoteId={incomeEmrData.inspectionNoteId}
               incomeEmrData={incomeEmrData}
               addHics={addHics}
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
