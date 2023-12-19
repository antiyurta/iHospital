import { Modal } from 'antd';
import React, { useState } from 'react';

import DocumentHistory from './NewEmrSupport/history/Index';
import DocumentIndex from './NewEmrSupport/document/Index';

const NewEmrSupport = () => {
   const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false);
   return (
      <>
         <div className="emr-navbar">
            <button>Гарын авлага</button>
            <button>Тайлан</button>
            <button>Скан EMR</button>
            <button>Үйлчлүүлэгчийн хүснэгт </button>
            <button>Эрүүл мэндийн даатгал </button>
            <DocumentHistory />
            <DocumentIndex />
         </div>
      </>
   );
};
export default NewEmrSupport;
