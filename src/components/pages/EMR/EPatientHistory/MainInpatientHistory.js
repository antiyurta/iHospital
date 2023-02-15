import {
   Button,
   Collapse,
   Dropdown,
   Form,
   Input,
   Menu,
   Modal,
   Tabs
} from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../../../features/authReducer';
import Epicriz from '../../BeforeAmbulatory/Lists/Epicriz';
import Diagnose from '../../service/Diagnose';
import Index from '../InPatient/document/Index';
const { Panel } = Collapse;
const { TextArea } = Input;
function MainInpatientHistory() {
   const token = useSelector(selectCurrentToken);
   let location = useLocation();
   console.log(location);
   const inpatientRequestId = location?.state?.inpatientRequestId;
   const patientId = location?.state?.patientId;
   const [doctorDailyForm] = Form.useForm();
   const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false);
   const onFinishDaily = (values) => {
      var diagnoseData = [];
      values.diagnose?.map((diagnose) => {
         diagnoseData.push({
            patientId: patientId,
            usageType: 'IN',
            diagnoseId: diagnose.id,
            diagnoseType: diagnose.diagnoseType,
            inpatientRequestId: inpatientRequestId
         });
      });
      values['pain'] = JSON.stringify(values['pain']);
      values['question'] = JSON.stringify(values['question']);
      values['inspection'] = JSON.stringify(values['inspection']);
      values['plan'] = JSON.stringify(values['plan']);
      values['patientId'] = patientId;
      values['inpatientRequestId'] = inpatientRequestId;
      values['diagnoses'] = diagnoseData;
      console.log(values);
   };
   const DiagnoseHandleClick = (diagnoses) => {
      doctorDailyForm.setFieldValue('diagnose', diagnoses);
   };
   const DoctorDaily = () => {
      return (
         <div>
            <Form onFinish={onFinishDaily} form={doctorDailyForm}>
               <Collapse
                  Collapse
                  collapsible="header"
                  defaultActiveKey={[1]}
                  accordion
               >
                  <Panel key={1} header="Зовиурь">
                     <Form.Item name="pain">
                        <TextArea rows={5} placeholder="Зовиурь" />
                     </Form.Item>
                  </Panel>
                  <Panel key={2} header="Асуумж">
                     <Form.Item name="question">
                        <TextArea rows={5} placeholder="Асуумж" />
                     </Form.Item>
                  </Panel>
                  <Panel key={3} header="Бодит үзлэг">
                     <Form.Item name="inspection">
                        <TextArea rows={5} placeholder="Бодит үзлэг" />
                     </Form.Item>
                  </Panel>
                  <Panel key={4} header="Төлөвлөгөө">
                     <Form.Item name="plan">
                        <TextArea rows={5} placeholder="Төлөвлөгөө" />
                     </Form.Item>
                  </Panel>
                  <Panel key={5} header="Онош">
                     <Diagnose handleClick={DiagnoseHandleClick} />
                  </Panel>
               </Collapse>
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
      if (e.key == 1) {
         setItems([
            { label: 'Өдрийн тэмдэглэл', key: 1, children: <DoctorDaily /> }
         ]);
      } else if (e.key == 3) {
         setIsOpenDocumentModal(true);
      } else if (e.key == 7) {
         setItems([{ label: 'Гарах', key: 1, children: <Epicriz /> }]);
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
               label: 'Мэдээгүйжүүлэх'
            },
            {
               key: 5,
               label: 'Хэвтэх үеийн үзлэг'
            },
            {
               key: 6,
               label: 'Мэс засал'
            },
            {
               key: 7,
               label: 'Эмнэлгээс гаргах'
            }
         ]}
      />
   );
   const documentHandleClick = (document) => {
      setItems([document]);
      setIsOpenDocumentModal(false);
   };
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
            title="asdsa"
            open={isOpenDocumentModal}
            onCancel={() => setIsOpenDocumentModal(false)}
         >
            <Index handleClick={documentHandleClick} />
         </Modal>
      </div>
   );
}
export default MainInpatientHistory;