import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import { Each } from '../../../../../features/Each';
import { ReturnById, ReturnByIdToName } from '../../../611/Document/Index';
import arrowNext from '../../ListOfIssues/arrowNext.svg';
import { PrinterOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useReactToPrint } from 'react-to-print';

import checkIcon from './icon/checkIcon.svg';
import inlineIcon from './icon/inlineIcon.svg';
import folderIcon from './icon/folderIcon.svg';
import expandIcon from './icon/expandIcon.svg';
import expandedIcon from './icon/expandedIcon.svg';

const RenderDate = ({ date }) => {
   if (date?.startDate && date?.endDate) {
      const startDate = dayjs(date.startDate).format('YYYY.MM.DD');
      const endDate = dayjs(date.endDate).format('YYYY.MM.DD');
      return <p className="text-[#4E5969] text-sm font-medium">{`${startDate} - ${endDate}`}</p>;
   }
   return;
};

const DocumentIn = (props) => {
   const checkPercent = (percent) => {
      if (percent > 10) {
         return <img src={checkIcon} alt="icon" />;
      } else {
         return <img src={inlineIcon} alt="icon" />;
      }
   };
   const [expanded, setExpanded] = useState(false);
   return (
      <div className="flex flex-col gap-2">
         <div className="flex flex-row justify-between gap-3 items-center" onClick={() => setExpanded(!expanded)}>
            <div className="flex flex-row gap-2 items-center">
               {checkPercent(props.document?.data?.percent)}
               <p className="text-sm font-medium">{props.index + 1}.</p>
               <p className="text-sm font-medium text-[#22A06B]">{ReturnByIdToName(props.document.documentId)}</p>
            </div>
            {expanded ? <img src={expandIcon} alt="icon" /> : <img src={expandedIcon} alt="icon" />}
         </div>
         {expanded ? (
            <div className="flex flex-col gap-1 px-6">
               <p>{`Огноо: ${dayjs(props.document.createdAt)?.format('YYYY/MM/DD')}`}</p>
               <p>{`Цаг: ${dayjs(props.document.createdAt)?.format('HH:mm:ss')}`}</p>
               <p>{`Давтамж: ${props.document.isExpand ? props.document.children.length : 1}`}</p>
               <button
                  style={{
                     display: 'flex',
                     padding: '6px 12px',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: 4,
                     borderRadius: 4,
                     border: '1px solid #c9cdd4',
                     background: '#fff'
                  }}
               >
                  Дэлгэрэнгүй <img src={arrowNext} alt="arr" />
               </button>
            </div>
         ) : null}
         <div className="w-full h-[1px] bg-[#C9CDD4]" />
      </div>
   );
};

const GroupDocument = (props) => {
   const currentRef = useRef();
   const [isOpenModalPrint, setIsOpenModalPrint] = useState(false);
   const [expanded, setExpanded] = useState(false);
   const handlePrint = useReactToPrint({
      // onBeforeGetContent: () => setPrintLoading(true),
      // onBeforePrint: () => setPrintLoading(false),
      // onPrintError: () => console.log('asda'),
      content: () => currentRef.current
   });
   return (
      <>
         <div className={expanded ? 'document-in expanded' : 'document-in'} onClick={() => setExpanded(!expanded)}>
            <div className="flex flex-row gap-2">
               <img src={folderIcon} alt="icon" />
               <RenderDate date={props.document.date} />
            </div>
            {expanded ? <img src={expandIcon} alt="icon" /> : <img src={expandedIcon} alt="icon" />}
         </div>
         {expanded ? (
            <>
               <div className="document-in-body">
                  <Button icon={<PrinterOutlined />} onClick={() => setIsOpenModalPrint(true)}>
                     Хэвлэх
                  </Button>
                  <Each
                     of={props.document?.documents}
                     render={(document, index) => <DocumentIn key={index} document={document} index={index} />}
                  />
               </div>
            </>
         ) : null}
         <Modal
            title="Маягт харах"
            width={'21cm'}
            open={isOpenModalPrint}
            onCancel={() => setIsOpenModalPrint(false)}
            cancelText="Болих"
            okText="Хэвлэх"
            onOk={() => handlePrint()}
            bodyStyle={{
               width: '19cm',
               margin: 'auto'
            }}
         >
            <div ref={currentRef}>
               <Each
                  of={props.document.documents}
                  render={(document, index) => {
                     return (
                        <div key={index}>
                           <ReturnById
                              type={document.usageType}
                              id={document.documentId}
                              appointmentId={document.appointmentId}
                              data={{
                                 formData: document.isExpand ? document.children?.map((dD) => dD.data) : document.data,
                                 patientData: {}
                              }}
                              hospitalName={'hospitalName'}
                           />
                        </div>
                     );
                  }}
               />
            </div>
         </Modal>
      </>
   );
};
export default GroupDocument;
