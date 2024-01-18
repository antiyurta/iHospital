import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Each } from '../../../../../features/Each';

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
   if (date) {
      const startDate = dayjs(date.startDate).format('YYYY.MM.DD');
      const endDate = dayjs(date.endDate).format('YYYY.MM.DD');
      return (
         <p
            style={{
               color: '#4E5969',
               fontSize: 14,
               fontWeight: 500
            }}
         >{`${startDate} - ${endDate}`}</p>
      );
   }
   return;
};

const GroupDocument = (props) => {
   console.log(props);
   const [expanded, setExpanded] = useState(false);
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
            <div className="document-in-body">
               <Each of={props.document?.documents} render={(document, index) => <div>1</div>} />
            </div>
         ) : null}
      </>
   );
};
export default GroupDocument;
