import {
   Button,
   Collapse,
   Dropdown,
   Form,
   Input,
   Menu,
   Modal,
   Spin,
   Tabs,
   Tag
} from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';
import Epicriz from '../../BeforeAmbulatory/Lists/Epicriz';
import Diagnose from '../../service/Diagnose';
import Index from '../InPatient/document/Index';
import StoryGeneral from './StoryGeneral';
//
import Anamnesis from './MainInpatient/Anamnesis';
import ClinicalDiagnoeMain from './MainInpatient/ClinicalDiagnoseMain';
import Epicrisis from './MainInpatient/Epicrisis';
//
const { TextArea } = Input;
const { CheckableTag } = Tag;
function MainInpatientHistory({
   patientId,
   inpatientRequestId,
   insuranceServiceId
}) {
   const token = useSelector(selectCurrentToken);
   const [checkedKey, setCheckedKey] = useState(0);
   const [doctorDailyForm] = Form.useForm();
   const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false);
   const [story, setStory] = useState({});
   const [dailyNotes, setDailyNotes] = useState([]);
   const testItems = [
      {
         key: '1',
         label: 'Эмчлүүлэгчийн аннамез',
         children: (
            <Anamnesis
               PatientId={patientId}
               InpatientRequestId={inpatientRequestId}
            />
         )
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
            <ClinicalDiagnoeMain
               PatientId={patientId}
               InpatientRequestId={inpatientRequestId}
            />
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
            <Epicrisis
               PatientId={patientId}
               InpatientRequestId={inpatientRequestId}
               InsuranceServiceId={insuranceServiceId}
            />
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
            <Form
               onFinish={onFinishDaily}
               form={doctorDailyForm}
               layout="vertical"
            >
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
   const [items, setItems] = useState([
      { label: 'Өдрийн тэмдэглэл', key: 1, children: <DoctorDaily /> }
   ]);
   const handleMenuClick = (e) => {
      getStory();
      if (e.key == 1) {
         setItems([
            { label: 'Өдрийн тэмдэглэл', key: 1, children: <DoctorDaily /> }
         ]);
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
   const menu = (
      <Menu
         onClick={handleMenuClick}
         items={[
            {
               key: 1,
               label: 'Өдрийн тэмдэглэл'
            },
            {
               key: 2,
               label: 'Шилжүүлэх үеийн үзлэг'
            },
            {
               key: 3,
               label: 'Хэвтэх үеийн үзлэг'
            },
            {
               key: 4,
               label: 'Мэдээгүйжүүлэг'
            },
            {
               key: 5,
               label: 'Мэс засал'
            },
            {
               key: 6,
               label: 'Эмнэлгээс гаргах'
            }
         ]}
      />
   );
   const documentHandleClick = (document) => {
      setItems([document]);
      setIsOpenDocumentModal(false);
   };
   const Render = () => {
      return <div className="p-2">{testItems[checkedKey].children}</div>;
   };
   useEffect(() => {
      // getStory();
   }, []);
   return (
      <div>
         <div>
            <Tabs type="card" items={testItems} />
         </div>
         <Modal
            title="Маягт сонгох"
            open={isOpenDocumentModal}
            onCancel={() => setIsOpenDocumentModal(false)}
         >
            <Index
               handleClick={documentHandleClick}
               structureId={location?.state?.dapartmentId}
               story={story}
               id={story.id}
               doctorInspection={story.doctorInspection}
            />
         </Modal>
      </div>
   );
}
export default MainInpatientHistory;
