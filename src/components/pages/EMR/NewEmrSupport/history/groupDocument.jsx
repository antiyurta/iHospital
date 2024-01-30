import dayjs from 'dayjs';
import React, { useContext, useState } from 'react';
import { Each } from '../../../../../features/Each';
import { ReturnByIdToName } from '../../../611/Document/Index';
import arrowNext from '../../ListOfIssues/arrowNext.svg';
import { Button } from 'antd';

import checkIcon from './icon/checkIcon.svg';
import inlineIcon from './icon/inlineIcon.svg';
import folderIcon from './icon/folderIcon.svg';
import expandIcon from './icon/expandIcon.svg';
import expandedIcon from './icon/expandedIcon.svg';
import EmrContext from '../../../../../features/EmrContext';

const RenderDate = ({ date }) => {
   if (date?.startDate && date?.endDate) {
      const startDate = dayjs(date.startDate).format('YYYY.MM.DD');
      const endDate = dayjs(date.endDate).format('YYYY.MM.DD');
      return <p className="text-[#4E5969] text-sm font-medium">{`${startDate} - ${endDate}`}</p>;
   }
   return;
};
const includeIds = [83, 84, 92, 93, 94, 95];
const DocumentIn = (props) => {
   const { setDocumentView } = useContext(EmrContext);
   const checkStatus = (id) => {
      // if (percent > 10) {
      return <img src={checkIcon} alt="icon" />;
      // } else {
      //    return <img src={inlineIcon} alt="icon" />;
      // }
   };
   const [expanded, setExpanded] = useState(false);
   return (
      <div className="flex flex-col gap-1">
         <div className="flex flex-row justify-between gap-3 items-center" onClick={() => setExpanded(!expanded)}>
            <div className="flex flex-row gap-2 items-center">
               {checkStatus(props.document?.documentId)}
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
                  className="flex bg-white rounded-lg items-center justify-center px-3 py-[6px]"
                  onClick={() => setDocumentView(true, props.document, 'one')}
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
   const { setDocumentView } = useContext(EmrContext);
   const [expanded, setExpanded] = useState(false);

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
                  <Button
                     type="primary"
                     className="w-full mb-2"
                     onClick={() => setDocumentView(true, props.document.documents, 'many')}
                  >
                     Дэлгэрэнгүй
                  </Button>
                  <Each
                     of={props.document?.documents}
                     render={(document, index) => <DocumentIn key={index} document={document} index={index} />}
                  />
               </div>
            </>
         ) : null}
      </>
   );
};
export default GroupDocument;
