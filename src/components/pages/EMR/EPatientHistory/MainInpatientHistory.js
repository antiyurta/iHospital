import {
   Button,
   Collapse,
   Dropdown,
   Form,
   Input,
   Menu,
   Modal,
   Spin,
   Tabs
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, Post } from '../../../comman';
import Epicriz from '../../BeforeAmbulatory/Lists/Epicriz';
import Diagnose from '../../service/Diagnose';
import Index from '../InPatient/document/Index';
import StoryGeneral from './StoryGeneral';
const { TextArea } = Input;
function MainInpatientHistory({ selectedPatient }) {
   const token = useSelector(selectCurrentToken);
   let location = useLocation();
   const inpatientRequestId = location?.state?.inpatientRequestId;
   const patientId = location?.state?.patientId;
   const [doctorDailyForm] = Form.useForm();
   const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false);
   const [story, setStory] = useState({});
   const [dailyNotes, setDailyNotes] = useState([]);
   const getStory = async () => {
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: location?.state?.inpatientRequestId
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
      values['inpatientRequestId'] = location?.state?.inpatientRequestId;
      values['patientId'] = location?.state?.patientId;
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
      } else if (e.key == 7) {
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
   useEffect(() => {
      getStory();
   }, []);
   return (
      <div>
         <div>
            <Dropdown overlay={menu} trigger={['click']}>
               <Button
                  type="primary"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
               >
                  Маягт сонгох
               </Button>
            </Dropdown>
         </div>
         <div>
            <Tabs type="card" items={items} />
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
