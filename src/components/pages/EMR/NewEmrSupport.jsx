import React, { useState } from 'react';
import DocumentIndex from './NewEmrSupport/document/Index';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import backArrow from './icon/backArrow.svg';
import SentService from './Insurance/sent-service';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../features/emrReducer';

const NewEmrSupport = () => {
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [isOpenModalRequests, setIsOpenModalRequests] = useState(false);
   const [isOpenModalHics, setIsOpenModalHics] = useState(false);
   return (
      <div className="navbar">
         <div className="back">
            <Link
               to={'/main/ambulatoryList'}
               state={{
                  isRead: true
               }}
            >
               <img src={backArrow} alt="icon" />
               <p>Буцах</p>
            </Link>
         </div>
         <div className="emr-navbar">
            <button>Гарын авлага</button>
            <button>Скан EMR</button>
            <button onClick={() => setIsOpenModalRequests(true)}>Үйлчлүүлэгчийн хүснэгт </button>
            <button onClick={() => setIsOpenModalHics(true)}>Эрүүл мэндийн даатгал </button>
            <DocumentIndex />
         </div>
         <Modal title="Даатгал" open={isOpenModalHics} onCancel={() => setIsOpenModalHics(false)}>
            <SentService PatientId={incomeEmrData.patientId} />
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
