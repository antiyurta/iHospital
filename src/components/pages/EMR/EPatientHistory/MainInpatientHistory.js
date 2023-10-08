import { Button, Dropdown, Form, Input, Menu, Modal, Tabs, Tag, message, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentAppId, selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';
import Epicriz from '../../BeforeAmbulatory/Lists/Epicriz';
import Index from '../InPatient/document/Index';
import StoryGeneral from './StoryGeneral';
//
import Anamnesis from './MainInpatient/Anamnesis';
import ClinicalDiagnoeMain from './MainInpatient/ClinicalDiagnoseMain';
import Epicrisis from './MainInpatient/Epicrisis';
import { SnippetsOutlined } from '@ant-design/icons';
import jwtInterceopter from '../../../jwtInterceopter';
import DocumentShow from '../../611/DocumentShow';
import SentService from '../Insurance/sent-service';
//
const { TextArea } = Input;
const { CheckableTag } = Tag;
function MainInpatientHistory({ patientId, inpatientRequestId, deparmentId, serviceId }) {
   console.log('-------------->', serviceId);
   console.log('main inpatient story patientId =========>', patientId);
   const token = useSelector(selectCurrentToken);
   const AppIds = useSelector(selectCurrentAppId);
   const [checkedKey, setCheckedKey] = useState(0);
   const [doctorDailyForm] = Form.useForm();
   const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false);
   const [story, setStory] = useState({});
   const [dailyNotes, setDailyNotes] = useState([]);
   //
   const [documents, setDocuments] = useState([]);
   /** @description insurance connection start => */
   const [isInsuranceModal, setIsInsuranceModal] = useState(false);
   const testItems = [
      {
         key: '1',
         label: 'Эмчлүүлэгчийн аннамез',
         children: <Anamnesis PatientId={patientId} InpatientRequestId={inpatientRequestId} />
      },
      { key: '2', label: 'Ерөнхий үзлэг', children: <div>Ерөнхий үзлэг</div> },
      {
         key: '3',
         label: 'Эмчийн үзлэг',
         children: <div>Ерөнхий үзлэг</div>
      },
      {
         key: '4',
         label: 'КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ',
         children: <div>Ерөнхий үзлэг</div>
      },
      {
         key: '5',
         label: 'КЛИНИКИЙН ОНОШИЙН ҮНДЭСЛЭЛ',
         children: (
            <ClinicalDiagnoeMain PatientId={patientId} InpatientRequestId={inpatientRequestId} ServiceId={serviceId} />
         )
      },
      {
         key: '6',
         label: 'Үзлэгийн тэмдэглэл',
         children: <div>Ерөнхий үзлэг</div>
      },
      {
         key: '7',
         label: 'Гарах үеийн эпекриз',
         children: (
            <Epicrisis PatientId={patientId} InpatientRequestId={inpatientRequestId} InsuranceServiceId={serviceId} />
         )
      }
   ];

   const getStory = async () => {
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: inpatientRequestId
         }
      };
      var response = await Get('inpatient/story', token, conf);
      if (response.data.length > 0) {
         setStory(response.data[0]);
      }
   };
   const onFinishDaily = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      values['inpatientRequestId'] = inpatientRequestId;
      values['patientId'] = patientId;
      const response = await Post('inaptient-daily-note', token, conf, values);
   };
   const DiagnoseHandleClick = (diagnoses) => {
      doctorDailyForm.setFieldValue('diagnose', diagnoses);
   };
   const DoctorDaily = () => {
      return (
         <div>
            <Form onFinish={onFinishDaily} form={doctorDailyForm} layout="vertical">
               <Form.Item label="Үзлэгийн тэмдэглэл" name="description">
                  <TextArea rows={20} placeholder="Үзлэгийн тэмдэглэл" />
               </Form.Item>
               <Form.Item className="pt-2">
                  <Button type="primary" htmlType="submit">
                     Хадгалах
                  </Button>
               </Form.Item>
            </Form>
         </div>
      );
   };
   // const items = [
   //    { label: 'Өдрийн тэмдэглэл', key: 1, children: <DoctorDaily /> }
   // ];
   const [items, setItems] = useState([{ label: 'Өдрийн тэмдэглэл', key: 1, children: <DoctorDaily /> }]);
   const handleMenuClick = (e) => {
      getStory();
      if (e.key == 1) {
         setItems([{ label: 'Өдрийн тэмдэглэл', key: 1, children: <DoctorDaily /> }]);
      } else if (e.key == 2) {
         setItems([
            {
               label: 'Ерөнхий мэдээлэл',
               key: 1,
               children: (
                  <StoryGeneral
                     id={story.id}
                     patient={story.patient}
                     diagnoses={story.diagnoses}
                     anemis={story.anemis}
                     general={story.general}
                  />
               )
            }
         ]);
      } else if (e.key == 3) {
         setIsOpenDocumentModal(true);
      } else if (e.key == 6) {
         setItems([
            {
               label: 'Гарах',
               key: 1,
               children: <Epicriz />
            }
         ]);
      }
   };
   const documentHandleClick = (document) => {
      setItems([document]);
      setIsOpenDocumentModal(false);
   };
   const getDocuments = async () => {
      // setIsLoadingGetDocuments(true);
      const conf = {
         headers: {},
         params: {
            employeePositionIds: AppIds,
            structureId: deparmentId,
            usageType: 'IN',
            documentType: 0
         }
      };
      await jwtInterceopter
         .get('organization/document-role/show', conf)
         .then((response) => {
            if (response.data.response?.length === 0) {
               // openNofi('info', 'Анхааруулга', 'Таньд маягт алга');
            } else {
               var data = [];
               response.data.response?.map((item) =>
                  item?.documents?.map((document) => {
                     data.push(document);
                  })
               );
               console.log(data);
               setDocuments(data);
               // setDocuments(data);
               // setIsOpenAM(true);
               // setDocumentId(0);
            }
         })
         .catch((error) => {
            console.log(error);
         });
      // .finally(() => setIsLoadingGetDocuments(false));
   };
   const documentsMenu = <Menu onClick={(e) => console.log(e)} items={documents} />;
   useEffect(() => {
      // getStory();
      getDocuments();
   }, []);
   return (
      <div>
         <Button
            type="primary"
            onClick={() => getDocuments()}
            // loading={isLoadingGetDocuments}
            icon={<SnippetsOutlined />}
         >
            Маягт
         </Button>
         <Button type="ghost" onClick={() => setIsInsuranceModal(true)}>
            Даатгал
         </Button>
         <Dropdown
            overlay={documentsMenu}
            trigger={['click']}
            arrow={{
               pointAtCenter: true
            }}
         >
            <Button
               type="link"
               style={{
                  paddingTop: 0
               }}
               className="ant-dropdown-link"
               onClick={(e) => e.preventDefault()}
            >
               Маягтийн жагсаалт
            </Button>
         </Dropdown>
         <DocumentShow
            props={{
               appIds: AppIds,
               deparmentId: deparmentId,
               usageType: 'IN',
               documentType: 0
            }}
         />
         <div>
            <Tabs type="card" items={testItems} />
         </div>
         <Modal title="Маягт сонгох" open={isOpenDocumentModal} onCancel={() => setIsOpenDocumentModal(false)}>
            <Index
               handleClick={documentHandleClick}
               structureId={location?.state?.dapartmentId}
               story={story}
               id={story.id}
               doctorInspection={story.doctorInspection}
            />
         </Modal>
         <Modal
            title="Даатгалын сервисүүд"
            width={1000}
            open={isInsuranceModal}
            onCancel={() => setIsInsuranceModal(false)}
         >
            <SentService />
         </Modal>
      </div>
   );
}
export default MainInpatientHistory;
