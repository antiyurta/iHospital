import React, { useEffect, useState } from 'react';

import DocumentsFormPatientSerice from '../../../../../services/organization/document';
import { useSelector } from 'react-redux';
import { selectCurrentEmrData } from '../../../../../features/emrReducer';
import { Button, Empty, Table } from 'antd';
import { ReturnByIdToCode } from '../../../611/Document/Index';
import dayjs from 'dayjs';

const DocumentHistory = (props) => {
   const { usageType } = props;
   const [isLoading, setIsLoading] = useState(false);
   const [documents, setDocuments] = useState([]);
   const incomeEmrData = useSelector(selectCurrentEmrData);
   const getDocumentsHistory = async () => {
      setIsLoading(true);
      await DocumentsFormPatientSerice.getByDocument(incomeEmrData.patientId, {
         type: 'FORM',
         usageType: usageType
      })
         .then(
            ({
               data: {
                  response: { response }
               }
            }) => {
               setDocuments(response);
            }
         )
         .finally(() => {
            setIsLoading(false);
         });
   };
   useEffect(() => {
      getDocumentsHistory();
   }, []);
   return (
      <div>
         <Table
            rowKey={'_id'}
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
                  dataIndex: 'documentId',
                  render: (text) => {
                     return <span className="whitespace-pre-wrap">{ReturnByIdToCode(text)}</span>;
                  }
               },
               {
                  title: 'Огноо',
                  dataIndex: 'createdAt',
                  render: (text) => {
                     return dayjs(text).format('YYYY/MM/DD HH:mm');
                  }
               },
               {
                  title: 'засах',
                  dataIndex: '_id',
                  render: (text) => {
                     return <Button onClick={() => console.log(text)}>1</Button>;
                  }
               }
            ]}
            dataSource={documents}
            pagination={{
               simple: true
            }}
         />
      </div>
   );
};
export default DocumentHistory;
