import React, { useContext } from 'react';
import { useState } from 'react';

import collapseIcon from './collapse.svg';
import expandIcon from './expand.svg';
import arrowNext from './arrowNext.svg';
import dayjs from 'dayjs';
import EmrContext from '../../../../features/EmrContext';

const Diagnose = (props) => {
   const {
      diagnose: {
         appointmentId,
         doctor,
         inspectionDate,
         diagnose: { code, nameMn }
      },
      index
   } = props;
   const { setId } = useContext(EmrContext);
   const [expanded, setExpanded] = useState(false);
   const setAppointmentIdForContext = () => {
      setId(appointmentId, 'item-1');
   };
   return (
      <div className="diagnose">
         <div onClick={() => setExpanded(!expanded)} className="header">
            <img src={!expanded ? expandIcon : collapseIcon} alt="triger" />
            <span>{`${index + 1}.`}</span>
            <span className="code">{code}</span>
            <span>{dayjs(inspectionDate).format('YYYY/MM/DD')}</span>
         </div>
         {expanded ? (
            <>
               <div className="expandable">
                  <p>{`Кабинет: `}</p>
                  <p>{`Эмч: ${doctor}`}</p>
                  <p>{`Асуудал: ${nameMn}`}</p>
               </div>
               <div className="description">
                  <button onClick={setAppointmentIdForContext}>
                     Дэлгэрэнгүй <img src={arrowNext} alt="arr" />
                  </button>
               </div>
            </>
         ) : null}
      </div>
   );
};
export default Diagnose;
