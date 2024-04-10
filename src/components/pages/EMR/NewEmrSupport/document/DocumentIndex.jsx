import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Empty, Modal, Table } from 'antd';
//common
import { openNofi } from '@Comman/common';
//context
import EmrContext from '@Features/EmrContext';
//redux
import { selectCurrentAppId } from '@Features/authReducer';
import { selectCurrentEmrData } from '@Features/emrReducer';
//service
import OrganizationDocumentRoleApi from '@ApiServices/organization/documentRole';
//img
import Arrow from './arrow.svg';
// comp
import Customized from '../../../BeforeAmbulatory/Customized/Index';

const DocumentIndex = (props) => {
   const { usageType, handleCount } = props;
   const { setIsReloadDocumentHistory } = useContext(EmrContext);
   const AppIds = useSelector(selectCurrentAppId);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [current, setCurrent] = useState(1);
   const [pageSize, setPageSize] = useState(10);
   const [isOpenRenderModal, setIsOpenRenderModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [documents, setDocuments] = useState([]);
   const [selectedDocument, setSelectedDocument] = useState({});
   const getDocuments = async () => {
      setIsLoading(true);
      await OrganizationDocumentRoleApi.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: [incomeEmrData.departmentId, incomeEmrData.cabinetId],
            usageType: usageType,
            documentType: 0
         }
      })
         .then(({ data: { response } }) => {
            if (response?.length === 0) {
               openNofi('info', 'Анхааруулга', 'Таньд маягт алга');
            } else {
               var data = [];
               response?.map((item) =>
                  item?.documents?.map((document) => {
                     data.push(document);
                  })
               );
               handleCount?.(data?.length);
               setDocuments(data);
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setIsLoading(false));
   };
   useEffect(() => {
      getDocuments();
   }, []);
   return (
      <div>
         <Table
            rowKey={'value'}
            rowClassName="hover: cursor-pointer"
            locale={{
               emptyText: <Empty description={'Хоосон'} />
            }}
            loading={{
               spinning: isLoading,
               tip: 'Уншиж байна....'
            }}
            columns={[
               {
                  title: '№',
                  render: (_text, _row, rowIndex) => rowIndex + 1 + pageSize * (current - 1)
               },
               {
                  title: 'Нэр',
                  dataIndex: 'docName',
                  render: (text) => {
                     return <p className="whitespace-normal text-black">{text}</p>;
                  }
               },
               {
                  title: 'Дугаар',
                  dataIndex: 'label',
                  render: (text) => {
                     return <p className="whitespace-normal text-black">{text}</p>;
                  }
               },
               {
                  title: '',
                  render: (row) => {
                     return (
                        <img
                           onClick={() => {
                              setSelectedDocument(row);
                              setIsOpenRenderModal(true);
                           }}
                           src={Arrow}
                        />
                     );
                  }
               }
            ]}
            dataSource={documents}
            onChange={({ current, pageSize }) => {
               setCurrent(current);
               setPageSize(pageSize);
            }}
            pagination={{
               simple: true
            }}
         />
         <Modal
            title={selectedDocument?.docName}
            open={isOpenRenderModal}
            onCancel={() => setIsOpenRenderModal(false)}
            width={700}
            footer={null}
            destroyOnClose
         >
            <Customized
               propsUsageType={usageType}
               isEdit={false}
               editId={null}
               document={selectedDocument}
               documentValue={selectedDocument?.value}
               documentType={0}
               onOk={(state) => setIsOpenRenderModal(state)}
               isBackButton={true}
               handleIsReload={(state) => setIsReloadDocumentHistory(state)}
               handleBackButton={(state) => setIsOpenRenderModal(!state)}
            />
         </Modal>
      </div>
   );
};
export default DocumentIndex;
