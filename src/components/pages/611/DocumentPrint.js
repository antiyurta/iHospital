import React, { useEffect, useState } from 'react';
import { Button, Divider, Modal } from 'antd';

import OrganizationDocumentRoleServices from '../../../services/organization/documentRole';

function DocumentPrint(props) {
   const [isOpenHistory, setIsOpenHistory] = useState(false);
   const getDocumentsHistory = async () => {
      await OrganizationDocumentRoleServices.getByPageFilterShow({
         employeePositionIds: props.appIds,
         structureId: props.departmentId,
         usageType: 'OUT',
         documentType: props.documentType
      }).then((response) => {
         console.log(response);
      });
   };
   useEffect(() => {
      getDocumentsHistory();
   }, []);
   return (
      <>
         <Button type="primary" onClick={() => setIsOpenHistory(true)}>
            Өвчний түүх
         </Button>
         <Modal title="Өвчний түүх" open={isOpenHistory} onCancel={() => setIsOpenHistory(false)} width={'70%'}>
            <div className="flex flex-wrap">
               <div
                  className="sm:w-full md:w-1/4 lg:w-1/4"
                  style={{
                     borderRight: '1px solid #f0f0f0'
                  }}
               >
                  <div className="px-2">
                     <Divider>Амбулатори</Divider>
                     <Divider>Хэвтэн</Divider>
                  </div>
               </div>
               <div className="sm:w-full md:w-3/4 lg:w-3/4"></div>
            </div>
         </Modal>
      </>
   );
}
export default DocumentPrint;
