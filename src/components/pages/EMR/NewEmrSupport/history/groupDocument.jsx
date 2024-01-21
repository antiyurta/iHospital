import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import { Each } from '../../../../../features/Each';
import { ReturnById, ReturnByIdToName } from '../../../611/Document/Index';
import arrowNext from '../../ListOfIssues/arrowNext.svg';
import { PrinterOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useReactToPrint } from 'react-to-print';

const CheckIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
         d="M7.99967 1.3335C4.32634 1.3335 1.33301 4.32683 1.33301 8.00016C1.33301 11.6735 4.32634 14.6668 7.99967 14.6668C11.673 14.6668 14.6663 11.6735 14.6663 8.00016C14.6663 4.32683 11.673 1.3335 7.99967 1.3335ZM11.1863 6.46683L7.40634 10.2468C7.31301 10.3402 7.18634 10.3935 7.05301 10.3935C6.91967 10.3935 6.79301 10.3402 6.69967 10.2468L4.81301 8.36016C4.61967 8.16683 4.61967 7.84683 4.81301 7.6535C5.00634 7.46016 5.32634 7.46016 5.51967 7.6535L7.05301 9.18683L10.4797 5.76016C10.673 5.56683 10.993 5.56683 11.1863 5.76016C11.3797 5.9535 11.3797 6.26683 11.1863 6.46683Z"
         fill="#2D8CFF"
      />
   </svg>
);

const InlineIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
         d="M6.99967 0.333496C3.32634 0.333496 0.333008 3.32683 0.333008 7.00016C0.333008 10.6735 3.32634 13.6668 6.99967 13.6668C10.673 13.6668 13.6663 10.6735 13.6663 7.00016C13.6663 3.32683 10.673 0.333496 6.99967 0.333496ZM9.61301 7.50016H4.27967C4.00634 7.50016 3.77967 7.2735 3.77967 7.00016C3.77967 6.72683 4.00634 6.50016 4.27967 6.50016H9.61301C9.88634 6.50016 10.113 6.72683 10.113 7.00016C10.113 7.2735 9.89301 7.50016 9.61301 7.50016Z"
         fill="#E34935"
      />
   </svg>
);

const FolderIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
         d="M10.565 4.5H15.5C16.7703 4.5 17.8192 5.44737 17.9789 6.67409L17.9947 6.83562L18 7V14.5C18 15.8255 16.9685 16.91 15.6644 16.9947L15.5 17H4.5C3.17452 17 2.08996 15.9685 2.00532 14.6644L2 14.5V7.5H7.07069L7.22385 7.49217C7.52777 7.46098 7.81509 7.33763 8.04702 7.13877L8.15819 7.03312L10.565 4.5ZM7.16667 3C7.43713 3 7.70151 3.0731 7.93238 3.21016L8.06667 3.3L9.385 4.289L7.43319 6.34437L7.3724 6.39872C7.3077 6.44767 7.23201 6.48017 7.15196 6.49335L7.07069 6.5H2V5.5C2 4.17452 3.03154 3.08996 4.33562 3.00532L4.5 3H7.16667Z"
         fill="#4E5969"
      />
   </svg>
);

const ExpandIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
         d="M2.21999 5.94023C2.21999 5.81356 2.26665 5.68689 2.36665 5.58689C2.55999 5.39356 2.87999 5.39356 3.07332 5.58689L7.41999 9.93356C7.73999 10.2536 8.25999 10.2536 8.57999 9.93356L12.9267 5.58689C13.12 5.39356 13.44 5.39356 13.6333 5.58689C13.8267 5.78023 13.8267 6.10023 13.6333 6.29356L9.28665 10.6402C8.94665 10.9802 8.48665 11.1736 7.99999 11.1736C7.51332 11.1736 7.05332 10.9869 6.71332 10.6402L2.36665 6.29356C2.27332 6.19356 2.21999 6.06689 2.21999 5.94023Z"
         fill="#6B7785"
      />
   </svg>
);

const ExpandedIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
         d="M5.93974 13.78C5.81307 13.78 5.68641 13.7333 5.58641 13.6333C5.39307 13.44 5.39307 13.12 5.58641 12.9267L9.93307 8.58001C10.2531 8.26001 10.2531 7.74001 9.93307 7.42001L5.58641 3.07335C5.39307 2.88001 5.39307 2.56001 5.58641 2.36668C5.77974 2.17335 6.09974 2.17335 6.29307 2.36668L10.6397 6.71335C10.9797 7.05335 11.1731 7.51335 11.1731 8.00001C11.1731 8.48668 10.9864 8.94668 10.6397 9.28668L6.29307 13.6333C6.19307 13.7267 6.06641 13.78 5.93974 13.78Z"
         fill="#6B7785"
      />
   </svg>
);

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
         return <CheckIcon />;
      } else {
         return <InlineIcon />;
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
            {expanded ? <ExpandIcon /> : <ExpandedIcon />}
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
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 8
               }}
            >
               <FolderIcon />
               <RenderDate date={props.document.date} />
            </div>
            {expanded ? <ExpandIcon /> : <ExpandedIcon />}
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
