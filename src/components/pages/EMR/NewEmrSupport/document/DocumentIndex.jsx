import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentAppId } from '../../../../../features/authReducer';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import { Empty, Modal, Table } from 'antd';
import { openNofi } from '../../../../comman';
//service
import OrganizationDocumentRoleServices from '../../../../../services/organization/documentRole';
//img
import Arrow from './arrow.svg';
// compon
import Customized from '../../../BeforeAmbulatory/Customized/Index';

const DocumentIndex = (props) => {
   const { usageType } = props;
   const AppIds = useSelector(selectCurrentAppId);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const [isOpenRenderModal, setIsOpenRenderModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [documents, setDocuments] = useState([]);
   const [selectedDocument, setSelectedDocument] = useState({});
   const getDocuments = async () => {
      setIsLoading(true);
      await OrganizationDocumentRoleServices.getByPageFilterShow({
         params: {
            employeePositionIds: AppIds,
            structureIds: [incomeEmrData.departmentId],
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
                  render: (_text, row, rowIndex) => {
                     return rowIndex + 1;
                  }
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
         >
            <Customized
               propsUsageType={usageType}
               isEdit={false}
               editId={null}
               document={selectedDocument}
               documentValue={selectedDocument?.value}
               documentType={0}
               onOk={(state) => setIsOpenRenderModal(state)}
               isBackButton={false}
               handleBackButton={() => null}
            />
         </Modal>
      </div>
   );
};
export default DocumentIndex;
