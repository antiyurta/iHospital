// import Endocrinology from './Endocrinology';
import Endocrinology from './Endocrinology/Index'; // // ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ЭМЧИЙН ҮЗЛЭГ
import Rebuildd from './Rebuild'; // СЭРГЭЭН ЗАСАХЫН ЭМЧИЙН ҮЗЛЭГ
import InternalMedicine from './InternalMedicine/Index'; // ДОТРЫН ЭМЧИЙН ҮЗЛЭГ
import Otolaryngologist from './Otolaryngologist/Index'; // ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ
import Traditional from './Traditional/Index'; // Уламжлалт
import Cardiologist from './Cardiologist/Index'; // ЗҮРХНИЙ ЭМЧИЙН ҮЗЛЭГ
import Traumatologist from './Traumatologist/Index'; // ГЭМТЛИЙН ЭМЧИЙН ҮЗЛЭГ
import Gynecologist from './Gynecologist/Index'; // Эмэгтэйчүүд
import GeneralPhysical from './GeneralPhysical/Index'; //Ерөнхий үзлэг
import Dermatologist from './Dermatologist/Index'; // арьсны эмч
import Hematologist from './Hematologist/Index'; // цусны эмч
import Ophthalmologist from './Ophthalmologist/Index'; // нүдний эмч
import Gastroenterologist from './Gastroenterologist/Index'; // хоол боловсруулах эрхтний
import Neurologist from './Neurologist/Index'; // Мэдрэлийн эмчийн үзлэг
import Rebuild from './Rebuild/Index';
import { Button, Checkbox, Collapse, Form, Input } from 'antd';
import Painstory from './painStory/Index';
import { useEffect } from 'react';
import { DefaultPatch, Get } from '../../../../comman';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../../features/authReducer';
import { useState } from 'react';
import StoryGeneral from '../../EPatientHistory/StoryGeneral';
import Step1 from '../../EPatientHistory/story/Step1';
import Step2 from '../../EPatientHistory/story/Step2';
import Step3 from '../../EPatientHistory/story/Step3';
const { TextArea } = Input;
const { Panel } = Collapse;
function Index({ handleClick, structureId, story, id, doctorInspection }) {
   /// id nas depId ym ennes hamarch hewleh maygt oor2 bn
   const token = useSelector(selectCurrentToken);
   const [notes, setNotes] = useState([]);
   const [form] = Form.useForm();
   form.setFieldsValue(story);
   form.setFieldValue('doctorInspection', story.doctorInspection);
   const onFinish = async (values, templateId) => {
      const data = {
         templateId: templateId,
         doctorInspection: JSON.stringify(values.doctorInspection),
         anemis: values.anemis,
         diagnoses: values.diagnoses,
         general: values.general,
         patient: values.patient
      };
      const conf = {
         headers: {},
         params: {}
      };
      console.log(data);
      //   values['doctorInspection'] = JSON.stringify(values['doctorInspection']);
      //   values['templateId'] = 1;
      const response = await DefaultPatch(
         'inpatient/story/' + id,
         token,
         conf,
         data
      );
   };
   const onFinishFailed = (error) => {
      console.log(error);
   };
   const Render = ({ data, templateId }) => {
      console.log(templateId);
      return (
         <Form
            layout="vertical"
            form={form}
            onFinish={(values) => onFinish(values, templateId)}
            onFinishFailed={onFinishFailed}
         >
            <Collapse accordion defaultActiveKey={['1']}>
               <Panel header="ӨВЧНИЙ ТҮҮХ" key="1" forceRender={true}>
                  <Step1 form={form} templateId={templateId} />
               </Panel>
               <Panel header="Эмчлүүлэгчийн анамнез" key="2" forceRender={true}>
                  <Step2 templateId={templateId} />
               </Panel>
               <Panel header="ЕРӨНХИЙ ҮЗЛЭГ" key="3" forceRender={true}>
                  <Step3 id={templateId} />
               </Panel>
               <Panel header="ЭМЧИЙН ҮЗЛЭГ" key="4" forceRender={true}>
                  <div className="flex flex-wrap">
                     {data.pain?.map((pain, index) => {
                        return (
                           <div key={index} className="w-full p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <p className="p-1 font-bold">
                                    {pain.label ? pain.label : ''}
                                 </p>
                                 {pain.options?.length > 0 && (
                                    <div className="flex flex-wrap">
                                       {pain.options.map((option, idx) => {
                                          if (option.type === 'textarea') {
                                             return (
                                                <div
                                                   key={idx}
                                                   className="w-full"
                                                >
                                                   <div className="p-1">
                                                      <Form.Item
                                                         label={option.value}
                                                         name={[
                                                            'doctorInspection',
                                                            option.keyWord
                                                         ]}
                                                         className="mb-0"
                                                      >
                                                         <TextArea />
                                                      </Form.Item>
                                                   </div>
                                                </div>
                                             );
                                          } else {
                                             return (
                                                <div
                                                   key={idx}
                                                   className="w-1/4"
                                                >
                                                   <div className="p-1">
                                                      <Form.Item
                                                         label={option.value}
                                                         name={[
                                                            'doctorInspection',
                                                            option.keyWord
                                                         ]}
                                                         className="mb-0"
                                                      >
                                                         {option.type ===
                                                         'checkbox' ? (
                                                            <Checkbox.Group className="align-middle grid">
                                                               {option.options?.map(
                                                                  (
                                                                     el,
                                                                     index
                                                                  ) => {
                                                                     return (
                                                                        <Checkbox
                                                                           className="pl-1 ml-0"
                                                                           value={
                                                                              index
                                                                           }
                                                                           key={
                                                                              index
                                                                           }
                                                                        >
                                                                           {
                                                                              el.label
                                                                           }
                                                                        </Checkbox>
                                                                     );
                                                                  }
                                                               )}
                                                            </Checkbox.Group>
                                                         ) : (
                                                            <Input />
                                                         )}
                                                      </Form.Item>
                                                   </div>
                                                </div>
                                             );
                                          }
                                       })}
                                    </div>
                                 )}
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </Panel>
            </Collapse>
            <Form.Item
               wrapperCol={{
                  offset: 8,
                  span: 16
               }}
            >
               <Button type="primary" htmlType="submit">
                  Submit
               </Button>
            </Form.Item>
         </Form>
      );
   };
   const getInspectionNotes = async () => {
      const conf = {
         headers: {},
         params: {
            usageType: 'IN',
            structureId: structureId
         }
      };
      const response = await Get('emr/inspection-form', token, conf);
      response.data?.map((note, index) => {
         setNotes((notes) => [
            ...notes,
            {
               label: note.name,
               key: index,
               children: (
                  <Render data={note.formItem} templateId={note.formId} />
               )
            }
         ]);
      });
   };
   useEffect(() => {
      getInspectionNotes();
   }, []);
   return (
      <>
         {/* {data.inpatientRequestId === 31 && <Rebuild data={data} />} */}
         {/* {id === 31 && <Rebuild data={data} />} */}
         {/* {id === 2 && <Endocrinology data={data} />} */}
         {/* <Rebuild data={data} /> */}
         {notes.map((item) => {
            return (
               <Button key={item.key} onClick={() => handleClick(item)}>
                  {item.label}
               </Button>
            );
         })}
      </>
   );
}
export default Index;
