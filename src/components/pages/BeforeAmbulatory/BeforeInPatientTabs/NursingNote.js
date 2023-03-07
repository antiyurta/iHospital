import { Button, Card, Checkbox, Form, Input, Modal } from 'antd';
import { PrinterOutlined, ReloadOutlined } from '@ant-design/icons';
import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, getAge, Patch, Post } from '../../../comman';
import { useReactToPrint } from 'react-to-print';
import { useLocation } from 'react-router-dom';

const { TextArea } = Input;
function NursingNote({ PatientId, ListId, PatientData }) {
   let location = useLocation();
   const [form] = Form.useForm();
   const [secondForm] = Form.useForm();
   const printRef = useRef();
   const token = useSelector(selectCurrentToken);
   const [spinner, setSpinner] = useState(false);
   const [printLoading, setPrintLoading] = useState(false);
   const [nursingNotes, setNursingNotes] = useState([]);
   const [isOpenNoteModal, setIsOpenNoteModal] = useState(false);
   const [isOpenSecond, setIsOpenSecond] = useState(false);
   const [id, setId] = useState(Number);
   const getNursingNote = async () => {
      setSpinner(true);
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: ListId,
            pageInSize: 4
         }
      };
      const response = await Get('inpatient/nursing-note', token, conf);
      setNursingNotes(response);
      setSpinner(false);
   };
   const onFinish = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      const data = {
         patientId: PatientId,
         // conclusion: values.conclusion,
         date: values.date,
         // implemented: values.implemented,
         issueNumber: values.issueNumber,
         nandaCode: values.nandaCode,
         nursingPlan: values.nursingPlan,
         purpose: values.purpose,
         inpatientRequestId: ListId
      };
      const response = await Post('inpatient/nursing-note', token, conf, data);
      if (response === 201) {
         getNursingNote();
         setIsOpenNoteModal(false);
      }
   };
   const onUpdate = async (values) => {
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Patch(
         'inpatient/nursing-note/' + id,
         token,
         conf,
         values
      );
      if (response === 200) {
         getNursingNote();
         setIsOpenSecond(false);
      }
   };
   useEffect(() => {
      getNursingNote();
   }, [PatientId]);

   const handlePrint = useReactToPrint({
      onBeforeGetContent: () => setPrintLoading(true),
      onBeforePrint: () => setPrintLoading(false),
      onPrintError: () => console.log('asda'),
      content: () => printRef.current
   });
   return (
      <Card
         bordered={false}
         className="header-solid max-h-max rounded-md"
         bodyStyle={{
            padding: 7
         }}
      >
         <div className="flex flex-wrap">
            <div className="w-full p-1">
               <div className="float-left">
                  <Button
                     type="primary"
                     onClick={() => {
                        setIsOpenNoteModal(true), form.resetFields();
                     }}
                  >
                     Тэмдэглэл бичих
                  </Button>
                  <Button
                     className="ml-2"
                     icon={<PrinterOutlined />}
                     onClick={handlePrint}
                     loading={printLoading}
                  >
                     Хэвлэх
                  </Button>
               </div>
               <div className="float-right">
                  <Button
                     title="Сэргээх"
                     type="primary"
                     onClick={() => getNursingNote(1, 10, start, end)}
                  >
                     <ReloadOutlined spin={spinner} />
                  </Button>
               </div>
            </div>
            <div className="w-full p-1">
               <div ref={printRef}>
                  {nursingNotes?.map((note, idx) => {
                     return (
                        <div key={idx} className="page">
                           <div className="subpage">
                              <div className="flow-root">
                                 <p
                                    className="float-right"
                                    style={{ fontSize: 14 }}
                                 >
                                    СМ-2-Хавсралт 12
                                 </p>
                              </div>
                              <p
                                 className="font-bold text-center"
                                 style={{ fontSize: 16 }}
                              >
                                 СУВИЛГААНЫ ТЭМДЭГЛЭЛ
                              </p>
                              <div className="flow-root py-1">
                                 <div className="float-left inline-flex">
                                    <p style={{ fontSize: 14 }}>
                                       Эмчлүүлэгчийн овог, нэр:
                                    </p>
                                    <p style={{ fontSize: 14 }}>
                                       {PatientData?.lastName.substring(0, 1) +
                                          '.' +
                                          PatientData?.firstName}
                                    </p>
                                 </div>
                                 <div className="float-right inline-flex">
                                    <p style={{ fontSize: 14 }}>Нас:</p>
                                    <p style={{ fontSize: 14 }}>
                                       {getAge(PatientData?.registerNumber)}
                                    </p>
                                    <p
                                       style={{ fontSize: 14 }}
                                       className="pl-1"
                                    >
                                       Хүйс:
                                    </p>
                                    <p style={{ fontSize: 14 }}>
                                       {PatientData?.genderType === 'MAN'
                                          ? 'Эр'
                                          : 'Эм'}
                                    </p>
                                    <p
                                       style={{ fontSize: 14 }}
                                       className="pl-1"
                                    >
                                       Тасаг:
                                    </p>
                                    <p style={{ fontSize: 14 }}>
                                       {location?.state?.departmentName}
                                    </p>
                                    <p
                                       style={{ fontSize: 14 }}
                                       className="pl-1"
                                    >
                                       Өрөө:
                                    </p>
                                    <p style={{ fontSize: 14 }}>
                                       {location?.state?.roomNumber}
                                    </p>
                                 </div>
                              </div>
                              <div className="flex flex-wrap">
                                 <div className="basis-1/12 amaraDeer amaraBaruun amaraZuun amaraDoor">
                                    <p className="font-bold text-center">
                                       Огноо/ цаг
                                    </p>
                                 </div>
                                 <div className="basis-2/12 amaraDeer amaraBaruun amaraDoor">
                                    <p className="font-bold text-center">
                                       Асуудлын дугаар #
                                    </p>
                                 </div>
                                 <div className="basis-3/12 amaraDeer amaraBaruun amaraDoor">
                                    <p className="font-bold text-center">
                                       Сувилах төлөвлөгөө
                                    </p>
                                 </div>
                                 <div className="basis-6/12 amaraDeer amaraDoor amaraBaruun">
                                    <p className="font-bold text-center">
                                       Хэрэгжүүлэлт/Дүгнэлт
                                    </p>
                                 </div>
                              </div>
                              {note?.map((el, index) => {
                                 return (
                                    <div
                                       key={index}
                                       className="flex flex-wrap"
                                       style={{ height: 215 }}
                                    >
                                       <div
                                          className="basis-1/12 amaraDoor amaraBaruun amaraZuun"
                                          style={{
                                             writingMode: 'vertical-rl',
                                             textAlign: 'center',
                                             verticalAlign: 'middle',
                                             fontWeight: 'bold',
                                             paddingRight: 15
                                          }}
                                       >
                                          {moment(el.createdAt).format(
                                             'YYYY-MM-DD HH:mm'
                                          )}
                                       </div>
                                       <div className="basis-2/12 amaraDoor amaraBaruun">
                                          <div
                                             className="grid grid-flow-col"
                                             style={{
                                                gridTemplateRows:
                                                   'repeat(7,minmax(0,1fr))'
                                             }}
                                          >
                                             {el?.issueNumber?.map(
                                                (number, index) => {
                                                   return (
                                                      <div key={index}>
                                                         <p
                                                            style={{
                                                               fontSize: 11
                                                            }}
                                                         >
                                                            {number}
                                                         </p>
                                                      </div>
                                                   );
                                                }
                                             )}
                                          </div>
                                       </div>
                                       <div className="basis-3/12 amaraDoor amaraBaruun">
                                          <p style={{ fontSize: 11 }}>
                                             {el.nursingPlan}
                                          </p>
                                       </div>
                                       <div className="basis-6/12 amaraDoor amaraBaruun">
                                          {el.conclusion === null &&
                                          el.implemented === null ? (
                                             <div className="text-center">
                                                <Button
                                                   type="primary"
                                                   onClick={() => {
                                                      setIsOpenSecond(true);
                                                      setId(el.id);
                                                      secondForm.resetFields();
                                                   }}
                                                >
                                                   Хэрэгжүүлсэн/ дүгнэлт бичих
                                                </Button>
                                             </div>
                                          ) : (
                                             <>
                                                <p
                                                   className="font-bold"
                                                   style={{ fontSize: 11 }}
                                                >
                                                   Хэрэгжүүлсэн:
                                                </p>
                                                <p style={{ fontSize: 11 }}>
                                                   {el.conclusion}
                                                </p>
                                                <p
                                                   className="font-bold"
                                                   style={{ fontSize: 11 }}
                                                >
                                                   Дүгнэлт:
                                                </p>
                                                <p style={{ fontSize: 11 }}>
                                                   {el.implemented}
                                                </p>
                                                <p
                                                   style={{ fontSize: 11 }}
                                                   className="amaraDeer"
                                                >
                                                   Сувилагчийн нэр:
                                                   {`${el?.createdLastName?.substr(
                                                      0,
                                                      1
                                                   )}. ${el?.createdFirstName}`}
                                                </p>
                                             </>
                                          )}
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
         <Modal
            open={isOpenNoteModal}
            title="Сувилгааны тэмдэглэл бичих"
            onCancel={() => setIsOpenNoteModal(false)}
            onOk={() => {
               form.validateFields().then((values) => {
                  onFinish(values);
               });
            }}
            cancelText="Болих"
            okText="Хадгалах"
            width={'35cm'}
         >
            <Form form={form} layout="vertical">
               <div className="flex flex-wrap">
                  <div className="w-full">
                     <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                        <div className="p-1">
                           <Form.Item
                              label="Асуудлын дугаар"
                              name="issueNumber"
                              rules={[{ required: true, message: 'Заавал' }]}
                           >
                              <Checkbox.Group>
                                 <div className="flex flex-wrap">
                                    <div className="basis-1/5">
                                       <Checkbox className="ml-2" value={'#1'}>
                                          #1 Амьсгалах хэв маягийн өөрчлөлт
                                       </Checkbox>
                                       <Checkbox value={'#2'}>
                                          #2. Хийн солилцоо алдагдсан
                                       </Checkbox>
                                       <Checkbox value={'#3'}>
                                          #3. Амьсгалын замын цэвэршилт
                                          алдагдсан
                                       </Checkbox>
                                       <Checkbox value={'#4'}>
                                          #4. Хөдөлгөөний алдагдсан
                                       </Checkbox>
                                       <Checkbox value={'#5'}>
                                          #5. Ядаргаа
                                       </Checkbox>
                                       <Checkbox value={'#7'}>
                                          #7. Шокын эрсдэл
                                       </Checkbox>
                                       <Checkbox value={'#8'}>
                                          #8. Захын мэдрэлийн үйл ажиллагаа
                                          алдагдах эрсдэл
                                       </Checkbox>
                                       <Checkbox value={'#9'}>
                                          #9. Нойр хулжих
                                       </Checkbox>
                                       <Checkbox value={'#10'}>
                                          #10. Нойргүйдэл
                                       </Checkbox>
                                       <Checkbox value={'#11'}>
                                          #11. Хөдөлгөөн муудсан (ор, биеийн,
                                          шилжих, тэргэнцэр)
                                       </Checkbox>
                                    </div>
                                    <div className="basis-1/5">
                                       <Checkbox className="ml-2" value={'#12'}>
                                          #12. Тамиргүйдэх
                                       </Checkbox>
                                       <Checkbox value={'#13'}>
                                          #13. Амны салст бүрхүүл гэмтсэн
                                       </Checkbox>
                                       <Checkbox value={'#14'}>
                                          #14. Хоол тэжээлийн тэнцвэр алдагдсан:
                                          Бие махбодид шаардлагатай хэмжээнээс
                                          их
                                       </Checkbox>
                                       <Checkbox value={'#15'}>
                                          #15. Хоол тэжээлийн тэнцвэр алдагдсан:
                                          Бие махбодид шаардлагатай хэмжээнээс
                                          бага
                                       </Checkbox>
                                       <Checkbox value={'#16'}>
                                          #16. Залгих чадварын алдагдал
                                       </Checkbox>
                                       <Checkbox value={'#17'}>
                                          #17. Бөглөрөх эрсдэл
                                       </Checkbox>
                                       <Checkbox value={'#18'}>
                                          #18. Бөөлжис цутгах
                                       </Checkbox>
                                       <Checkbox value={'#19'}>
                                          #19. Шингэний хэмжээ ихсэлт
                                       </Checkbox>
                                       <Checkbox value={'#20'}>
                                          #20. Шингэний дутагдал
                                       </Checkbox>
                                    </div>
                                    <div className="basis-1/5">
                                       <Checkbox className="ml-2" value={'#21'}>
                                          #21. Өтгөн хаталт
                                       </Checkbox>
                                       <Checkbox value={'#22'}>
                                          #22. Суулгалт
                                       </Checkbox>
                                       <Checkbox value={'#23'}>
                                          #23. Агаарын солилцооны алдагдал
                                       </Checkbox>
                                       <Checkbox value={'#24'}>
                                          #24. Цусан дахь сахарын хэмжээ
                                          тогтворгүйжих эрсдэл
                                       </Checkbox>
                                       <Checkbox value={'#25'}>
                                          #25. Шээс алдалт
                                       </Checkbox>
                                       <Checkbox value={'#26'}>
                                          #26. Шээс хаагдсан
                                       </Checkbox>
                                       <Checkbox value={'#27'}>
                                          #27. Шээс ялгаруулалт саатсан
                                       </Checkbox>
                                       <Checkbox value={'#28'}>
                                          #28. Цус алдах эрсдэл
                                       </Checkbox>
                                       <Checkbox value={'#29'}>
                                          #29. Хялдварын эрсдэл
                                       </Checkbox>
                                       <Checkbox value={'#30'}>
                                          #30. Арьсны бүрэн бүтэн байдал
                                          алдагдал
                                       </Checkbox>
                                    </div>
                                    <div className="basis-1/5">
                                       <Checkbox className="ml-2" value={'#31'}>
                                          #31. Эдийн бүрэн бүтэн байдал алдагдал
                                       </Checkbox>
                                       <Checkbox value={'#32'}>
                                          #32. Тодосгогч бодисонд харшлах
                                       </Checkbox>
                                       <Checkbox value={'#33'}>
                                          #33. Халуурах
                                       </Checkbox>
                                       <Checkbox value={'#34'}>
                                          #34. Халуун буурах
                                       </Checkbox>
                                       <Checkbox value={'#35'}>
                                          #35. Будилуу болох (цочмог, архаг)
                                       </Checkbox>
                                       <Checkbox value={'#36'}>
                                          #36. Ой санамж муудсан
                                       </Checkbox>
                                       <Checkbox value={'#37'}>
                                          #37. Ярих чадвар саатсан
                                       </Checkbox>
                                       <Checkbox value={'#38'}>
                                          #38. Тархины дасан зохицох чадвар
                                          буурсан
                                       </Checkbox>
                                       <Checkbox value={'#39'}>
                                          #39. Өвдөлт
                                       </Checkbox>
                                       <Checkbox value={'#40'}>
                                          #40. Сэтгэл түгших
                                       </Checkbox>
                                       <Checkbox
                                          className="w-full"
                                          value={'#41'}
                                       >
                                          #41. Айдас
                                       </Checkbox>
                                    </div>
                                    <div className="basis-1/5">
                                       <Checkbox className="ml-2" value={'#42'}>
                                          #42. Гашуудах
                                       </Checkbox>
                                       <Checkbox value={'#43'}>
                                          #43. Итгэл алдарсан
                                       </Checkbox>
                                       <Checkbox value={'#44'}>
                                          #44. Ганцаардах эрсдэл
                                       </Checkbox>
                                       <Checkbox value={'#45'}>
                                          #45. Өөрийгөө зөв үнэлж чадахгүй
                                          болсон
                                       </Checkbox>
                                       <Checkbox value={'#46'}>
                                          #46. ЭМБ-ын мэдлэг олгох шаардлагатай
                                       </Checkbox>
                                       <Checkbox value={'#47'}>
                                          #47. Хувийн эрүүл мэндээ зохицуулах
                                          чадваргүй болсон
                                       </Checkbox>
                                       <Checkbox value={'#48'}>
                                          #48. Мэдлэгийн дутагдал
                                       </Checkbox>
                                       <Checkbox value={'#49'}>
                                          #49. Өөрийгөө асрах чадваргүй болсон
                                          (усанд орох, хувцаслах, хооллох,бие
                                          засах)
                                       </Checkbox>
                                       <Checkbox value={'#50'}>
                                          #50. Алхах чадвар алдагдсан
                                       </Checkbox>
                                    </div>
                                 </div>
                              </Checkbox.Group>
                           </Form.Item>
                        </div>
                     </div>
                  </div>
                  <div className="w-full p-1">
                     <Form.Item
                        label="Сувлахуйн төлөвлөгөө"
                        name="nursingPlan"
                        rules={[{ required: true, message: 'Заавал' }]}
                     >
                        <TextArea />
                     </Form.Item>
                  </div>
               </div>
            </Form>
         </Modal>
         <Modal
            title={'Хэрэгжүүлсэн/Дүгнэлт бичих'}
            open={isOpenSecond}
            onOk={() =>
               secondForm.validateFields().then((values) => onUpdate(values))
            }
            onCancel={() => setIsOpenSecond(false)}
            cancelText="Болих"
            okText="Хадгалах"
         >
            <Form form={secondForm} layout="vertical">
               <Form.Item
                  label="Хэрэгжүүлэлт:"
                  name="conclusion"
                  rules={[{ required: true, message: 'Заавал' }]}
               >
                  <TextArea />
               </Form.Item>
               <Form.Item
                  label="Дүгнэлт:"
                  name="implemented"
                  rules={[{ required: true, message: 'Заавал' }]}
               >
                  <TextArea />
               </Form.Item>
            </Form>
         </Modal>
      </Card>
   );
}
export default NursingNote;
