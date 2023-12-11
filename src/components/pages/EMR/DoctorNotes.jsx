import { Input } from 'antd';
import notePublic from '../../../../src/assets/images/notePublic.svg';

import React, { useState } from 'react';

const DoctorNotes = () => {
   const [isPublic, setIsPublic] = useState(true);
   return (
      <div className={isPublic ? 'emr-doctor-notes-public' : 'emr-doctor-notes-private'}>
         <div className="content-notes">content</div>
         <div className="flex flex-row gap-3">
            <button onClick={() => setIsPublic(!isPublic)}>
               <img src={notePublic} />
               {isPublic ? 'Нийтэд' : 'Хувьд'}
            </button>
            <Input placeholder="Тэмдэглэл бичих" />
         </div>
      </div>
   );
};
export default DoctorNotes;
