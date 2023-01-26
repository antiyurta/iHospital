import {
   CheckOutlined,
   CloseOutlined,
   PrinterOutlined
} from '@ant-design/icons';
import {
   Button,
   Card,
   Collapse,
   Divider,
   Form,
   List,
   Modal,
   notification,
   Radio,
   Select,
   Space
} from 'antd';
import moment from 'moment';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { selectCurrentToken } from '../../../../features/authReducer';
import { Get, getAge, openNofi, Post } from '../../../comman';
import Page1 from './BodyConditionSheet/Page1';
import Page2 from './BodyConditionSheet/Page2';
const { Panel } = Collapse;
function BodyConditionSheet({ PatientId, ListId, PatientData }) {
   const [bodyForm] = Form.useForm();
   const printRef = useRef();
   const [sheets, setSheets] = useState([]);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [printLoading, setPrintLoading] = useState(false);
   const token = useSelector(selectCurrentToken);
   const onFailed = async (errorInfo) => {
      var string = '';
      var daily = false;
      var respiratory = false;
      var indigestion = false;
      var pee = false;
      var skin = false;
      var mind = false;
      var nursing = false;
      errorInfo?.errorFields?.map((err) => {
         if (err.name[0] === 'daily' && !daily) {
            daily = true;
            string = 'Өдөр тутмын сувилгаа дутуу';
            openNofi('warning', 'Бөглөх', string);
         } else if (err.name[0] === 'respiratory' && !respiratory) {
            respiratory = true;
            string = 'Амьсгал/Зүрх судас дутуу';
            openNofi('warning', 'Бөглөх', string);
         } else if (err.name[0] === 'indigestion' && !indigestion) {
            indigestion = true;
            string = 'Хоол боловсруулалт дутуу';
            openNofi('warning', 'Бөглөх', string);
         } else if (err.name[0] === 'pee' && !pee) {
            pee = true;
            string = 'Шээс ялгаруулалт дутуу';
            openNofi('warning', 'Бөглөх', string);
         } else if (err.name[0] === 'skin' && !skin) {
            skin = true;
            string = 'Арьс дутуу';
            openNofi('warning', 'Бөглөх', string);
         } else if (err.name[0] === 'mind' && !mind) {
            mind = true;
            string = 'Мэдрэл, сэтгэхүйн байдал дутуу';
            openNofi('warning', 'Бөглөх', string);
         } else if (err.name[0] === 'nursing' && !nursing) {
            nursing = true;
            string = 'Сувилгааны асуудал дутуу';
            openNofi('warning', 'Бөглөх', string);
         }
      });
   };
   const onFinish = async (values) => {
      console.log(values);
      const data = {
         patientId: PatientId,
         inpatientRequestId: ListId,
         daily: values.daily,
         respiratory: values.respiratory,
         indigestion: values.indigestion,
         pee: values.pee,
         skin: values.skin,
         mind: values.mind,
         nursing: values.nursing
      };
      const conf = {
         headers: {},
         params: {}
      };
      const response = await Post(
         'inpatient/physical-assesment',
         token,
         conf,
         data
      );
      console.log(response);
      if (response === 201) {
         setIsOpenModal(false);
         bodyForm.resetFields();
         getPhysicalAssesment();
      }
   };
   const getPhysicalAssesment = async () => {
      const conf = {
         headers: {},
         params: {
            inpatientRequestId: ListId
         }
      };
      const response = await Get('inpatient/physical-assesment', token, conf);
      setSheets(response.data);
   };
   const handlePrint = useReactToPrint({
      onBeforeGetContent: () => setPrintLoading(true),
      onBeforePrint: () => setPrintLoading(false),
      content: () => printRef.current
   });
   useEffect(() => {
      getPhysicalAssesment();
   }, []);
   return (
      <>
         <div className="flow-root">
            <div className="float-left">
               <Button type="primary" onClick={() => setIsOpenModal(true)}>
                  Хуудас бөглөх
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
            <div className="float-right"></div>
         </div>
         <div className="flex flex-wrap">
            <div className="w-full">
               <div className="flex flex-wrap">
                  <div ref={printRef} className="contents">
                     <Page1
                        patientData={PatientData}
                        form={sheets}
                        className="w-1/2"
                     />
                     <Page2 form={sheets} className="w-1/2" />
                  </div>
               </div>
            </div>
            <Modal
               title="Нэмэх"
               open={isOpenModal}
               onCancel={() => setIsOpenModal(false)}
               footer={null}
            >
               <Form
                  onFinishFailed={onFailed}
                  onFinish={onFinish}
                  form={bodyForm}
                  layout="vertical"
               >
                  <Collapse accordion defaultActiveKey={['1']}>
                     <Panel header="Амьсгал/Зүрх судас" key="1">
                        <div className="flex flex-wrap">
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Амьсгалалт"
                                    className="p-1"
                                    name={['respiratory', 'breathing']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Select
                                       options={[
                                          {
                                             label: 'Жигд',
                                             options: [
                                                {
                                                   label: 'Жигд',
                                                   value: 'Жигд'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Жигд бус',
                                             options: [
                                                {
                                                   label: 'Өнгөц',
                                                   value: 'Өнгөц'
                                                },
                                                {
                                                   label: 'Гүн',
                                                   value: 'Гүн'
                                                },
                                                {
                                                   label: 'Тоо олширсон',
                                                   value: 'Тоо олширсон'
                                                },
                                                {
                                                   label: 'Тоо цөөрсөн',
                                                   value: 'Тоо цөөрсөн'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Хамаарахгүй',
                                             value: 'Хамаарахгүй'
                                          }
                                       ]}
                                    />
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Чимээ"
                                    className="p-1"
                                    name={['respiratory', 'noise']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Select
                                       options={[
                                          {
                                             label: 'Жигд',
                                             options: [
                                                {
                                                   label: 'Хэвийн',
                                                   value: 'Хэвийн'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Хэвийн бус',
                                             options: [
                                                {
                                                   label: 'Сул',
                                                   value: 'Сул'
                                                },
                                                {
                                                   label: 'Тод',
                                                   value: 'Тод'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Хамаарахгүй',
                                             value: 'Хамаарахгүй'
                                          }
                                       ]}
                                    />
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Ханиалгалт"
                                    className="p-1"
                                    name={['respiratory', 'cough']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Үгүй'}>Үгүй</Radio>
                                          <Radio value={'Цэргүй'}>Цэргүй</Radio>
                                          <Radio value={'Цэртэй'}>Цэртэй</Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хаван"
                                    className="p-1"
                                    name={['respiratory', 'edema']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Select
                                       options={[
                                          {
                                             label: 'Хавангүй',
                                             options: [
                                                {
                                                   label: 'Хавангүй',
                                                   value: 'Хавангүй'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Хавантай',
                                             options: [
                                                {
                                                   label: 'Бүх биеэр',
                                                   value: 'Бүх биеэр'
                                                },
                                                {
                                                   label: 'Нүүрэнд',
                                                   value: 'Нүүрэнд'
                                                },
                                                {
                                                   label: 'Зовхонд',
                                                   value: 'Зовхонд'
                                                },
                                                {
                                                   label: 'Хэвлийд',
                                                   value: 'Хэвлийд'
                                                },
                                                {
                                                   label: 'Шилбэнд',
                                                   value: 'Шилбэнд'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Хамаарахгүй',
                                             value: 'Хамаарахгүй'
                                          }
                                       ]}
                                    />
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хялгасан судасны дахин дүүрэлт"
                                    className="p-1"
                                    name={['respiratory', 'capillary']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'2 секундээс бага'}>
                                             2 секундээс бага
                                          </Radio>
                                          <Radio value={'2 секундээс удаан'}>
                                             2 секундээс удаан
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Зүрхний хэм"
                                    className="p-1"
                                    name={['respiratory', 'heartPoint']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                    labelCol={{ span: 9 }}
                                    wrapperCol={{ span: 15 }}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Жигд'}>Жигд</Radio>
                                          <Radio value={'Хэм алдагдсан'}>
                                             Хэм алдагдсан
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                     </Panel>
                     <Panel
                        header="Хоол боловсруулалт"
                        key="2"
                        forceRender={true}
                     >
                        <div className="flex flex-wrap">
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хооллолт"
                                    className="p-1"
                                    name={['indigestion', 'eat']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Амаар'}>Амаар</Radio>
                                          <Radio value={'Гуурсаар'}>
                                             Гуурсаар
                                          </Radio>
                                          <Radio value={'Бусад замаар'}>
                                             Бусад замаар
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хоолны дэглэм"
                                    className="p-1"
                                    name={['indigestion', 'sitiology']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хоол хориогүй'}>
                                             Хоол хориогүй
                                          </Radio>
                                          <Radio value={'Хоол хориотой'}>
                                             Хоол хориотой
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хоолны дуршил"
                                    className="p-1"
                                    name={['indigestion', 'appetite']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хэвийн'}>Хэвийн</Radio>
                                          <Radio value={'Өөрчлөлттэй'}>
                                             Өөрчлөлттэй
                                          </Radio>
                                          <Radio value={'Огиулалттай'}>
                                             Огиулалттай
                                          </Radio>
                                          <Radio value={'Бөөлжүүлнэ'}>
                                             Бөөлжүүлнэ
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хэвлий"
                                    className="p-1"
                                    name={['indigestion', 'stomach']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хэвийн'}>Хэвийн</Radio>
                                          <Radio value={'Цэрдийсэн'}>
                                             Цэрдийсэн
                                          </Radio>
                                          <Radio value={'Хонхойж татагдсан'}>
                                             Хонхойж татагдсан
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Өтгөн"
                                    className="p-1"
                                    name={['indigestion', 'grease']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хэвийн'}>Хэвийн</Radio>
                                          <Radio value={'Хатуу'}>Хатуу</Radio>
                                          <Radio value={'Шингэн'}>Шингэн</Radio>
                                          <Radio value={'Өнгө өөрчлөгдсөн'}>
                                             Өнгө өөрчлөгдсөн
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                     </Panel>
                     <Panel
                        header="Шээс ялгаруулалт"
                        key="3"
                        forceRender={true}
                     >
                        <div className="flex flex-wrap">
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Шээсний гарц"
                                    className="p-1"
                                    name={['pee', 'peeOut']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хэвийн'}>Хэвийн</Radio>
                                          <Radio value={'Ихэссэн'}>
                                             Ихэссэн
                                          </Radio>
                                          <Radio value={'Багассан'}>
                                             Багассан
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Зовиур"
                                    className="p-1"
                                    name={['pee', 'peePain']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Өвдөлттэй'}>
                                             Өвдөлттэй
                                          </Radio>
                                          <Radio value={'Дүлэлттэй'}>
                                             Дүлэлттэй
                                          </Radio>
                                          <Radio value={'Тасалдсан'}>
                                             Тасалдсан
                                          </Radio>
                                          <Radio value={'Задгайрсан'}>
                                             Задгайрсан
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Өнгө үнэр"
                                    className="p-1"
                                    name={['pee', 'peeColor']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Өөрчлөлтгүй'}>
                                             Өөрчлөлтгүй
                                          </Radio>
                                          <Radio value={'Өөрчлөлттэй'}>
                                             Өөрчлөлттэй
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Шээс"
                                    className="p-1"
                                    name={['pee', 'peeStatus']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Шээлгүүргүй'}>
                                             Шээлгүүргүй
                                          </Radio>
                                          <Radio value={'Шээлгүүртэй'}>
                                             Шээлгүүртэй
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                     </Panel>
                     <Panel header="Арьс" key="4" forceRender={true}>
                        <div className="flex flex-wrap">
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Арьсны байдал"
                                    className="p-1"
                                    name={['skin', 'skinStatus']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Select
                                       options={[
                                          {
                                             label: 'Хэвийн',
                                             options: [
                                                {
                                                   label: 'Хэвийн',
                                                   value: 'Хэвийн'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Өөрчлөлттэй',
                                             options: [
                                                {
                                                   label: 'Улайсан',
                                                   value: 'Улайсан'
                                                },
                                                {
                                                   label: 'Хавдсан',
                                                   value: 'Хавдсан'
                                                },
                                                {
                                                   label: 'Зүсэгдсэн',
                                                   value: 'Зүсэгдсэн'
                                                },
                                                {
                                                   label: 'Шүүс гарсан',
                                                   value: 'Шүүс гарсан'
                                                },
                                                {
                                                   label: 'Идээлсэн',
                                                   value: 'Идээлсэн'
                                                },
                                                {
                                                   label: 'Тууралттай',
                                                   value: 'Тууралттай'
                                                },
                                                {
                                                   label: 'Цооролттой',
                                                   value: 'Цооролттой'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Хамаарахгүй',
                                             value: 'Хамаарахгүй'
                                          }
                                       ]}
                                    />
                                 </Form.Item>
                              </div>
                           </div>
                           <Divider
                              orientation="center"
                              className="text-sm my-2"
                           >
                              Арьсны эрүүл ахуй
                           </Divider>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Бүр биеийн угаалга хийх"
                                    className="p-1"
                                    name={['skin', 'bodyWash']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Шаардлагагүй'}>
                                             Шаардлагагүй
                                          </Radio>
                                          <Radio value={'Шаардлагатай'}>
                                             Шаардлагатай
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хэсэгчилсэн угаалга хийх"
                                    className="p-1"
                                    name={['skin', 'partWash']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Шаардлагагүй'}>
                                             Шаардлагагүй
                                          </Radio>
                                          <Radio value={'Шаардлагатай'}>
                                             Шаардлагатай
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Ор цэвэрлэх"
                                    className="p-1"
                                    name={['skin', 'bedWash']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Шаардлагагүй'}>
                                             Шаардлагагүй
                                          </Radio>
                                          <Radio value={'Шаардлагатай'}>
                                             Шаардлагатай
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <Divider></Divider>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Мэс заслын шарх"
                                    className="p-1"
                                    name={['skin', 'surgery']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Select
                                       options={[
                                          {
                                             label: 'Боолт',
                                             options: [
                                                {
                                                   label: 'Цэвэр',
                                                   value: 'Цэвэр'
                                                },
                                                {
                                                   label: 'Бохир',
                                                   value: 'Бохир'
                                                }
                                             ]
                                          },
                                          {
                                             label: 'Гуурстай',
                                             value: 'Гуурстай'
                                          },
                                          {
                                             label: 'Хамаарахгүй',
                                             value: 'Хамаарахгүй'
                                          }
                                       ]}
                                    />
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Уян зүү тавьсан хэсэг"
                                    className="p-1"
                                    name={['skin', 'targetNeedle']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хэвийн'}>Хэвийн</Radio>
                                          <Radio value={'Улайсан'}>
                                             Улайсан
                                          </Radio>
                                          <Radio value={'Хавдсан'}>
                                             Хавдсан
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                     </Panel>
                     <Panel
                        header="Мэдрэл, сэтгэхүйн байдал"
                        key="5"
                        forceRender={true}
                     >
                        <div className="flex flex-wrap">
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Ухаан санааны байдал"
                                    className="p-1"
                                    name={['mind', 'mindStatus']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хэвийн'}>Хэвийн</Radio>
                                          <Radio
                                             value={'Сэтгэл хөөрлийн байдалтай'}
                                          >
                                             Сэтгэл хөөрлийн байдалтай
                                          </Radio>
                                          <Radio
                                             value={'Сэтгэл түгшсэн байдалтай'}
                                          >
                                             Сэтгэл түгшсэн байдалтай
                                          </Radio>
                                          <Radio value={'Ухаангүй'}>
                                             Ухаангүй
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Орчиндоо (Бусадтай)"
                                    className="p-1"
                                    name={['mind', 'roomTemp']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Харьцаатай'}>
                                             Харьцаатай
                                          </Radio>
                                          <Radio value={'Сул'}>Сул</Radio>
                                          <Radio value={'Харьцаагүй'}>
                                             Харьцаагүй
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Өвдөлт"
                                    className="p-1"
                                    name={['mind', 'pain']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Өвдөлтгүй'}>
                                             Өвдөлтгүй
                                          </Radio>
                                          <Radio value={'Өвдөлттэй'}>
                                             Өвдөлттэй
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Үе мөчний хөдөлгөөн"
                                    className="p-1"
                                    name={['mind', 'bodyShake']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хэвийн'}>Хэвийн</Radio>
                                          <Radio value={'Хязгаардлагдмал'}>
                                             Хязгаардлагдмал
                                          </Radio>
                                          <Radio value={'Үений хавдалттай'}>
                                             Үений хавдалттай
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                     </Panel>
                     <Panel
                        header="Өдөр тутмын сувилгаа"
                        key="6"
                        forceRender={true}
                     >
                        <div className="flex flex-wrap">
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Уян зүү"
                                    className="p-1"
                                    name={['daily', 'needle']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Тавьсан/Сольсон'}>
                                             Тавьсан/Сольсон
                                          </Radio>
                                          <Radio value={'Бэхэлгээ хийсэн'}>
                                             Бэхэлгээ хийсэн
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Гуурсны арчилгаа"
                                    className="p-1"
                                    name={['daily', 'tubeCare']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Хийх шаардлагагүй'}>
                                             Хийх шаардлагагүй
                                          </Radio>
                                          <Radio value={'Хийгдсэн'}>
                                             Хийгдсэн
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Бургүй хийсэн"
                                    className="p-1"
                                    name={['daily', 'burgui']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio
                                             value={'Цэвэрлэх бургуй/ тосгон'}
                                          >
                                             Цэвэрлэх бургуй/ тосгон
                                          </Radio>
                                          <Radio value={'Эмчилгээний бургуй'}>
                                             Эмчилгээний бургуй
                                          </Radio>
                                          <Radio value={'Хий гаргах гуурс'}>
                                             Хий гаргах гуурс
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хэсэгчилсэн асаргаа"
                                    className="p-1"
                                    name={['daily', 'partCare']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Халуун жин тавьсан'}>
                                             Халуун жин тавьсан
                                          </Radio>
                                          <Radio value={'Хүйтэн жин тавьсан'}>
                                             Хүйтэн жин тавьсан
                                          </Radio>
                                          <Radio
                                             value={'Халуун бигнүүр тавьсан'}
                                          >
                                             Халуун бигнүүр тавьсан
                                          </Radio>
                                          <Radio
                                             value={'Хүйтэн бигнүүр тавьсан'}
                                          >
                                             Хүйтэн бигнүүр тавьсан
                                          </Radio>
                                          <Radio value={'Гич тавьсан'}>
                                             Гич тавьсан
                                          </Radio>
                                          <Radio value={'Бумба тавьсан'}>
                                             Бумба тавьсан
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="ЭМБ/Зөвлөгөө өгөх"
                                    className="p-1"
                                    name={['daily', 'advice']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio
                                             value={'Өөрт нь зөвлөгөө өгсөн'}
                                          >
                                             Өөрт нь зөвлөгөө өгсөн
                                          </Radio>
                                          <Radio
                                             value={
                                                'Гэр бүлд нь зөвлөгөө өгсөн'
                                             }
                                          >
                                             Гэр бүлд нь зөвлөгөө өгсөн
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Нөхөн сэргээх"
                                    className="p-1"
                                    name={['daily', 'reHealt']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio
                                             value={
                                                'Дасгал хөдөлгөөн хийлгэсэн'
                                             }
                                          >
                                             Дасгал хөдөлгөөн хийлгэсэн
                                          </Radio>
                                          <Radio value={'Иллэг массаж хийсэн'}>
                                             Иллэг массаж хийсэн
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Байрлал"
                                    className="p-1"
                                    name={['daily', 'position']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Сольсон /Цаг/'}>
                                             Сольсон /Цаг/
                                          </Radio>
                                          <Radio value={'Солих шаардлагагүй'}>
                                             Солих шаардлагагүй
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <Divider
                              orientation="center"
                              className="text-sm my-2"
                           >
                              Ариун цэвэр
                           </Divider>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Цагаан хэрэглэл сольсон"
                                    className="p-1"
                                    name={['daily', 'cwb']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'СУ(сувилагч)'}>
                                             СУ(сувилагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Үс угаасан"
                                    className="p-1"
                                    name={['daily', 'whead']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'СУ(сувилагч)'}>
                                             СУ(сувилагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Үс самнасан"
                                    className="p-1"
                                    name={['daily', 'hair']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'СУ(сувилагч)'}>
                                             СУ(сувилагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Сахал хуссан"
                                    className="p-1"
                                    name={['daily', 'beard']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'СУ(сувилагч)'}>
                                             СУ(сувилагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хувцас сольсон"
                                    className="p-1"
                                    name={['daily', 'clothes']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'СУ(сувилагч)'}>
                                             СУ(сувилагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хөл гарын хумс авсан"
                                    className="p-1"
                                    name={['daily', 'nails']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'СУ(сувилагч)'}>
                                             СУ(сувилагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Амны хөндий, шүд угаасан"
                                    className="p-1"
                                    name={['daily', 'tooth']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'СУ(сувилагч)'}>
                                             СУ(сувилагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хооллосон"
                                    className="p-1"
                                    name={['daily', 'food']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'СУ(сувилагч)'}>
                                             СУ(сувилагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <Divider></Divider>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Аюулгүй байдал"
                                    className="p-1"
                                    name={['daily', 'security']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio
                                             value={'Онцгой анхаарах тэмдэг'}
                                          >
                                             Онцгой анхаарах тэмдэг
                                          </Radio>
                                          <Radio
                                             value={'Унаж бэртэхээс сэргийлэх'}
                                          >
                                             Унаж бэртэхээс сэргийлэх
                                          </Radio>
                                          <Radio value={'Орны хашлага'}>
                                             Орны хашлага
                                          </Radio>
                                          <Radio value={'Тэргэнцэр, таяг'}>
                                             Тэргэнцэр, таяг
                                          </Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                     </Panel>
                     <Panel
                        header="Сувилгааны асуудал"
                        key="7"
                        forceRender={true}
                     >
                        <div className="flex flex-wrap">
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Амьсгал/зүрх судас"
                                    className="p-1"
                                    name={['nursing', 'breathing']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Тийм'}>Тийм</Radio>
                                          <Radio value={'Үгүй'}>Үгүй</Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Хоол боловсруулах"
                                    className="p-1"
                                    name={['nursing', 'food']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Тийм'}>Тийм</Radio>
                                          <Radio value={'Үгүй'}>Үгүй</Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Шээс ялгаруулалт"
                                    className="p-1"
                                    name={['nursing', 'peeOut']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Тийм'}>Тийм</Radio>
                                          <Radio value={'Үгүй'}>Үгүй</Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Арьс"
                                    className="p-1"
                                    name={['nursing', 'skin']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Тийм'}>Тийм</Radio>
                                          <Radio value={'Үгүй'}>Үгүй</Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Мэдрэл, сэтгэхүйн байдал"
                                    className="p-1"
                                    name={['nursing', 'mind']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Тийм'}>Тийм</Radio>
                                          <Radio value={'Үгүй'}>Үгүй</Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                           <div className="basis-1/2 p-1">
                              <div className="rounded-md bg-gray-100 w-full inline-block m-1">
                                 <Form.Item
                                    label="Өдөр тутмын сувилгаа"
                                    className="p-1"
                                    name={['nursing', 'daily']}
                                    rules={[
                                       { required: true, message: 'Заавал' }
                                    ]}
                                 >
                                    <Radio.Group>
                                       <Space direction="vertical">
                                          <Radio value={'Тийм'}>Тийм</Radio>
                                          <Radio value={'Үгүй'}>Үгүй</Radio>
                                          <Radio value={'Хамаарахгүй'}>
                                             Хамаарахгүй
                                          </Radio>
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                     </Panel>
                  </Collapse>
                  <Form.Item className="py-2">
                     <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full"
                     >
                        Хадгалах
                     </Button>
                  </Form.Item>
               </Form>
            </Modal>
         </div>
      </>
   );
}
export default BodyConditionSheet;
