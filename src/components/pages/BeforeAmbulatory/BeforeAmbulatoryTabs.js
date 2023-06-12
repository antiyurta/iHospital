//Амбулаторийн үзлэгийн өмнөх жагсаалтын доор байрлах TAB ууд
import React, { useEffect, useState } from 'react';
import { Card, Segmented, Tabs } from 'antd';
import EarlyWarning from './EarlyWarning';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentDepId } from '../../../features/authReducer';
import jwtInterceopter from '../../jwtInterceopter';

import Customized from './Customized/Index';
import { openNofi } from '../../comman';

export default function BeforeAmbulatoryTabs({ patientId, type, structureId, listId }) {
   const AppIds = useSelector(selectCurrentAppId);
   const [documents, setDocuments] = useState([]);
   const [documentId, setDocumentId] = useState(0);
   var items = [
      {
         label: 'Эрт сэрэмжлүүлэх үнэлгээ',
         key: 'item-1',
         children: <EarlyWarning PatientId={patientId} UsageType={'OUT'} />
      }
      // {
      //   label: "Эмчилгээ",
      //   key: "item-2",
      //   // children: <EarlyWarning PatientId={patientId} listId={listId} />,
      // }
      // {
      //   label: "Өвчтөний түүх",
      //   key: "item-2",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Лаборатори",
      //   key: "item-3",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Тэмдэглэл хөтлөх",
      //   key: "item-4",
      //   children: <EarlyWarning />,
      // },
      // {
      //   label: "Суурь үнэлгээ",
      //   key: "item-5",
      //   children: <EarlyWarning />,
      // },
   ];
   var testItems = [
      {
         label: 'Эрт сэрэмжлүүлэх үнэлгээ',
         value: 1,
         children: <EarlyWarning PatientId={patientId} UsageType={'OUT'} />
      }
   ];
   const getDocuments = async () => {
      const conf = {
         headers: {},
         params: {
            employeePositionIds: AppIds,
            structureId: structureId,
            usageType: 'OUT',
            documentType: 0
         }
      };
      await jwtInterceopter.get('organization/document-role/show', conf).then((response) => {
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
            // setIsOpenAM(true);
            setDocumentId(0);
         }
      });
   };
   useEffect(() => {
      if (structureId) {
         getDocuments();
      }
   }, [structureId]);
   if (type) {
      return (
         <>
            <Card
               bordered={false}
               className="header-solid max-h-max rounded-md"
               bodyStyle={{
                  paddingTop: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 10
               }}
            >
               <Segmented
                  className="department-bed-segment"
                  size="small"
                  options={documents}
                  onChange={(e) => setDocumentId(e)}
               />
               <Customized
                  usageType={'OUT'}
                  documentValue={documentId}
                  structureId={structureId}
                  appointmentId={listId}
                  patientId={patientId}
               />
            </Card>
            <Tabs type="card" size="small" items={items} />
         </>
      );
   }
}
