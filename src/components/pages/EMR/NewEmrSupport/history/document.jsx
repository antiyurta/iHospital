import React from 'react';
import { useState } from 'react';

import collapseIcon from '../../ListOfIssues/collapse.svg';
import expandIcon from '../../ListOfIssues/expand.svg';
import arrowNext from '../../ListOfIssues/arrowNext.svg';
import dayjs from 'dayjs';
import { ReturnByIdToCode, ReturnByIdToName } from '../../../611/Document/Index';
import { PrinterOutlined } from '@ant-design/icons';

const Document = (props) => {
   const { document, index } = props;
   const [expanded, setExpanded] = useState(false);
   return (
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
                  <button>
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
   );
};
export default Document;
