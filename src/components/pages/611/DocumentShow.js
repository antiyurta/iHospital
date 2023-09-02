import React from 'react';
import { SnippetsOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { openNofi } from '../../comman';

import Customized from '../BeforeAmbulatory/Customized/Index';
import { NewColumn, NewTable } from '../../Table/Table';
import OrganizationDocumentRoleServices from '../../../services/organization/documentRole';
import { NewInput } from '../../Input/Input';

function DocumentShow({ props }) {
   const [documents, setDocuments] = useState([]);
   const [isOpenAM, setIsOpenAM] = useState(false);
   const [documentId, setDocumentId] = useState(Number);
   const [isLoadingGetDocuments, setIsLoadingGetDocuments] = useState(false);
   const [documentSearchValue, setDocumentSearchValue] = useState('');
   const getDocuments = async () => {
      setIsLoadingGetDocuments(true);
      await OrganizationDocumentRoleServices.getByPageFilterShow({
         params: {
            employeePositionIds: props.appIds,
            structureId: props.departmentId,
            usageType: props.usageType,
            documentType: props.documentType
         }
      })
         .then((response) => {
            if (response.data.response?.length === 0) {
               openNofi('info', 'Анхааруулга', 'Таньд маягт алга');
            } else {
               var data = [];
               response.data.response?.map((item) =>
                  item?.documents?.map((document) => {
                     data.push(document);
                  })
               );
               setDocuments(data);
               setIsOpenAM(true);
               setDocumentId(0);
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setIsLoadingGetDocuments(false));
   };
   const filteredDocument = documents.filter((document) => {
      return document.label.toLowerCase().includes(documentSearchValue.toLowerCase());
   });
   return (
      <div>
         <Button
            type="primary"
            onClick={() => getDocuments()}
            loading={isLoadingGetDocuments}
            icon={<SnippetsOutlined />}
         >
            Маягт
         </Button>
         <Modal
            title="Маягт жагсаалт"
            open={isOpenAM}
            onCancel={() => setIsOpenAM(false)}
            width={'90%'}
            bodyStyle={{
               paddingLeft: 0
            }}
            footer={null}
         >
            <div className="flex flex-row gap-3">
               <div className="flex flex-col gap-3 px-3 border-r-[2px] w-[300px]">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <NewInput
                           style={{
                              backgroundColor: 'white'
                           }}
                           placeholder="Хайх"
                           value={documentSearchValue}
                           onChange={(e) => setDocumentSearchValue(e.target.value)}
                        />
                        <div
                           style={{
                              marginTop: 12
                           }}
                        >
                           <NewTable
                              prop={{
                                 rowKey: 'value',
                                 bordered: true,
                                 dataSource: filteredDocument,
                                 onRow: (record, _rowIndex) => {
                                    return {
                                       onClick: () => {
                                          setDocumentId(record.value);
                                       }
                                    };
                                 }
                              }}
                              meta={{
                                 page: 1,
                                 limit: filteredDocument.length
                              }}
                              isLoading={false}
                              isPagination={false}
                           >
                              <NewColumn width={'40'} dataIndex={'value'} title="ДТ" />
                              <NewColumn width={'40'} dataIndex={'label'} title="Нэр" />
                           </NewTable>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full overflow-auto">
                  <div className="rounded-md bg-[#F3F4F6] w-full inline-block">
                     <div className="p-3">
                        <Customized
                           usageType={'OUT'}
                           documentValue={documentId}
                           structureId={props.departmentId}
                           appointmentId={props.appointmentId}
                           patientId={props.patientId}
                           onOk={(state) => setIsOpenAM(state)}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}
export default DocumentShow;
