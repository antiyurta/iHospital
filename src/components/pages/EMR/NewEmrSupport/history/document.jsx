import React, { useContext } from 'react';
import { useState } from 'react';

import collapseIcon from '../../ListOfIssues/collapse.svg';
import expandIcon from '../../ListOfIssues/expand.svg';
import arrowNext from '../../ListOfIssues/arrowNext.svg';
import dayjs from 'dayjs';
import { ReturnById, ReturnByIdToCode, ReturnByIdToName } from '../../../611/Document/Index';
import { PrinterOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import EmrContext from '../../../../../features/EmrContext';

const Document = (props) => {
   const { document, index, incomeEmrData } = props;
   const { selectedPatient } = useContext(EmrContext);
   const [expanded, setExpanded] = useState(false);
   const [isOpenModalView, setIsOpenModalView] = useState(false);
   return (
      <>
         <div className="document">
            <div onClick={() => setExpanded(!expanded)} className="header">
               <img src={!expanded ? expandIcon : collapseIcon} alt="triger" />
               <span>{`${index + 1}.`}</span>
               <span className="code">{ReturnByIdToCode(document.documentId)}</span>
               <span>{ReturnByIdToName(document.documentId)}</span>
            </div>
            {expanded ? (
               <>
                  <div className="expandable">
                     <p>{`Огноо: ${dayjs(document.createdAt).format('YYYY/MM/DD')} `}</p>
                     <p>{`Хугацаа: ${dayjs(document.createdAt).format('HH:mm:ss')}`}</p>
                  </div>
                  <div className="description">
                     <button>
                        <PrinterOutlined />
                     </button>
                     <button
                        onClick={() => {
                           console.log(document);
                           setIsOpenModalView(true);
                        }}
                     >
                        Дэлгэрэнгүй <img src={arrowNext} alt="arr" />
                     </button>
                  </div>
               </>
            ) : null}
            <div
               style={{
                  width: '100%',
                  height: 1,
                  background: '#C9CDD4'
               }}
            />
         </div>
         <Modal
            width={'21cm'}
            title="Маягт харах"
            open={isOpenModalView}
            onCancel={() => setIsOpenModalView(false)}
            bodyStyle={{
               width: '19cm',
               margin: 'auto'
            }}
         >
            <div className="new-form">
               <ReturnById
                  type={incomeEmrData.usageType}
                  id={document.documentId}
                  appointmentId={incomeEmrData.inpatientRequestId || incomeEmrData.appointmentId}
                  data={{
                     formData: document.data,
                     createdAt: document.createdAt,
                     patientData: selectedPatient
                  }}
                  hospitalName={'hospitalName'}
               />
            </div>
         </Modal>
      </>
   );
};
export default Document;
