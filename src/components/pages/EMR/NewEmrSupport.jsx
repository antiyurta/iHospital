import React, { useState } from 'react';
import DocumentHistory from './NewEmrSupport/history/Index';
import DocumentIndex from './NewEmrSupport/document/Index';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

const BackArrow = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
         d="M7.49992 9.95998L4.23992 6.69998C3.85492 6.31498 3.85492 5.68498 4.23992 5.29998L7.49992 2.03998"
         stroke="#86909C"
         stroke-width="1.5"
         stroke-miterlimit="10"
         stroke-linecap="round"
         stroke-linejoin="round"
      />
   </svg>
);

const NewEmrSupport = () => {
   const [isOpenModalRequests, setIsOpenModalRequests] = useState(false);
   const hrefList = (type) => {};
   return (
      <div className="navbar">
         <div className="back">
            <Link
               to={'/main/ambulatoryList'}
               state={{
                  isRead: true
               }}
            >
               <BackArrow />
               <p>Буцах</p>
            </Link>
         </div>
         <div className="emr-navbar">
            <button>Гарын авлага</button>
            <button>Скан EMR</button>
            <button onClick={() => setIsOpenModalRequests(true)}>Үйлчлүүлэгчийн хүснэгт </button>
            <button>Эрүүл мэндийн даатгал </button>
            <DocumentHistory />
            <DocumentIndex />
         </div>
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
