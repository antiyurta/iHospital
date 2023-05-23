import React from 'react';
import { SnippetsOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Table } from 'antd';
import { useState } from 'react';
import jwtInterceopter from '../../jwtInterceopter';
import { openNofi } from '../../comman';

// import Customized from './BeforeAmbulatory/Customized/Index';
import Customized from '../BeforeAmbulatory/Customized/Index';

function DocumentShow({ props }) {
   console.log(props);
   const [documents, setDocuments] = useState([]);
   const [isOpenAM, setIsOpenAM] = useState(false);
   const [documentId, setDocumentId] = useState(Number);
   const [isLoadingGetDocuments, setIsLoadingGetDocuments] = useState(false);
   const [documentSearchValue, setDocumentSearchValue] = useState('');
   const getDocuments = async () => {
      setIsLoadingGetDocuments(true);
      const conf = {
         headers: {},
         params: {
            employeePositionIds: props.appIds,
            structureId: props.deparmentId,
            usageType: props.usageType,
            documentType: props.documentType
         }
      };
      await jwtInterceopter
         .get('organization/document-role/show', conf)
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
         <Modal title="Маягт жагсаалт" open={isOpenAM} onCancel={() => setIsOpenAM(false)} width={'70%'} footer={null}>
            <div className="flex flex-row gap-3">
               <div className="flex flex-col gap-3 p-3 border-r-[2px] w-[300px]">
                  <Input
                     placeholder="Хайх"
                     value={documentSearchValue}
                     onChange={(e) => setDocumentSearchValue(e.target.value)}
                  />
                  <div>
                     <Table
                        rowKey={'value'}
                        rowClassName="hover:cursor-pointer"
                        bordered
                        columns={[
                           {
                              title: 'ДТ',
                              width: 40,
                              dataIndex: 'value'
                           },
                           {
                              title: 'Нэр',
                              dataIndex: 'label',
                              render: (text) => {
                                 return <p className="text-black whitespace-normal">{text}</p>;
                              }
                           }
                        ]}
                        scroll={{
                           y: 3000
                        }}
                        onRow={(record, _rowIndex) => {
                           return {
                              onClick: () => {
                                 setDocumentId(record.value);
                              }
                           };
                        }}
                        pagination={false}
                        dataSource={filteredDocument}
                     />
                  </div>
               </div>
               <div className="w-full">
                  <Customized usageType={'OUT'} documentValue={documentId} structureId={props.deparmentId} />
               </div>
            </div>
         </Modal>
      </div>
   );
}
export default DocumentShow;
