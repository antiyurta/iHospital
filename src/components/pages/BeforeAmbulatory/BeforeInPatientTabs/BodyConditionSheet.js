import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
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
   let location = useLocation();
   console.log('location', location);
   const [bodyForm] = Form.useForm();
   const printRef = useRef();
   const [sheets, setSheets] = useState([]);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const token = useSelector(selectCurrentToken);
   const onFinish = async () => {
      bodyForm
         .validateFields()
         .then(async (values) => {
            const data = {
               patientId: PatientId,
               daily: values.daily,
               respiratory: values.respiratory,
               indigestion: values.indigestion,
               pee: values.pee,
               skin: values.skin,
               mind: values.mind
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
         })
         .catch((error) => {
            var string = '';
            var daily = false;
            var respiratory = false;
            var indigestion = false;
            var pee = false;
            var skin = false;
            var mind = false;
            error.errorFields.map((err) => {
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
               }
            });
         });
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
      content: () => printRef.current
   });
   useEffect(() => {
      getPhysicalAssesment();
   }, []);
   return (
      <>
         <Button onClick={handlePrint}>Хэвлэх</Button>
         <Button onClick={() => setIsOpenModal(true)}>Нэмэх</Button>
         <div className="flex flex-wrap">
            <div className="w-full">
               <div className="flex flex-wrap">
                  <div ref={printRef} className="contents">
                     <Page1 patientData={PatientData} className="w-1/2" />
                     <Page2 patientData={PatientData} className="w-1/2" />
                  </div>
               </div>
            </div>
            <Modal
               open={isOpenModal}
               onCancel={() => setIsOpenModal(false)}
            ></Modal>
            <div className="md:w-1/2 lg:w-1/2 p-1">
               <Table bordered className="ant-border-space">
                  <thead className="ant-table-thead bg-slate-200">
                     <tr>
                        <th className="font-bold text-sm text-start">
                           Огноо цаг
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <th key={index}>
                                 {moment(sheet.createdAt).format(
                                    'YYYY-MM-DD HH:mm'
                                 )}
                              </th>
                           );
                        })}
                     </tr>
                  </thead>
                  <tbody className="ant-table-thead bg-slate-200 ant-table-tbody p-0">
                     <tr>
                        <th className="font-bold text-sm text-start">
                           Амьсгалалт
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>
                                 {sheet.respiratory?.breathing}
                              </td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">Чимээ</th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>{sheet.respiratory?.noise}</td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           Ханиалгалт
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>{sheet.respiratory?.cough}</td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">Хаван</th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>{sheet.respiratory?.edema}</td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Хялгасан судасны</p>
                           <p>дахин</p>
                           <p>дүүрэлт</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>
                                 {sheet.respiratory?.capillary}
                              </td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Зүрхний хэм</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>
                                 {sheet.respiratory?.heartPoint}
                              </td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Хооллолт</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.indigestion?.eat}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Хоолны дэглэм</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>
                                 {sheet.indigestion?.sitiology}
                              </td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Хоолны дуршил</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>{sheet.indigestion?.appetite}</td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Хэвлий</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>{sheet.indigestion?.stomach}</td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Өтгөн</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>{sheet.indigestion?.grease}</td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Шээс/Шээсний гарц</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.pee?.peeOut}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Шээс/Зовиур</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.pee?.peePain}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Шээс/Өнгө,Үнэр</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.pee?.peeColor}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Шээс</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.pee?.peeStatus}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Арьсны байдал</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.skin?.skinStatus}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Арьсны эрүүл ахуй</p>
                           <p>/Бүх биеийн угаалга/</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.skin?.bodyWash}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Арьсны эрүүл ахуй</p>
                           <p>/Хэсэгчилсэн угаалга/</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.skin?.partWash}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Арьсны эрүүл ахуй</p>
                           <p>/Ор цэвэрлэх/</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.skin?.bedWash}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Мэс заслын шарх</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.skin?.surgery}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Уян зүү тавьсан хэсэг</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return (
                              <td key={index}>{sheet.skin?.targetNeedle}</td>
                           );
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Ухаан санааны байдал</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.mind?.mindStatus}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Орчиндоо</p>
                           <p>(Бусадтай)</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.mind?.roomTemp}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Өвдөлт</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.mind?.pain}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Үе мөчний</p>
                           <p>хөдөлгөөн</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.mind?.bodyShake}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Уян зүү</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.needle}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Гуурсны арчилгаа</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.tubeCare}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Бургүй хийсэн</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.burgui}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Хэсэгчилсэн</p>
                           <p>асаргаа</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.partCare}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>ЭМБ</p>
                           <p>Зөвлөгөө өгөх</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.advice}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Нөхөн сэргээх</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.reHealt}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Байрлал</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.position}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Ариун цэвэр</p>
                           <p>Цагаан хэрэглэл</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.cwb}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Ариун цэвэр</p>
                           <p>Үс угаасан</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.whead}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Ариун цэвэр</p>
                           <p>Үс самнасан</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.hair}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Ариун цэвэр</p>
                           <p>Сахал хуссан</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.beard}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Ариун цэвэр</p>
                           <p>Хувцас сольсон</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.clothes}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Ариун цэвэр</p>
                           <p>Хөл гарын хумс</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.nails}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Ариун цэвэр</p>
                           <p>Амны хөндий шүд</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.tooth}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Хооллосон</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.food}</td>;
                        })}
                     </tr>
                     <tr>
                        <th className="font-bold text-sm text-start">
                           <p>Аюулгүй байдал</p>
                        </th>
                        {sheets?.map((sheet, index) => {
                           return <td key={index}>{sheet.daily?.security}</td>;
                        })}
                     </tr>
                  </tbody>
               </Table>
            </div>
            <div className="md:w-1/2 lg:w-1/2 p-1">
               <Form form={bodyForm} layout="vertical">
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
                                             Хэвийн
                                          </Radio>
                                          <Radio value={'Сул'}>
                                             Сэтгэл хөөрлийн байдалтай
                                          </Radio>
                                          <Radio value={'Харьцаагүй'}>
                                             Сэтгэл түгшсэн байдалтай
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
                                             value={'Цэвэрлэх бургүй/ тосгон'}
                                          >
                                             Цэвэрлэх бургүй/ тосгон
                                          </Radio>
                                          <Radio value={'Эмчилгээний бургүй'}>
                                             Эмчилгээний бургүй
                                          </Radio>
                                          <Radio value={'Хий гаргах гуурс'}>
                                             Хий гаргах гуурс
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
                                          <Radio value={'СУ(сувьлагч)'}>
                                             СУ(сувьлагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
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
                                          <Radio value={'СУ(сувьлагч)'}>
                                             СУ(сувьлагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
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
                                          <Radio value={'СУ(сувьлагч)'}>
                                             СУ(сувьлагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
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
                                          <Radio value={'СУ(сувьлагч)'}>
                                             СУ(сувьлагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
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
                                          <Radio value={'СУ(сувьлагч)'}>
                                             СУ(сувьлагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
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
                                          <Radio value={'СУ(сувьлагч)'}>
                                             СУ(сувьлагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
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
                                          <Radio value={'СУ(сувьлагч)'}>
                                             СУ(сувьлагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
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
                                          <Radio value={'СУ(сувьлагч)'}>
                                             СУ(сувьлагч)
                                          </Radio>
                                          <Radio value={'Ө(эмчлүүлэгч өөрөө)'}>
                                             Ө(эмчлүүлэгч өөрөө)
                                          </Radio>
                                          <Radio value={'СА(сахиур)'}>
                                             СА(сахиур)
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
                                       </Space>
                                    </Radio.Group>
                                 </Form.Item>
                              </div>
                           </div>
                        </div>
                     </Panel>
                  </Collapse>
               </Form>
               <Button onClick={() => onFinish()}>Хадгалах</Button>
            </div>
         </div>
      </>
   );
}
export default BodyConditionSheet;
